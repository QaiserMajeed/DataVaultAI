/**
 * Data Valut AI - Interactive Website Scripts
 * Handles navigation, mobile menu, and smooth scrolling
 */

// ============================================
// Mobile Navigation Toggle
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');

                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = mobileMenuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Navbar Scroll Effect
// ============================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ============================================
// Intersection Observer for Fade-in Animations
// ============================================
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in effect to sections
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.service-card, .case-study, .tech-category, .compliance-item, .value-item');

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ============================================
// Active Navigation Link Highlighting
// ============================================
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= (sectionTop - navbarHeight - 100)) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveNavLink);
window.addEventListener('load', highlightActiveNavLink);

// ============================================
// Enhanced Data Visualization Animation
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const vizNodes = document.querySelectorAll('.node');

    vizNodes.forEach((node, index) => {
        // Randomize animation timing for organic feel
        const delay = Math.random() * 2;
        node.style.animationDelay = `${delay}s`;

        // Add hover effect
        node.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.5)';
            this.style.boxShadow = '0 0 30px rgba(59, 130, 246, 1)';
        });

        node.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.8)';
        });
    });
});

// ============================================
// Metrics Counter Animation
// ============================================
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60 FPS
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatMetricValue(target);
            clearInterval(timer);
        } else {
            element.textContent = formatMetricValue(Math.floor(current));
        }
    }, 16);
}

function formatMetricValue(value) {
    // Preserve original formatting (%, £, etc.)
    return value;
}

// Trigger counter animation when metrics come into view
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');

            // Extract numeric value and format
            const text = entry.target.textContent;
            const numericMatch = text.match(/[\d.]+/);

            if (numericMatch) {
                const value = parseFloat(numericMatch[0]);
                const prefix = text.match(/[£$€]/)?.[0] || '';
                const suffix = text.match(/[%KMx]/)?.[0] || '';

                let current = 0;
                const duration = 2000;
                const increment = value / (duration / 16);

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= value) {
                        entry.target.textContent = prefix + value + suffix;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = prefix + Math.floor(current) + suffix;
                    }
                }, 16);
            }
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const metricValues = document.querySelectorAll('.metric-value');
    metricValues.forEach(metric => metricsObserver.observe(metric));
});

// ============================================
// Form Validation (if contact form added later)
// ============================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================
// Performance Optimization - Lazy Loading
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    // Apply to any images with data-src attribute
    document.addEventListener('DOMContentLoaded', function() {
        const lazyImages = document.querySelectorAll('img.lazy');
        lazyImages.forEach(img => imageObserver.observe(img));
    });
}

// ============================================
// Accessibility - Keyboard Navigation
// ============================================
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');

        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');

            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// ============================================
// Console Branding
// ============================================
console.log('%c Data Valut AI ', 'background: linear-gradient(135deg, #3B82F6, #10B981); color: white; font-size: 20px; font-weight: bold; padding: 10px 20px; border-radius: 5px;');
console.log('%c 🔒 Secure. Compliant. Innovative. ', 'color: #3B82F6; font-size: 14px; font-weight: 600; padding: 5px;');
console.log('%c Interested in joining our team? Email: careers@datavalutai.co.uk ', 'color: #6B7280; font-size: 12px; padding: 5px;');
