document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        gsap.from(card, {
            duration: 1,
            opacity: 0,
            y: 50,
            delay: index * 0.2,
            ease: 'power3.out'
        });

        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        cards.forEach((card) => {
            gsap.to(card, {
                duration: 0.3,
                x: mouseX * 30,
                y: mouseY * 30,
                rotationY: mouseX * 10,
                rotationX: -mouseY * 10,
                ease: 'power2.out'
            });
        });
    });
});