import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vlmlufvpdxsnjqzsldeq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsbWx1ZnZwZHhzbmpxenNsZGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1MTkyNjYsImV4cCI6MjA2NTA5NTI2Nn0.HKf5kWdNXaV4C_IqHCqs6lIt5g_-v7LKsfe5a_n8h4s'

export const supabase = createClient(supabaseUrl, supabaseKey)
