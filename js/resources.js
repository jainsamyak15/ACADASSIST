import { supabase } from './supabase.js';

// Load hackathons
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

    container.innerHTML = hackathons.map((hackathon, index) => `
        <div class="hackathon-card bg-white rounded-lg overflow-hidden shadow-md">
            <img src="${hackathon.image_url}" alt="${hackathon.title}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h2 class="text-2xl font-semibold mb-2">${hackathon.title}</h2>
                <p class="text-gray-600 mb-4">${hackathon.description}</p>
                <div class="flex items-center mb-4">
                    <i class="far fa-calendar-alt text-gray-400 mr-2"></i>
                    <span class="text-sm text-gray-600">${hackathon.date}</span>
                </div>
                <div class="flex items-center mb-4">
                    <i class="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                    <span class="text-sm text-gray-600">${hackathon.location}</span>
                </div>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${hackathon.tags.map(tag => 
                        `<span class="tag bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">${tag}</span>`
                    ).join('')}
                </div>
                <a href="#" class="button-gradient text-white font-bold py-2 px-4 rounded-full inline-block hover:opacity-90 transition-all duration-300">Register Now</a>
            </div>
        </div>
    `).join('');
}

// Load internships
export async function loadInternships() {
    const { data: internships, error } = await supabase
        .from('internships')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading internships:', error);
        return;
    }

    const industrialCarousel = document.querySelector('#industrial .internship-carousel');
    const researchCarousel = document.querySelector('#research .internship-carousel');
    
    if (!industrialCarousel || !researchCarousel) return;

    const createInternshipCard = (internship) => `
        <div class="book">
            <div class="cover">
                <h3>${internship.title}</h3>
                <p><strong>Company:</strong> ${internship.company}</p>
                <p><strong>Location:</strong> ${internship.location}</p>
                <p><strong>Duration:</strong> ${internship.duration}</p>
                <p><strong>Stipend:</strong> ${internship.stipend}</p>
                <a href="#" class="btn">Apply Now</a>
            </div>
            <div class="content">
                <h3>${internship.title}</h3>
                <p>${internship.description}</p>
                <a href="#" class="btn">Apply Now</a>
            </div>
        </div>
    `;

    industrialCarousel.innerHTML = internships
        .filter(internship => internship.type === 'industrial')
        .map(createInternshipCard)
        .join('');

    researchCarousel.innerHTML = internships
        .filter(internship => internship.type === 'research')
        .map(createInternshipCard)
        .join('');
}

// Load scholarships
export async function loadScholarships() {
    const { data: scholarships, error } = await supabase
        .from('scholarships')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error loading scholarships:', error);
        return;
    }

    const container = document.querySelector('.scholarship-grid');
    if (!container) return;

    container.innerHTML = scholarships.map(scholarship => `
        <div class="scholarship-card">
            <div class="card-front">
                <div class="scholarship-icon">
                    <i class="${scholarship.icon}"></i>
                </div>
                <h3 class="scholarship-title">${scholarship.title}</h3>
                <div class="scholarship-amount">${scholarship.amount}</div>
            </div>
            <div class="card-back">
                <h3>${scholarship.title}</h3>
                <p class="scholarship-description">${scholarship.description}</p>
                <a href="#" class="apply-button">Apply Now</a>
            </div>
        </div>
    `).join('');
}

// Handle contact form submission
export async function handleContactSubmission(event) {
    event.preventDefault();
    
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