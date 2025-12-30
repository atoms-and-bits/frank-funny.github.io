// ========================================
// EmbeddedCtrl Website JavaScript
// ========================================

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save preference to localStorage
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.section-title, .section-subtitle, .expertise-card, .about-content, .expertise-intro, .blog-card, .project-card-large').forEach(el => {
    observer.observe(el);
});

// Form submission handler
function handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you as soon as possible.');
    e.target.reset();
}

// Add stagger delay to expertise cards
document.querySelectorAll('.expertise-section').forEach(section => {
    const cards = section.querySelectorAll('.expertise-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
    
    const blogCards = section.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
});

// Handle profile photo loading
const profilePhoto = document.getElementById('profilePhoto');
const photoPlaceholder = document.getElementById('photoPlaceholder');

if (profilePhoto) {
    profilePhoto.onload = function() {
        photoPlaceholder.style.display = 'none';
        profilePhoto.style.display = 'block';
    };
    
    profilePhoto.onerror = function() {
        // Keep placeholder if image fails to load
        console.log('Profile photo not found. Using placeholder.');
    };
    
    // Trigger load check
    if (profilePhoto.complete && profilePhoto.naturalHeight !== 0) {
        photoPlaceholder.style.display = 'none';
        profilePhoto.style.display = 'block';
    }
}

// Project filtering function
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card-large');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Update button states
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter projects with animation
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
            setTimeout(() => {
                project.style.opacity = '1';
                project.style.transform = 'translateY(0)';
            }, 10);
        } else {
            project.style.opacity = '0';
            project.style.transform = 'translateY(30px)';
            setTimeout(() => {
                project.style.display = 'none';
            }, 400);
        }
    });
}

// Initialize - set first project visible
document.addEventListener('DOMContentLoaded', () => {
    // Add initial visible class to first few elements
    const initialElements = document.querySelectorAll('.credibility-item');
    initialElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 100);
    });
});

// Parallax effect for hero background (optional enhancement)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.circuit-line');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add active state to navigation based on scroll position
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Console message for developers
console.log('%cEmbeddedCtrl', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%cBuilding intelligent control systems 🚀', 'color: #00ff88; font-size: 14px;');
console.log('%cInterested in the code? Check out the repository!', 'color: #e8f4f8; font-size: 12px;');