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

// Custom cursor (only on desktop)
if (window.innerWidth > 768) {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');


    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.1,
        })
        gsap.to(cursorFollower, {
            x: e.clientX - 20,
            y: e.clientY - 20,
            duration: 0.2,
        });
    }
        // Show custom cursor on mouse move
    );
}

// initialze loader on page load
window.addEventListener('load', initLoader);


// initialze all animations
function initAnimations() {
    // Navigation animation
    gsap.to('nav', {
        duration: 1,
        ease: 'power2.inOut',
        y: 0
    });

    // Hero animation
    const heroT1 = gsap.timeline()
    heroT1.to('.hero-title', {
        duration: 1.2,
        filter: 'blur(0px)',
        ease: 'power3.out',
        y: 0,
        opacity: 1
    }).to('.hero-subtitle', {
        duration: 0.8,
        filter: 'blur(0px)',
        ease: 'power3.out',
        y: 0,
        opacity: 1
    }, '-=0.5')
    .to('.hero-description', {
        duration: 0.8,
        filter: 'blur(0px)',
        ease: 'power3.out',
        y: 0,
        opacity: 1
    }, '-=0.3')
    .to('.cta-button', {
        duration: 0.8,
        filter: 'blur(0px)',
        ease: 'power3.out',
        y: 0,
        opacity: 1
     }, '-=0.3')

}