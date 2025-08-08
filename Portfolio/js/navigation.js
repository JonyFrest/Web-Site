// Navigation functionality and mobile menu handling

/**
 * Initialize navigation when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
});

/**
 * Main navigation initialization
 */
function initializeNavigation() {
    initializeMobileMenu();
    initializeNavigationHighlight();
    initializeScrollToTop();
    initializeKeyboardNavigation();
    
    console.log('Navigation initialized');
}

/**
 * Initialize mobile menu functionality
 */
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (!mobileMenuBtn || !mobileMenu) return;
    
    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        toggleMobileMenu();
    });
    
    // Close mobile menu when clicking on nav links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMobileMenu();
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            closeMobileMenu();
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
            closeMobileMenu();
        }
    });
}

/**
 * Toggle mobile menu state
 */
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const menuIcon = mobileMenuBtn.querySelector('i');
    
    const isOpen = mobileMenu.classList.contains('show');
    
    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

/**
 * Open mobile menu
 */
function openMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('show');
    
    // Update button animation and aria attributes
    mobileMenuBtn.classList.add('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    
    // Add animation to menu items
    const menuItems = mobileMenu.querySelectorAll('.mobile-nav-link');
    menuItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 50);
    });
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus first menu item for accessibility
    const firstMenuItem = mobileMenu.querySelector('.mobile-nav-link');
    if (firstMenuItem) {
        setTimeout(() => firstMenuItem.focus(), 100);
    }
    
    // Announce to screen readers
    announceToScreenReader('Меню открыто');
}

/**
 * Close mobile menu
 */
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    if (!mobileMenu.classList.contains('show')) return;
    
    mobileMenu.classList.remove('show');
    
    // Update button animation and aria attributes
    mobileMenuBtn.classList.remove('active');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    
    // Reset menu items animation
    const menuItems = mobileMenu.querySelectorAll('.mobile-nav-link');
    menuItems.forEach(item => {
        item.style.opacity = '';
        item.style.transform = '';
    });
    
    // Re-enable body scroll
    document.body.style.overflow = '';
    
    // Hide menu after animation
    setTimeout(() => {
        if (!mobileMenu.classList.contains('show')) {
            mobileMenu.classList.add('hidden');
        }
    }, 300);
    
    // Announce to screen readers
    announceToScreenReader('Меню закрыто');
}

/**
 * Initialize navigation highlight functionality
 */
function initializeNavigationHighlight() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Add click handlers to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            navigateToSection(targetId);
            
            // Close mobile menu if open
            closeMobileMenu();
        });
    });
    
    // Update active navigation on scroll
    window.addEventListener('scroll', throttle(updateActiveNavigation, 100));
}

/**
 * Navigate to a specific section
 */
function navigateToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    const navbar = document.getElementById('navbar');
    const headerHeight = navbar ? navbar.offsetHeight : 0;
    const targetPosition = targetSection.offsetTop - headerHeight;
    
    // Smooth scroll to section
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
    
    // Update URL without page reload
    if (history.pushState) {
        history.pushState(null, null, `#${sectionId}`);
    }
    
    // Update active navigation immediately
    updateActiveNavigationLink(sectionId);
    
    // Announce navigation to screen readers
    const sectionTitle = targetSection.querySelector('h1, h2, h3')?.textContent || sectionId;
    announceToScreenReader(`Переход к разделу: ${sectionTitle}`);
}

/**
 * Update active navigation based on scroll position
 */
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const headerHeight = document.getElementById('navbar')?.offsetHeight || 0;
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    // If we're at the top of the page, highlight home
    if (window.scrollY < 100) {
        currentSection = 'home';
    }
    
    // Update navigation links
    navLinks.forEach(link => {
        const linkTarget = link.getAttribute('href')?.substring(1);
        link.classList.toggle('active', linkTarget === currentSection);
    });
}

/**
 * Update active navigation link
 */
function updateActiveNavigationLink(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const linkTarget = link.getAttribute('href')?.substring(1);
        link.classList.toggle('active', linkTarget === sectionId);
    });
}

/**
 * Initialize scroll to top functionality
 */
function initializeScrollToTop() {
    // Create scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50';
    scrollToTopBtn.style.cssText += `
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;
    scrollToTopBtn.setAttribute('aria-label', 'Вернуться наверх');
    
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', throttle(() => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    }, 100));
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        announceToScreenReader('Возврат к началу страницы');
    });
}

/**
 * Initialize keyboard navigation
 */
function initializeKeyboardNavigation() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
            const isDesktop = window.innerWidth >= 768;
            const currentLinks = isDesktop ? 
                document.querySelectorAll('.nav-link') : 
                document.querySelectorAll('.mobile-nav-link');
            
            const currentIndex = Array.from(currentLinks).indexOf(this);
            
            switch (e.key) {
                case 'ArrowRight':
                case 'ArrowDown':
                    e.preventDefault();
                    const nextIndex = (currentIndex + 1) % currentLinks.length;
                    currentLinks[nextIndex].focus();
                    break;
                    
                case 'ArrowLeft':
                case 'ArrowUp':
                    e.preventDefault();
                    const prevIndex = currentIndex === 0 ? currentLinks.length - 1 : currentIndex - 1;
                    currentLinks[prevIndex].focus();
                    break;
                    
                case 'Home':
                    e.preventDefault();
                    currentLinks[0].focus();
                    break;
                    
                case 'End':
                    e.preventDefault();
                    currentLinks[currentLinks.length - 1].focus();
                    break;
            }
        });
    });
}

/**
 * Handle browser back/forward navigation
 */
function initializeBrowserNavigation() {
    window.addEventListener('popstate', function(e) {
        const hash = window.location.hash.substring(1);
        if (hash) {
            navigateToSection(hash);
        } else {
            navigateToSection('home');
        }
    });
    
    // Handle initial page load with hash
    if (window.location.hash) {
        const initialSection = window.location.hash.substring(1);
        setTimeout(() => navigateToSection(initialSection), 100);
    }
}

/**
 * Utility function for throttling scroll events
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
 * Announce messages to screen readers
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Initialize browser navigation
initializeBrowserNavigation();
