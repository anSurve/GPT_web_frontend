document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        hamburger.classList.toggle('toggle');

        // Animate Links
        navLinks.querySelectorAll('li').forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);

        if (!isClickInside && navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.classList.remove('toggle');

            navLinks.querySelectorAll('li').forEach((link) => {
                link.style.animation = '';
            });
        }
    });

});
