import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Environment variables kontrolü
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase environment variables eksik! NEXT_PUBLIC_SUPABASE_URL ve NEXT_PUBLIC_SUPABASE_ANON_KEY tanımlanmalı.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
