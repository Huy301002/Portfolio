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
    }, '-=0.3');

    // About section animation
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        x: -50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });

    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });

    // Skills section animation
    gsap.from('.skills-category', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.skill-item', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
    });

    // Projects section animation
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out'
    });

    // Contact section animation
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: -50,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.3
    });

    gsap.from('.contact-item', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        y: 30,
        opacity: 0,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.3
    });

    // Initialize skills animations
    initSkillsAnimations();
}

// Smooth Scroll and Active Navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Function to handle smooth scroll
const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    const navHeight = document.querySelector('nav').offsetHeight;
    const targetPosition = targetSection.offsetTop - navHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    // Close mobile menu if open
    if (mobileMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.style.overflow = '';
    }
};

// Add click event listeners to all navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        handleSmoothScroll(e, link.getAttribute('href'));
    });
});

mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        handleSmoothScroll(e, link.getAttribute('href'));
    });
});

// Function to update active navigation link
const updateActiveLink = () => {
    const scrollPosition = window.scrollY + 100; // Offset for better detection

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            mobileLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to current section's link
            document.querySelector(`.nav-links a[href="#${sectionId}"]`)?.classList.add('active');
            document.querySelector(`.mobile-menu a[href="#${sectionId}"]`)?.classList.add('active');
        }
    });
};

// Add scroll event listener
window.addEventListener('scroll', updateActiveLink);

// Initialize active link on page load
window.addEventListener('load', updateActiveLink);

// Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to your backend
    // For now, we'll just log it and show a success message
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (barPosition < screenPosition) {
            bar.style.width = bar.style.width; // Trigger animation
        }
    });
};

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

// Skills section animations
function initSkillsAnimations() {
    const skillCards = document.querySelectorAll('.skill-bento-card');
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                // Add a subtle hover effect
                entry.target.addEventListener('mouseenter', () => {
                    gsap.to(entry.target, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: 'power2.out',
                        boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.25)'
                    });
                });
                
                entry.target.addEventListener('mouseleave', () => {
                    gsap.to(entry.target, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'power2.out',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                    });
                });
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });

    // Observe each skill card
    skillCards.forEach(card => {
        card.style.visibility = 'hidden';
        observer.observe(card);
        
        // Add click animation
        card.addEventListener('click', () => {
            gsap.to(card, {
                scale: 0.95,
                duration: 0.1,
                ease: 'power2.in',
                onComplete: () => {
                    gsap.to(card, {
                        scale: 1,
                        duration: 0.3,
                        ease: 'elastic.out(1, 0.5)'
                    });
                }
            });
        });
    });

    // Add floating animation to icons
    skillCards.forEach(card => {
        const icon = card.querySelector('.skill-bento-icon');
        if (icon) {
            gsap.to(icon, {
                y: -5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                delay: Math.random() * 0.5
            });
        }
    });
}

// Hiệu ứng xuất hiện lần lượt cho skills
function staggerSkillsAnimation() {
    const skillCards = Array.from(document.querySelectorAll('.skills-bento-grid .skill-bento-card'));
    // Định nghĩa grid-template-areas giống trong CSS
    const gridAreas = [
        ['cpp', 'reactjs', 'flutter', 'figma'],
        ['nextjs', 'prompt', 'prompt', 'vscode'],
        ['mssql', 'prompt', 'prompt', 'reactnative'],
        ['java', 'github', 'vercel', 'reactnative'],
        ['htmlcss', 'htmlcss', 'htmlcss', 'htmlcss']
    ];

    // Tạo mảng theo thứ tự trái sang phải, trên xuống dưới
    const orderedCards = [];
    const used = new Set();
    for (let row of gridAreas) {
        for (let area of row) {
            // Tìm card đầu tiên có grid-area này mà chưa được thêm vào
            const card = skillCards.find(c => c.style.gridArea === area && !used.has(c));
            if (card) {
                orderedCards.push(card);
                used.add(card);
            }
        }
    }

    // Gán delay theo thứ tự đã sắp xếp
    orderedCards.forEach((card, idx) => {
        card.style.animationDelay = `${1.5 * idx}s`;
        card.style.animationPlayState = 'paused';
        card.classList.remove('animated');
    });

    // Intersection Observer như cũ
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                orderedCards.forEach(card => {
                    card.style.animationPlayState = 'running';
                    card.classList.add('animated');
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.2 });

    if (orderedCards.length > 0) {
        observer.observe(orderedCards[0].parentElement);
    }
}

window.addEventListener('DOMContentLoaded', staggerSkillsAnimation);

// CV Swiper - Define functions immediately
var currentCardIndex = 0;
var totalCards = 2;

// Simple card swap function
function simpleSwap() {
  console.log('Simple swap triggered');
  
  const cards = document.querySelectorAll('.cv-img');
  if (cards.length !== 2) {
    console.log('Invalid number of cards:', cards.length);
    return;
  }
  
  const frontCard = document.querySelector('.cv-img.cv-front');
  const backCard = document.querySelector('.cv-img.cv-back');
  
  if (!frontCard || !backCard) {
    console.log('Cards not found, reinitializing classes');
    // Reinitialize classes
    cards[0].className = 'cv-img cv-front';
    cards[1].className = 'cv-img cv-back';
    return;
  }
  
  // Simple class swap
  frontCard.classList.remove('cv-front');
  frontCard.classList.add('cv-back');
  
  backCard.classList.remove('cv-back');
  backCard.classList.add('cv-front');
  
  // Counter removed
  
  console.log('Card swap completed');
}

// Export to global scope immediately
window.swipeRight = simpleSwap;
window.swipeLeft = simpleSwap;
window.simpleSwap = simpleSwap;

console.log('CV Swiper functions defined:', typeof window.swipeRight);

function initCVSwiper() {
  console.log('Initializing CV Swiper...');
  const cvStack = document.querySelector('.cv-stack');
  if (!cvStack) {
    console.log('CV Stack not found!');
    return;
  }
  
  const cards = document.querySelectorAll('.cv-img');
  console.log('Found cards:', cards.length);
  
  // Ensure initial classes are correct
  cards.forEach((card, index) => {
    card.classList.remove('cv-front', 'cv-back');
    if (index === 0) {
      card.classList.add('cv-front');
    } else {
      card.classList.add('cv-back');
    }
  });
  
  // Enhanced touch/mouse handling for swipe
  let startX = 0;
  let startY = 0;
  let isDragging = false;
  let hasMoved = false;
  
  // Touch events for mobile
  cvStack.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    isDragging = true;
    hasMoved = false;
    cvStack.classList.add('dragging');
    console.log('Touch start at:', startX);
  });
  
  cvStack.addEventListener('touchmove', function(e) {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = Math.abs(currentX - startX);
    const deltaY = Math.abs(currentY - startY);
    
    // If moved more than 10px, consider it a drag
    if (deltaX > 10 || deltaY > 10) {
      hasMoved = true;
    }
    
    console.log('Touch move, deltaX:', deltaX, 'deltaY:', deltaY);
  });
  
  cvStack.addEventListener('touchend', function(e) {
    if (!isDragging) return;
    
    if (hasMoved) {
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;
      
      console.log('Touch end with movement, deltaX:', deltaX);
      
      if (Math.abs(deltaX) > 30) { // Reduced threshold for easier swipe
        console.log('Swipe detected! Direction:', deltaX > 0 ? 'right' : 'left');
        simpleSwap();
      }
    } else {
      // It's a tap, not a swipe
      console.log('Tap detected on CV');
      simpleSwap();
    }
    
    isDragging = false;
    hasMoved = false;
    cvStack.classList.remove('dragging');
  });
  
  // Mouse events for desktop
  cvStack.addEventListener('mousedown', function(e) {
    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;
    hasMoved = false;
    cvStack.classList.add('dragging');
    console.log('Mouse down at:', startX);
    e.preventDefault();
  });
  
  cvStack.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    const currentX = e.clientX;
    const currentY = e.clientY;
    const deltaX = Math.abs(currentX - startX);
    const deltaY = Math.abs(currentY - startY);
    
    if (deltaX > 5 || deltaY > 5) {
      hasMoved = true;
    }
  });
  
  cvStack.addEventListener('mouseup', function(e) {
    if (!isDragging) return;
    
    if (hasMoved) {
      const endX = e.clientX;
      const deltaX = endX - startX;
      
      console.log('Mouse drag end, deltaX:', deltaX);
      
      if (Math.abs(deltaX) > 20) { // Lower threshold for mouse
        console.log('Mouse drag detected! Direction:', deltaX > 0 ? 'right' : 'left');
        simpleSwap();
      }
    } else {
      // It's a click, not a drag
      console.log('Click detected on CV');
      simpleSwap();
    }
    
    isDragging = false;
    hasMoved = false;
    cvStack.classList.remove('dragging');
  });
  
  cvStack.addEventListener('mouseleave', function(e) {
    isDragging = false;
    hasMoved = false;
    cvStack.classList.remove('dragging');
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      console.log('Arrow key pressed:', e.key);
      simpleSwap();
    }
  });
  
  // Counter removed
  
  console.log('CV Swiper initialized successfully');
}

// All old swipe handling functions removed - keeping it simple

// Initialize swiper when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing CV Swiper');
  setTimeout(() => {
    initCVSwiper();
  }, 200); // Increased delay to ensure everything is loaded
});

// Backup initialization if DOMContentLoaded already fired
if (document.readyState === 'loading') {
  // DOM is still loading
  document.addEventListener('DOMContentLoaded', initCVSwiper);
} else {
  // DOM is already loaded
  setTimeout(initCVSwiper, 300);
}