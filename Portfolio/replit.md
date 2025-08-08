# JonyFrest Portfolio

## Overview

This is a personal portfolio website for JonyFrest, a creative developer specializing in frontend development and creative content. The website is built as a single-page application with a modern, responsive design that showcases the developer's skills, services, and contact information. The site features smooth animations, mobile-responsive navigation, and an elegant user interface designed to highlight the developer's professional capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (August 2, 2025)

✓ Added landing page service (starting from $50)
✓ Added backend development service from AbexLab company
✓ Created animated hamburger menu icon (CSS-based animation)
✓ Completely removed all scrollbars (webkit and firefox)
✓ Added AbexLab.com links for UI/UX design services
✓ Updated services section with 4 service cards in 2x2 grid

## System Architecture

### Frontend Architecture
The project follows a modular frontend architecture using vanilla JavaScript with a component-based approach:

- **Single Page Application (SPA)**: All content is contained in a single HTML file with JavaScript-driven navigation and interactions
- **Modular JavaScript**: Code is split into logical modules (main.js, navigation.js, animations.js) for better maintainability
- **CSS Framework**: Utilizes Tailwind CSS for rapid styling and consistent design system
- **Progressive Enhancement**: Core functionality works without JavaScript, with enhanced features added through JS

### Styling and Design System
- **Tailwind CSS**: Primary CSS framework for utility-first styling approach
- **Custom CSS**: Additional custom styles in styles/main.css for specialized animations and components
- **SASS Support**: SASS dependency included for potential CSS preprocessing needs
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Typography**: Google Fonts (Inter) for consistent, modern typography

### JavaScript Architecture
- **Event-Driven**: Uses DOM event listeners for user interactions
- **Intersection Observer API**: For scroll-triggered animations and performance optimization
- **Module Pattern**: Separate concerns into focused JavaScript modules
- **Accessibility Features**: Keyboard navigation and ARIA support built-in

### Performance Optimization
- **Lazy Loading**: Content and animations load as needed during scroll
- **Backdrop Blur**: Modern CSS effects for navigation transparency
- **Optimized Assets**: CDN delivery for external dependencies
- **Smooth Scrolling**: Custom smooth scroll implementation for better user experience

## External Dependencies

### CDN Dependencies
- **Tailwind CSS**: Main styling framework delivered via CDN
- **Font Awesome 6.4.0**: Icon library for UI elements and social media icons
- **Google Fonts (Inter)**: Typography system for consistent font rendering

### Development Dependencies
- **live-server**: Local development server for hot reloading during development
- **SASS**: CSS preprocessor for potential advanced styling needs (currently unused but available)

### Browser APIs
- **Intersection Observer API**: For scroll-based animations and performance optimization
- **Scroll Behavior API**: For smooth scrolling functionality
- **Local Storage API**: Potential for storing user preferences (accessibility features)

The architecture prioritizes simplicity, performance, and maintainability while providing a rich, interactive user experience. The modular approach allows for easy feature additions and modifications without affecting the core functionality.