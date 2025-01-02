import { supabase, handleAdminAuth } from '../js/supabase.js';

// Add authentication check before any data modification
async function checkAuthBeforeAction() {
    const isAuthenticated = await handleAdminAuth();
    if (!isAuthenticated) {
        window.location.href = '/admin/index.html';
        return false;
    }
    return true;
}

// Modified functions to check auth before actions
export async function loadHackathons() {
    const { data: hackathons, error } = await supabase
        .from('hackathons')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading hackathons:', error);
        return;
    }

    const container = document.getElementById('hackathon-container');
    if (!container) return;

    // Rest of your loadHackathons code...
}

export async function loadInternships() {
    const { data: internships, error } = await supabase
        .from('internships')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading internships:', error);
        return;
    }

    // Rest of your loadInternships code...
}

export async function loadScholarships() {
    const { data: scholarships, error } = await supabase
        .from('scholarships')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading scholarships:', error);
        return;
    }

    // Rest of your loadScholarships code...
}

// Modified contact form submission with auth check
export async function handleContactSubmission(event) {
    event.preventDefault();
    
    if (!(await checkAuthBeforeAction())) return;
    
    const formData = new FormData(event.target);
    
    const { data, error } = await supabase
        .from('contacts')
        .insert([{
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        }]);

    if (error) {
        alert('Error submitting message: ' + error.message);
    } else {
        alert('Message sent successfully!');
        event.target.reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmission);
    }

    loadHackathons();
    loadInternships();
    loadScholarships();
});