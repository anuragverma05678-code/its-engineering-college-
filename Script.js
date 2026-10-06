// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Explore More button
const exploreButton = document.querySelector('.explore-btn');

if (exploreButton) {
    exploreButton.addEventListener('click', function() {
        const aboutSection = document.querySelector('#about');

        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}

// Welcome message
window.addEventListener('load', function() {
    console.log("ITS Engineering College website loaded successfully!");
});
