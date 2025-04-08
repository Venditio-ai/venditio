import { NextResponse } from 'next/server'
import { supabase } from '@/config/supabase'

export async function POST(request: Request) {
  try {
    const { full_name, email, company, role, industry } = await request.json()
    
    // Basic validation
    if (!full_name || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      )
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    
    // First check if email already exists to handle duplicate gracefully
    const { data: existingData } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email)
      .maybeSingle()
      
    if (existingData) {
      return NextResponse.json(
        { error: 'This email is already on our waitlist. Thank you for your interest!' },
        { status: 409 }
      )
    }
    
    // Use RPC function to bypass RLS policies
    const { data, error } = await supabase.rpc('add_to_waitlist', {
      p_full_name: full_name,
      p_email: email,
      p_company: company || null,
      p_role: role || null,
      p_industry: industry || null
    })
    
    if (error) {
      // Handle unique constraint violation
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on our waitlist. Thank you for your interest!' },
          { status: 409 }
        )
      }
      
      console.error('Error submitting to waitlist:', error)
      return NextResponse.json(
        { error: 'There was an error submitting your information' },
        { status: 500 }
      )
    }
    
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
