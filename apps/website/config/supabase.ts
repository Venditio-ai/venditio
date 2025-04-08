import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'

const supabaseUrl = 'https://gaibagebaqvibdouvcnh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhaWJhZ2ViYXF2aWJkb3V2Y25oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3ODcwNzAsImV4cCI6MjA1OTM2MzA3MH0.2RsRXp9Jb-gvnskf8t5KkSt39MAJIw5dmtueyN47mHY'

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Types for the database schema
export type Profile = {
  id: string
  created_at: string
  updated_at: string
  email: string
  full_name: string | null
  company: string | null
  role: string | null
}

export type WaitlistEntry = {
  id: string
  created_at: string
  email: string
  full_name: string
  company: string | null
  role: string | null
  industry: string | null
  status: 'pending' | 'approved' | 'rejected'
  notes: string | null
}

// Helper functions for database operations
export const waitlistOperations = {
  async addToWaitlist(data: Omit<WaitlistEntry, 'id' | 'created_at' | 'status' | 'notes'>) {
    // Add default values for status and notes to satisfy RLS policies
    const fullData = {
      ...data,
      status: 'pending' as const,
      notes: null
    };
    
    return await supabase
      .from('waitlist')
      .insert([fullData])
      .select()
      .single()
  },
}

export const profileOperations = {
  async getProfile() {
    return await supabase
      .from('profiles')
      .select('*')
      .single()
  },

  async updateProfile(data: Partial<Profile>) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    
    return await supabase
      .from('profiles')
      .update(data)
      .eq('id', user.id)
      .select()
      .single()
  },
}
