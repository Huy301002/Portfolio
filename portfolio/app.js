// GSAP plugins are already loaded via CDN in the HTML file
const gsap = window.gsap // Declare gsap variable
const ScrollTrigger = window.ScrollTrigger // Declare ScrollTrigger variable

// themee management
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// check for saved theme perference or default to "dark"
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);


themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Animate the theme toggle button
    gsap.to(themeToggle, {
        scale: 0.9,
        duration: 0.3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: 1,
    });
});

// Mobile menu Management
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');

    //prevent body scroll when menu is open
    if (mobileMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

// Loading Animation
function initLoader() {
    const loader = document.querySelector('.loader');
    const loaderText = document.querySelector('.loader-text');
    const LoaderProgress = document.querySelector('.loader-progress');

    // animation loader text
    gsap.to(loaderText, {
        opacity: 1,
        duration: 0.7,
        ease: 'power2.Out',
    });
    // animation progress bar
    gsap.to(LoaderProgress, {
        width: "100%",
        duration: 2,
        ease: 'power2.inOut',
        onComplete: () => {
            // Hide the loader after the animation completes
            gsap.to(loader, {
                opacity: 0,
                duration: 0.7,
                onComplete: () => {
                    loader.style.display = 'none'; 
                    initAnimations();
                }

            });
        }
    });
}
// initialze loader on page load
window.addEventListener('load',initLoader);


// initialze all animations
function initAnimations() {
   // Navigation animation
    gsap.to('nav', {
        duration: 1,
        ease: 'power2.inOut',
        y: 0
    });
}