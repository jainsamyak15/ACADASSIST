import { supabase } from '../js/supabase.js';

// Authentication
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.get('email'),
        password: formData.get('password')
    });

    if (error) {
        alert('Login error: ' + error.message);
    } else {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('dashboardSection').classList.remove('hidden');
    }
});

document.getElementById('logoutBtn').addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
        document.getElementById('dashboardSection').classList.add('hidden');
        document.getElementById('loginSection').classList.remove('hidden');
    }
});

// Check authentication status on page load
supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('dashboardSection').classList.remove('hidden');
    } else if (event === 'SIGNED_OUT') {
        document.getElementById('dashboardSection').classList.add('hidden');
        document.getElementById('loginSection').classList.remove('hidden');
    }
});


// Tab switching functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.dataset.tab;
        
        // Update active states
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.add('hidden'));
        
        button.classList.add('active');
        document.getElementById(tabName).classList.remove('hidden');

        // Load contact messages if contacts tab is selected
        if (tabName === 'contacts') {
            loadContactMessages();
        }
    });
});

// Form submissions
document.getElementById('internshipForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const { data, error } = await supabase
        .from('internships')
        .insert([{
            title: formData.get('title'),
            company: formData.get('company'),
            location: formData.get('location'),
            duration: formData.get('duration'),
            stipend: formData.get('stipend'),
            description: formData.get('description')
        }]);

    if (error) {
        alert('Error adding internship: ' + error.message);
    } else {
        alert('Internship added successfully!');
        e.target.reset();
    }
});

document.getElementById('hackathonForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const { data, error } = await supabase
        .from('hackathons')
        .insert([{
            title: formData.get('title'),
            description: formData.get('description'),
            date: formData.get('date'),
            location: formData.get('location'),
            image_url: formData.get('image_url'),
            tags: formData.get('tags').split(',').map(tag => tag.trim())
        }]);

    if (error) {
        alert('Error adding hackathon: ' + error.message);
    } else {
        alert('Hackathon added successfully!');
        e.target.reset();
    }
});

document.getElementById('scholarshipForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const { data, error } = await supabase
        .from('scholarships')
        .insert([{
            title: formData.get('title'),
            amount: formData.get('amount'),
            description: formData.get('description'),
            icon: formData.get('icon')
        }]);

    if (error) {
        alert('Error adding scholarship: ' + error.message);
    } else {
        alert('Scholarship added successfully!');
        e.target.reset();
    }
});

async function loadContactMessages() {
    const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        alert('Error loading messages: ' + error.message);
        return;
    }

    const messagesContainer = document.getElementById('contactMessages');
    messagesContainer.innerHTML = data.map(message => `
        <div class="bg-white p-4 rounded shadow">
            <div class="font-bold">${message.name}</div>
            <div class="text-gray-600">${message.email}</div>
            <div class="mt-2">${message.message}</div>
            <div class="text-sm text-gray-500 mt-2">${new Date(message.created_at).toLocaleString()}</div>
        </div>
    `).join('');
}