import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Use environment variables in production, fallback to development values
const supabaseUrl = 'https://zvapwryhkczxlfwfdjrd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2YXB3cnloa2N6eGxmd2ZkanJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3MTQ4ODIsImV4cCI6MjA1MTI5MDg4Mn0.8CFbvGPOzz3A9UdKseEXyun_j7_lfVMZI1aYjbLp4n0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Check if user is authenticated
export async function checkAuth() {
    const { data: { session }, error } = await supabase.auth.getSession();
    return session !== null;
}

// Handle admin authentication
export async function handleAdminAuth() {
    const isAuthenticated = await checkAuth();
    if (!isAuthenticated && window.location.pathname.startsWith('/admin')) {
        window.location.href = '/admin/index.html';
        return false;
    }
    return true;
}