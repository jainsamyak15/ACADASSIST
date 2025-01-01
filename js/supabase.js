// js/supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://zvapwryhkczxlfwfdjrd.supabase.co'  // Replace with your actual URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2YXB3cnloa2N6eGxmd2ZkanJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTQ4ODIsImV4cCI6MjA1MTI5MDg4Mn0.8CFbvGPOzz3A9UdKseEXyun_j7_lfVMZI1aYjbLp4n0'  // Replace with your actual key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)