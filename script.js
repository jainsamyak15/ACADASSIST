

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
      
      // To check the scroll position on page load
      reveal();
    

    // Typing animation
    const typingAnimation = (element, text, speed = 75) => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    };

    const heroTitle = document.querySelector('#hero h1');
    typingAnimation(heroTitle, 'Turn small milestones into innovative education goals.');

    // Form submission (prevent default for demo)
    const newsletterForm = document.querySelector('#newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
        });
    }

    // Mobile menu toggle (add a button in HTML for this to work)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
});

const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];
  
  function createReviewCard(review) {
    return `
      <div class="review-card">
        <img src="${review.img}" alt="${review.name}">
        <div class="review-text">
          <p class="review-name">${review.name}</p>
          <p class="review-username">${review.username}</p>
          <p class="review-body">${review.body}</p>
        </div>
      </div>
    `;
  }
  
  function populateReviews() {
    const marquee = document.getElementById('marquee');
if (marquee) {
    const reviewsHTML = reviews.map(createReviewCard).join('');
    marquee.innerHTML = reviewsHTML + reviewsHTML; // Duplicate reviews for continuous scrolling
} else {
    console.error('Element with ID "marquee" not found.');
}

  }
  
  populateReviews();

  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
          const answer = this.nextElementSibling;
          answer.classList.toggle('show');
      });
  });

  const textElements = document.querySelectorAll('.text-reveal');

  textElements.forEach(textElement => {
      const words = textElement.textContent.split(' ');
      textElement.innerHTML = words.map(word => `
          <span class="word">
              <span class="word-bg">${word}</span>
              <span class="word-main">${word}</span>
          </span>
      `).join(' ');

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: textElement,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
          }
      });

      tl.to(textElement.querySelectorAll('.word-main'), {
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
      });
  });


