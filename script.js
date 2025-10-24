// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Clean smooth scrolling for all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            // Smooth scroll to section with proper navbar clearance
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.project-card, .learning-card, .community-card, .philosophy-item, .value-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Enhanced interactive effects for cards
document.querySelectorAll('.project-card, .learning-card, .community-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Code animation in hero section
function animateCode() {
    const codeLines = document.querySelectorAll('.code-content span');
    codeLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateX(0)';
        }, index * 300);
    });
}

// Open source stats counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    counters.forEach(counter => {
        const target = counter.getAttribute('data-target') || counter.textContent;
        if (!isNaN(target)) {
            let count = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(count);
                }
            }, 20);
        }
    });
}

// Progress bar animation for upcoming projects
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Typing effect for hero title
function typeEffect() {
    const title = document.querySelector('.hero-title');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// Enhanced parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const codeBlock = document.querySelector('.code-block');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (codeBlock) {
        codeBlock.style.transform = `translateY(${scrolled * 0.1}px) rotateY(${scrolled * 0.02}deg)`;
    }
});

// Click tracking for open source links
document.querySelectorAll('.project-link, .community-link, .learning-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const linkText = e.target.textContent || e.target.closest('a').textContent;
        console.log(`Open source link clicked: ${linkText.trim()}`);
        
        // Add a subtle animation
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    });
});

// GitHub repository stars fetcher (example for future implementation)
async function fetchGitHubStats() {
    try {
        // This would fetch real GitHub stats in a production environment
        const stats = {
            repos: '1+',
            stars: 'Growing',
            contributors: 'You!'
        };
        
        console.log('Open source stats:', stats);
        return stats;
    } catch (error) {
        console.log('GitHub stats unavailable:', error);
        return null;
    }
}

// Collaborative features
function initCollaborativeFeatures() {
    // Add click handlers for collaboration buttons
    document.querySelectorAll('.collaborate-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Animate button
            btn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
            
            // Scroll to community section
            const community = document.querySelector('#community');
            if (community) {
                community.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Contact method interactions
function initContactInteractions() {
    document.querySelectorAll('.contact-method').forEach(method => {
        method.addEventListener('mouseenter', () => {
            const icon = method.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(10deg)';
            }
        });
        
        method.addEventListener('mouseleave', () => {
            const icon = method.querySelector('i');
            if (icon) {
                icon.style.transform = '';
            }
        });
    });
}

// Initialize skill tag hover effects
function initSkillTags() {
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = '';
        });
    });
}

// Dark mode toggle (future feature)
function initDarkMode() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
    }
    
    // Load saved preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Share functionality for projects
function initShareFeatures() {
    if (navigator.share) {
        document.querySelectorAll('.project-card').forEach(card => {
            const shareBtn = document.createElement('button');
            shareBtn.innerHTML = '<i class="fas fa-share"></i> Share';
            shareBtn.className = 'share-btn';
            shareBtn.addEventListener('click', async () => {
                const title = card.querySelector('h3').textContent;
                const description = card.querySelector('.project-description').textContent;
                
                try {
                    await navigator.share({
                        title: `Silent-Canoe Project: ${title}`,
                        text: description,
                        url: window.location.href
                    });
                } catch (err) {
                    console.log('Error sharing:', err);
                }
            });
            
            const links = card.querySelector('.project-links');
            if (links) {
                links.appendChild(shareBtn);
            }
        });
    }
}

// Accessibility improvements
function initAccessibility() {
    // Add keyboard navigation for cards
    document.querySelectorAll('.project-card, .learning-card, .community-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const primaryLink = card.querySelector('.project-link, .learning-link, .community-link');
                if (primaryLink) {
                    primaryLink.click();
                }
            }
        });
    });
    
    // Focus management for mobile menu
    hamburger.addEventListener('click', () => {
        setTimeout(() => {
            if (navMenu.classList.contains('active')) {
                const firstLink = navMenu.querySelector('.nav-link');
                if (firstLink) firstLink.focus();
            }
        }, 300);
    });
}

// Performance optimizations
function initPerformance() {
    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    const criticalLinks = document.querySelectorAll('a[href^="https://github.com"]');
    criticalLinks.forEach(link => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = link.href;
        document.head.appendChild(prefetchLink);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    animateProgressBars();
    initCollaborativeFeatures();
    initContactInteractions();
    initSkillTags();
    
    // Enhanced features
    fetchGitHubStats();
    initShareFeatures();
    initAccessibility();
    initPerformance();
    initDarkMode();
    
    // Delayed animations
    setTimeout(() => {
        animateCode();
        animateCounters();
    }, 1000);
    
    // Add loading completion class
    document.body.classList.add('loaded');
    
    console.log('🚀 Silent-Canoe website loaded! Ready for open source collaboration.');
});

// Service Worker registration (for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Register service worker for offline functionality (future feature)
        console.log('Service Worker support detected - ready for offline features');
    });
}

// Error handling for external resources
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'LINK' || e.target.tagName === 'SCRIPT') {
        console.log('External resource failed to load:', e.target.src || e.target.href);
        // Graceful degradation - core functionality should still work
    }
});

// Analytics placeholder (for future implementation)
function trackEvent(category, action, label) {
    console.log(`Analytics: ${category} - ${action} - ${label}`);
    // This would integrate with analytics service in production
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fetchGitHubStats,
        animateCounters,
        trackEvent
    };
}