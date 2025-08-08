// Animation handling and scroll effects

/**
 * Initialize all animations when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
});

/**
 * Main animation initialization
 */
function initializeAnimations() {
    initializeScrollAnimations();
    initializeHoverAnimations();
    initializeLoadingAnimations();
    initializeParallaxEffects();
    
    console.log('Animations initialized');
}

/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initializeScrollAnimations() {
    // Animation observer options
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    // Create intersection observer for scroll animations
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Add animation class based on element's animation type
                if (element.classList.contains('fade-in-up')) {
                    element.classList.add('animate');
                } else if (element.classList.contains('fade-in-left')) {
                    element.classList.add('animate');
                } else if (element.classList.contains('fade-in-right')) {
                    element.classList.add('animate');
                } else {
                    element.classList.add('animate');
                }
                
                // Add staggered delay for child elements
                addStaggeredAnimation(element);
                
                // Unobserve after animation to improve performance
                animationObserver.unobserve(element);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .skill-card, .service-card, .contact-item'
    );
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
}

/**
 * Add staggered animation to child elements
 */
function addStaggeredAnimation(parent) {
    const children = parent.querySelectorAll('.skill-card, .service-card, .contact-item, .skill-tag');
    
    children.forEach((child, index) => {
        setTimeout(() => {
            child.style.transform = 'translateY(0)';
            child.style.opacity = '1';
        }, index * 100);
    });
}

/**
 * Initialize hover animations and effects
 */
function initializeHoverAnimations() {
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click ripple effect
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.skill-card, .service-card, .contact-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
    
    // Add hover effects to icons
    const icons = document.querySelectorAll('.floating-icon i, .contact-item i');
    
    icons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

/**
 * Create ripple effect on click
 */
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Initialize loading animations
 */
function initializeLoadingAnimations() {
    // Animate elements on page load
    window.addEventListener('load', function() {
        // Hero section animation
        const heroElements = document.querySelectorAll('#home .fade-in-up');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate');
            }, index * 200);
        });
        
        // Floating icons animation
        const floatingIcons = document.querySelectorAll('.floating-icon');
        floatingIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.animation = `float 3s ease-in-out infinite ${index * 0.5}s`;
            }, 1000 + index * 200);
        });
    });
}

/**
 * Initialize parallax effects
 */
function initializeParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.animate-blob');
    
    window.addEventListener('scroll', throttle(() => {
        const scrollY = window.scrollY;
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16));
}

/**
 * Animate typing effect for text
 */
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Animate number counting
 */
function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

/**
 * Progress bar animation
 */
function animateProgressBar(element, percentage, duration = 1000) {
    const progressBar = element.querySelector('.progress-fill') || element;
    progressBar.style.transition = `width ${duration}ms ease-out`;
    progressBar.style.width = `${percentage}%`;
}

/**
 * Slide show animation for elements
 */
function slideShow(elements, interval = 3000) {
    let currentIndex = 0;
    
    function showSlide(index) {
        elements.forEach((element, i) => {
            element.style.opacity = i === index ? '1' : '0';
            element.style.transform = i === index ? 'translateX(0)' : 
                i < index ? 'translateX(-100%)' : 'translateX(100%)';
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % elements.length;
        showSlide(currentIndex);
    }
    
    // Initialize
    showSlide(0);
    
    // Auto advance
    setInterval(nextSlide, interval);
    
    return { nextSlide, showSlide };
}

/**
 * Smooth reveal animation for sections
 */
function revealSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const elements = section.querySelectorAll('h2, h3, p, .card, .button');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

/**
 * Particle animation for background
 */
function createParticleAnimation(container) {
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(37, 99, 235, 0.1);
            border-radius: 50%;
            pointer-events: none;
        `;
        
        container.appendChild(particle);
        particles.push({
            element: particle,
            x: Math.random() * container.offsetWidth,
            y: Math.random() * container.offsetHeight,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2
        });
    }
    
    function animateParticles() {
        particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > container.offsetWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > container.offsetHeight) particle.vy *= -1;
            
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
}

/**
 * Mouse cursor trail effect
 */
function initializeCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: rgba(37, 99, 235, ${0.8 - i * 0.08});
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    document.addEventListener('mousemove', (e) => {
        trail.forEach((dot, index) => {
            setTimeout(() => {
                dot.style.left = e.clientX + 'px';
                dot.style.top = e.clientY + 'px';
            }, index * 10);
        });
    });
}

/**
 * Utility function for throttling
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add CSS for animations (only if not already added)
if (!document.querySelector('style[data-animations]')) {
    const animationCSS = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .cursor-trail {
        will-change: transform;
    }

    .particle {
        will-change: transform;
    }
    `;

    const animStyle = document.createElement('style');
    animStyle.setAttribute('data-animations', 'true');
    animStyle.textContent = animationCSS;
    document.head.appendChild(animStyle);
}
