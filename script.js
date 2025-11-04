// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section, .card, .project-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// Active Navigation Link on Scroll
const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
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
};

// Add hover effect to cards
const addCardHoverEffects = () => {
    const cards = document.querySelectorAll('.card, .project-card, .gallery-item, .anime-box');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
};

// Animate skill tags on hover
const animateSkillTags = () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            this.style.color = 'white';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.background = 'white';
            this.style.color = '#667eea';
        });
    });
};

// Add floating animation to hero decorations
const animateHeroDecorations = () => {
    const animeDecor = document.querySelector('.anime-decor');
    if (animeDecor) {
        setInterval(() => {
            animeDecor.style.animation = 'none';
            setTimeout(() => {
                animeDecor.style.animation = 'float 3s ease-in-out infinite';
            }, 10);
        }, 3000);
    }
};

// Add typing effect to hero title (optional)
const typeWriterEffect = () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        const typing = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
    }
};

// Add parallax effect to hero section
const addParallaxEffect = () => {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.pageYOffset;
            hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
};

// Project card click animation
const addProjectClickEffect = () => {
    const projectLinks = document.querySelectorAll('.project-link');
    
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const card = this.closest('.project-card');
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
};

// Gallery item click effect
const addGalleryClickEffect = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    });
};

// Contact link hover effects
const addContactLinkEffects = () => {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.background = 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        });
    });
};

// Add scroll progress indicator
const addScrollProgressIndicator = () => {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '4px';
    progressBar.style.background = 'linear-gradient(90deg, #667eea, #764ba2)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    updateActiveNavLink();
    addCardHoverEffects();
    animateSkillTags();
    animateHeroDecorations();
    // typeWriterEffect(); // Uncomment if you want typing effect
    addParallaxEffect();
    addProjectClickEffect();
    addGalleryClickEffect();
    addContactLinkEffects();
    addScrollProgressIndicator();
    
    console.log('Portfolio website loaded successfully! ✨');
});

// Add console message for visitors
console.log('%c Welcome to Hemanth Boda\'s Portfolio! 🚀', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c Made with ❤️ and anime passion!', 'color: #764ba2; font-size: 16px;');
