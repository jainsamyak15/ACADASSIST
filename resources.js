const hackathonData = [
    {
        title: "CodeFest 2024",
        description: "48-hour coding marathon with amazing prizes!",
        image: "https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flw8-hackathon%2Fthumbnail.png&w=3840&q=100",
        date: "June 15-17, 2024",
        location: "San Francisco, CA",
        tags: ["AI", "Blockchain", "IoT"]
    },
    {
        title: "HackEd",
        description: "Education-focused hackathon for innovative learning solutions.",
        image: "https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flw8-hackathon%2Fthumbnail.png&w=3840&q=100",
        date: "July 8-10, 2024",
        location: "New York, NY",
        tags: ["EdTech", "AR/VR", "Mobile"]
    },
    {
        title: "GreenHack",
        description: "Sustainable solutions for a better planet.",
        image: "https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flw8-hackathon%2Fthumbnail.png&w=3840&q=100",
        date: "August 5-7, 2024",
        location: "Seattle, WA",
        tags: ["CleanTech", "Sustainability", "IoT"]
    },
    {
        title: "HealthTech Challenge",
        description: "Innovating healthcare with cutting-edge technology.",
        image: "https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flw8-hackathon%2Fthumbnail.png&w=3840&q=100",
        date: "September 20-22, 2024",
        location: "Boston, MA",
        tags: ["HealthTech", "AI", "Wearables"]
    },
    {
        title: "FinHack 2024",
        description: "Revolutionizing finance through technology.",
        image: "https://supabase.com/_next/image?url=%2Fimages%2Fblog%2Flw8-hackathon%2Fthumbnail.png&w=3840&q=100",
        date: "October 12-14, 2024",
        location: "London, UK",
        tags: ["FinTech", "Blockchain", "AI"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const hackathonContainer = document.getElementById('hackathon-container');

    hackathonData.forEach((hackathon, index) => {
        const card = createHackathonCard(hackathon, index);
        hackathonContainer.appendChild(card);
    });

    // Add intersection observer for animation
    const cards = document.querySelectorAll('.hackathon-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});

function createHackathonCard(hackathon, index) {
    const card = document.createElement('div');
    card.className = 'hackathon-card bg-white rounded-lg overflow-hidden shadow-md';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <img src="${hackathon.image}" alt="${hackathon.title}" class="w-full h-48 object-cover">
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
                ${hackathon.tags.map(tag => `<span class="tag bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">${tag}</span>`).join('')}
            </div>
            <a href="#" class="button-gradient text-white font-bold py-2 px-4 rounded-full inline-block hover:opacity-90 transition-all duration-300">Register Now</a>
        </div>
    `;

    return card;
}
document.addEventListener('DOMContentLoaded', () => {
    const dropdownButton = document.getElementById('resourcesDropdown');
    const dropdownMenu = document.getElementById('resourcesMenu');

    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('show');
        dropdownButton.setAttribute('aria-expanded', dropdownMenu.classList.contains('show'));
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
            dropdownButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle keyboard navigation
    dropdownMenu.addEventListener('keydown', (e) => {
        const items = dropdownMenu.querySelectorAll('.dropdown-item');
        const currentIndex = Array.from(items).indexOf(document.activeElement);

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % items.length;
                items[nextIndex].focus();
                break;
            case 'ArrowUp':
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + items.length) % items.length;
                items[prevIndex].focus();
                break;
            case 'Escape':
                dropdownMenu.classList.remove('show');
                dropdownButton.setAttribute('aria-expanded', 'false');
                dropdownButton.focus();
                break;
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scholarshipData = [
        {
            title: "Global Leadership Scholarship",
            amount: "$10,000",
            description: "For students demonstrating exceptional leadership skills and global awareness.",
            icon: "fas fa-globe-americas"
        },
        {
            title: "STEM Excellence Award",
            amount: "$15,000",
            description: "Supporting future innovators in Science, Technology, Engineering, and Mathematics.",
            icon: "fas fa-atom"
        },
        {
            title: "Arts & Humanities Grant",
            amount: "$8,000",
            description: "Empowering creative minds to shape the future of arts and culture.",
            icon: "fas fa-palette"
        },
        {
            title: "Environmental Sustainability Scholarship",
            amount: "$12,000",
            description: "For students committed to developing solutions for a sustainable future.",
            icon: "fas fa-leaf"
        },
        {
            title: "Diversity in Tech Scholarship",
            amount: "$20,000",
            description: "Promoting diversity and inclusion in the technology sector.",
            icon: "fas fa-laptop-code"
        },
        {
            title: "Future Entrepreneurs Fund",
            amount: "$18,000",
            description: "Supporting aspiring entrepreneurs with innovative business ideas.",
            icon: "fas fa-lightbulb"
        }
    ];

    const scholarshipGrid = document.querySelector('.scholarship-grid');

    scholarshipData.forEach((scholarship, index) => {
        const card = document.createElement('div');
        card.className = 'scholarship-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="card-front">
                <i class="${scholarship.icon} scholarship-icon"></i>
                <h2 class="scholarship-title">${scholarship.title}</h2>
                <div class="scholarship-amount">${scholarship.amount}</div>
            </div>
            <div class="card-back">
                <p class="scholarship-description">${scholarship.description}</p>
                <a href="#" class="apply-button">Apply Now</a>
            </div>
        `;

        scholarshipGrid.appendChild(card);
    });

    // Add hover effect to cards
    const cards = document.querySelectorAll('.scholarship-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate header on page load
// gsap.from('header', {
//     y: -100,
//     opacity: 0,
//     duration: 1,
//     ease: 'power3.out'
// });

// // Animate navigation links
// gsap.from('nav ul li', {
//     opacity: 0,
//     y: 20,
//     stagger: 0.2,
//     duration: 0.8,
//     ease: 'power3.out',
//     delay: 0.5
// });

// Animate book cards on scroll
gsap.utils.toArray('.book').forEach((book, index) => {
    gsap.from(book, {
        scrollTrigger: {
            trigger: book,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        rotation: 5,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.1
    });
});

// Function to initialize a carousel
function initializeCarousel(carouselContainer) {
    const internshipCarousel = carouselContainer.querySelector('.internship-carousel');
    const prevButton = carouselContainer.querySelector('.carousel-button.prev');
    const nextButton = carouselContainer.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function updateCarouselPosition() {
        const cardWidth = carouselContainer.querySelector('.book').offsetWidth + 20; // Including the margin
        internshipCarousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    nextButton.addEventListener('click', () => {
        const totalCards = carouselContainer.querySelectorAll('.book').length;
        if (currentIndex < totalCards - 3) { // Ensure we don't go past the last visible card
            currentIndex++;
            updateCarouselPosition();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });
}

// Initialize both carousels
document.querySelectorAll('.carousel-container').forEach(initializeCarousel);