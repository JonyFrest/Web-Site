// Main application JavaScript

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

/**
 * Main application initialization
 */
function initializeApp() {
    console.log('JonyFrest Portfolio - Initializing...');
    
    // Initialize scroll behavior
    initializeScrollBehavior();
    
    // Initialize performance optimizations
    initializePerformance();
    
    // Initialize accessibility features
    initializeAccessibility();
    
    // Initialize analytics (if needed)
    initializeAnalytics();
    
    console.log('JonyFrest Portfolio - Ready!');
}

/**
 * Initialize scroll-related behaviors
 */
function initializeScrollBehavior() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('#navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active navigation
                updateActiveNavigation(targetId);
            }
        });
    });
    
    // Update navigation on scroll
    window.addEventListener('scroll', throttle(handleScroll, 16));
}

/**
 * Handle scroll events
 */
function handleScroll() {
    const scrollY = window.scrollY;
    const navbar = document.getElementById('navbar');
    
    // Add/remove scrolled class to navbar
    if (scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active section in navigation
    updateActiveSection();
}

/**
 * Update active navigation item based on current section
 */
function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerHeight = document.querySelector('#navbar').offsetHeight;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

/**
 * Update active navigation item
 */
function updateActiveNavigation(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${targetId}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Initialize performance optimizations
 */
function initializePerformance() {
    // Preload critical resources
    preloadCriticalResources();
    
    // Lazy load non-critical elements
    initializeLazyLoading();
    
    // Optimize images
    optimizeImages();
}

/**
 * Preload critical resources
 */
function preloadCriticalResources() {
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
    });
}

/**
 * Initialize lazy loading for non-critical elements
 */
function initializeLazyLoading() {
    // Lazy load images when they come into view
    const images = document.querySelectorAll('img[data-src]');
    
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
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

/**
 * Optimize images
 */
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading="lazy" for native lazy loading
        img.setAttribute('loading', 'lazy');
        
        // Add error handling
        img.addEventListener('error', function() {
            console.warn('Failed to load image:', this.src);
            this.style.display = 'none';
        });
    });
}

/**
 * Initialize accessibility features
 */
function initializeAccessibility() {
    // Keyboard navigation
    initializeKeyboardNavigation();
    
    // Focus management
    initializeFocusManagement();
    
    // ARIA attributes
    updateAriaAttributes();
    
    // Screen reader announcements
    initializeScreenReaderSupport();
}

/**
 * Initialize keyboard navigation
 */
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape') {
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            
            if (mobileMenu && mobileMenu.classList.contains('show')) {
                mobileMenu.classList.remove('show');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
        
        // Enter key on buttons
        if (e.key === 'Enter' && e.target.tagName === 'BUTTON') {
            e.target.click();
        }
    });
}

/**
 * Initialize focus management
 */
function initializeFocusManagement() {
    // Focus trap for mobile menu
    const mobileMenu = document.getElementById('mobile-menu');
    const focusableElements = mobileMenu.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
    );
    
    if (focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        mobileMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
}

/**
 * Update ARIA attributes
 */
function updateAriaAttributes() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-controls', 'mobile-menu');
        mobileMenu.setAttribute('aria-hidden', 'true');
    }
    
    // Add aria-labels to social links
    const socialLinks = document.querySelectorAll('a[href*="mailto"], a[href*="telegram"], a[href*="github"]');
    socialLinks.forEach(link => {
        if (link.href.includes('mailto')) {
            link.setAttribute('aria-label', 'Отправить email');
        } else if (link.href.includes('telegram')) {
            link.setAttribute('aria-label', 'Связаться в Telegram');
        } else if (link.href.includes('github')) {
            link.setAttribute('aria-label', 'Посмотреть профиль GitHub');
        }
    });
}

/**
 * Initialize screen reader support
 */
function initializeScreenReaderSupport() {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'live-region';
    document.body.appendChild(liveRegion);
}

/**
 * Announce message to screen readers
 */
function announceToScreenReader(message) {
    const liveRegion = document.getElementById('live-region');
    if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

/**
 * Initialize analytics (placeholder)
 */
function initializeAnalytics() {
    // Track page view
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
    });
    
    // Track scroll depth
    let maxScrollDepth = 0;
    window.addEventListener('scroll', throttle(() => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollDepth > maxScrollDepth) {
            maxScrollDepth = scrollDepth;
            if (maxScrollDepth % 25 === 0) {
                trackEvent('scroll_depth', { depth: maxScrollDepth });
            }
        }
    }, 1000));
    
    // Track contact form interactions
    const contactLinks = document.querySelectorAll('a[href^="mailto"], a[href*="telegram"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('contact_click', {
                contact_type: link.href.includes('mailto') ? 'email' : 'telegram'
            });
        });
    });
}

/**
 * Track analytics event
 */
function trackEvent(eventName, parameters = {}) {
    // Placeholder for analytics tracking
    console.log('Analytics Event:', eventName, parameters);
    
    // Here you would integrate with your analytics service
    // Examples: Google Analytics, Mixpanel, etc.
}

/**
 * Utility: Throttle function
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

/**
 * Utility: Debounce function
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/**
 * Add screen reader only class to CSS (only if not already added)
 */
if (!document.querySelector('style[data-sr-only]')) {
    const srOnlyCSS = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    `;

    const srStyle = document.createElement('style');
    srStyle.setAttribute('data-sr-only', 'true');
    srStyle.textContent = srOnlyCSS;
    document.head.appendChild(srStyle);
}
