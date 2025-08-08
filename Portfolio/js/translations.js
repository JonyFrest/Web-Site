// Multi-language support for JonyFrest Portfolio

/**
 * Translations object containing all text content
 */
const translations = {
    ru: {
        // Navigation
        'nav-home': 'Главная',
        'nav-about': 'Обо мне',
        'nav-services': 'Услуги',
        'nav-contact': 'Контакты',
        
        // Hero Section
        'hero-subtitle': 'Разработчик креативного контента и Frontend-разработки',
        'hero-contact': 'Связаться со мной',
        'hero-learn-more': 'Узнать больше',
        
        // About Section
        'about-title': 'Обо мне',
        'about-subtitle': 'Творческий и разносторонний специалист с навыками написания контента, управления проектами и разработки frontend-приложений',
        'about-approach-title': 'Мой подход',
        'about-approach-text1': 'Я применяю стратегический подход, ориентированный на пользователя, создавая решения, которые не только выглядят великолепно, но и обеспечивают исключительный пользовательский опыт.',
        'about-approach-text2': 'Начав свою деятельность 23 Апреля 2023 года, я сосредоточен на создании современных, адаптивных и производительных веб-приложений.',
        'about-skill-frontend': 'Frontend Development',
        'about-skill-content': 'Content Creation',
        'about-skill-management': 'Project Management',
        'about-skill-design': 'UX/UI Design',
        'about-card-dev-title': 'Разработка',
        'about-card-dev-desc': 'Современные веб-технологии и фреймворки',
        'about-card-content-title': 'Контент',
        'about-card-content-desc': 'Креативное написание и стратегия контента',
        'about-card-management-title': 'Управление',
        'about-card-management-desc': 'Эффективное управление проектами',
        'about-card-design-title': 'Дизайн',
        'about-card-design-desc': 'Пользовательский интерфейс и опыт',
        
        // Services Section
        'services-title': 'Услуги',
        'services-subtitle': 'Профессиональные услуги по разработке и созданию контента',
        'service-frontend-title': 'Frontend-разработка',
        'service-frontend-desc': 'Создание современных, отзывчивых и производительных веб-приложений с использованием передовых технологий и лучших практик разработки.',
        'service-frontend-item1': 'Адаптивная верстка',
        'service-frontend-item2': 'Современные фреймворки',
        'service-frontend-item3': 'Оптимизация производительности',
        'service-frontend-item4': 'Кроссбраузерная совместимость',
        'service-content-title': 'Креативный контент',
        'service-content-desc': 'Разработка стратегии контента, создание уникальных текстов и визуальных материалов, которые эффективно передают ваше сообщение аудитории.',
        'service-content-item1': 'Стратегия контента',
        'service-content-item2': 'Копирайтинг',
        'service-content-item3': 'Визуальный контент',
        'service-content-item4': 'Управление проектами',
        'service-landing-title': 'Лендинг-страницы',
        'service-landing-desc': 'Одностраничные сайты с высокой конверсией для вашего бизнеса.',
        'service-landing-price': 'от $50',
        'service-landing-note': 'Нет дизайна? Можно заказать UI/UX от компании <a href="https://www.AbexLab.com" target="_blank" class="abexlab-link text-yellow-300 hover:text-yellow-200">AbexLab</a>',
        'service-landing-item1': 'Высокая конверсия',
        'service-landing-item2': 'Быстрая загрузка',
        'service-landing-item3': 'SEO оптимизация',
        'service-backend-title': 'Backend-разработка',
        'service-backend-desc': 'Серверная разработка от компании <a href="https://www.AbexLab.com" target="_blank" class="abexlab-link text-yellow-200 hover:text-yellow-100">AbexLab</a>',
        'service-backend-price': 'По запросу',
        'service-backend-item1': 'API разработка',
        'service-backend-item2': 'База данных',
        'service-backend-item3': 'Безопасность',
        'service-backend-item4': 'Масштабируемость',
        'pricing-title': 'Стоимость услуг',
        'pricing-rate': 'USD в час',
        'pricing-desc': 'Прозрачное ценообразование без скрытых платежей. Оплата по факту выполненной работы с возможностью фиксированной стоимости проекта.',
        
        // Contact Section
        'contact-title': 'Контакты',
        'contact-subtitle': 'Готов обсудить ваш проект и воплотить ваши идеи в жизнь',
        'contact-email-title': 'Email',
        'contact-button': 'Начать проект',
        
        // Footer
        'footer-tagline': 'Разработчик креативного контента и frontend-разработки',
        'footer-copyright': '© 2025 JonyFrest. Все права защищены.'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-services': 'Services',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-subtitle': 'Creative Content Developer & Frontend Developer',
        'hero-contact': 'Contact Me',
        'hero-learn-more': 'Learn More',
        
        // About Section
        'about-title': 'About Me',
        'about-subtitle': 'Creative and versatile specialist with excellent content writing, project management and frontend development skills',
        'about-approach-title': 'My Approach',
        'about-approach-text1': 'I apply a strategic, user-centered approach, creating solutions that not only look great but also provide exceptional user experience.',
        'about-approach-text2': 'Starting my activity on April 23, 2023, I focus on creating modern, responsive and high-performance web applications.',
        'about-skill-frontend': 'Frontend Development',
        'about-skill-content': 'Content Creation',
        'about-skill-management': 'Project Management',
        'about-skill-design': 'UX/UI Design',
        'about-card-dev-title': 'Development',
        'about-card-dev-desc': 'Modern web technologies and frameworks',
        'about-card-content-title': 'Content',
        'about-card-content-desc': 'Creative writing and content strategy',
        'about-card-management-title': 'Management',
        'about-card-management-desc': 'Effective project management',
        'about-card-design-title': 'Design',
        'about-card-design-desc': 'User interface and experience',
        
        // Services Section
        'services-title': 'Services',
        'services-subtitle': 'Professional development and content creation services',
        'service-frontend-title': 'Frontend Development',
        'service-frontend-desc': 'Creating modern, responsive and high-performance web applications using cutting-edge technologies and development best practices.',
        'service-frontend-item1': 'Responsive Design',
        'service-frontend-item2': 'Modern Frameworks',
        'service-frontend-item3': 'Performance Optimization',
        'service-frontend-item4': 'Cross-browser Compatibility',
        'service-content-title': 'Creative Content',
        'service-content-desc': 'Developing content strategy, creating unique texts and visual materials that effectively convey your message to the audience.',
        'service-content-item1': 'Content Strategy',
        'service-content-item2': 'Copywriting',
        'service-content-item3': 'Visual Content',
        'service-content-item4': 'Project Management',
        'service-landing-title': 'Landing Pages',
        'service-landing-desc': 'Single-page websites with high conversion for your business.',
        'service-landing-price': 'from $50',
        'service-landing-note': 'No design? You can order UI/UX from company <a href="https://www.AbexLab.com" target="_blank" class="abexlab-link text-yellow-300 hover:text-yellow-200">AbexLab</a>',
        'service-landing-item1': 'High Conversion',
        'service-landing-item2': 'Fast Loading',
        'service-landing-item3': 'SEO Optimization',
        'service-backend-title': 'Backend Development',
        'service-backend-desc': 'Server-side development from company <a href="https://www.AbexLab.com" target="_blank" class="abexlab-link text-yellow-200 hover:text-yellow-100">AbexLab</a>',
        'service-backend-price': 'On Request',
        'service-backend-item1': 'API Development',
        'service-backend-item2': 'Database',
        'service-backend-item3': 'Security',
        'service-backend-item4': 'Scalability',
        'pricing-title': 'Service Pricing',
        'pricing-rate': 'USD per hour',
        'pricing-desc': 'Transparent pricing without hidden fees. Payment based on completed work with the possibility of fixed project cost.',
        
        // Contact Section
        'contact-title': 'Contact',
        'contact-subtitle': 'Ready to discuss your project and bring your ideas to life',
        'contact-email-title': 'Email',
        'contact-telegram-title': 'Telegram',
        'contact-github-title': 'GitHub',
        'contact-button': 'Start Project',
        
        // Footer
        'footer-tagline': 'Creative Content Developer & Frontend Developer',
        'footer-copyright': '© 2025 JonyFrest. All rights reserved.'
    }
};

/**
 * Current language state
 */
let currentLanguage = 'ru';

/**
 * Initialize language system
 */
function initializeLanguageSystem() {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Set initial language
    setLanguage(currentLanguage);
    
    // Add event listeners to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newLanguage = this.getAttribute('data-lang');
            if (newLanguage !== currentLanguage) {
                setLanguage(newLanguage);
            }
        });
    });
    
    console.log('Language system initialized:', currentLanguage);
}

/**
 * Set the current language and update all text
 */
function setLanguage(language) {
    if (!translations[language]) {
        console.error('Language not supported:', language);
        return;
    }
    
    currentLanguage = language;
    
    // Save to localStorage
    localStorage.setItem('preferred-language', language);
    
    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language][key]) {
            const translation = translations[language][key];
            // Check if translation contains HTML tags
            if (translation.includes('<') && translation.includes('>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update language button states
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        const buttonLang = button.getAttribute('data-lang');
        if (buttonLang === language) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Update document language attribute
    document.documentElement.setAttribute('lang', language);
    
    // Announce language change to screen readers
    const languageName = language === 'ru' ? 'русский' : 'English';
    announceToScreenReader(`Language changed to ${languageName}`);
    
    console.log('Language changed to:', language);
}

/**
 * Get translation for a specific key
 */
function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

/**
 * Announce message to screen readers
 */
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        if (document.body.contains(announcement)) {
            document.body.removeChild(announcement);
        }
    }, 1000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeLanguageSystem();
});

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLanguage,
        getTranslation,
        currentLanguage: () => currentLanguage
    };
}