import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'

// Create a Supabase client with admin privileges for server-side operations
// This should never be exposed to the client side
const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gaibagebaqvibdouvcnh.supabase.co',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

export { supabaseAdmin }
