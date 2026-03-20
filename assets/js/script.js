// ============================================
// SMOOTH SCROLLING & NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close hamburger menu if open
            document.querySelector('.hamburger').classList.remove('active');
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// RESUME DOWNLOAD
// ============================================

const resumeBtn = document.getElementById('resumeBtn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Try to download Hans_Resume.pdf from the root folder
        const link = document.createElement('a');
        link.href = 'Hans_Resume.pdf';
        link.download = 'Hans_Resume.pdf';
        link.style.display = 'none';
        document.body.appendChild(link);
        
        // Check if file exists by attempting fetch
        fetch('Hans_Resume.pdf')
            .then(response => {
                if (response.ok) {
                    link.click();
                    document.body.removeChild(link);
                } else {
                    alert('Resume not found. Please add Hans_Resume.pdf to the root folder and refresh.');
                }
            })
            .catch(() => {
                alert('Resume not found. Please add Hans_Resume.pdf to the root folder.');
            });
    });
}

// ============================================
// CONTACT FORM - REMOVED (form no longer exists)
// ============================================
// Contact form has been replaced with a simple mailto button in the HTML
// This code is no longer needed as the contact section is now a static design

// ============================================
// ACTIVE NAVIGATION LINK
// ============================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTop';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        color: var(--dark-bg);
        border: none;
        cursor: pointer;
        display: none;
        z-index: 999;
        font-size: 1.2rem;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 5px 20px rgba(0, 212, 255, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-5px)';
    });
    
    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
}

createScrollToTopButton();

// ============================================
// PAGE LOAD ANIMATION
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add fade-in animation to body
document.body.style.cssText = `
    opacity: 1;
    animation: fadeIn 0.5s ease-in;
`;

const style2 = document.createElement('style');
style2.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style2);

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.skill-card, .project-card, .achievement-card, .education-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// TYPING EFFECT (OPTIONAL)
// ============================================

function typeEffect(element, text, speed = 50) {
    let index = 0;
    element.innerHTML = '';
    
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to use typing effect on hero title
// window.addEventListener('load', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     const text = heroTitle.textContent;
//     typeEffect(heroTitle, text, 30);
// });

// ============================================
// SKILL BAR ANIMATION
// ============================================

const proficiencyBars = document.querySelectorAll('.proficiency-fill');

const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s ease-out forwards';
            barObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

proficiencyBars.forEach(bar => {
    barObserver.observe(bar);
});

// ============================================
// COUNTER ANIMATION FOR STATS
// ============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    function updateCount() {
        current += increment;
        if (current < target) {
            element.textContent = current.toFixed(2).replace(/\.?0+$/, '');
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    }
    
    updateCount();
}

// Only animate stats if section exists (kept for backward compatibility)
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target;
            const value = stat.querySelector('h3');
            if (value) {
                const text = value.textContent;
                const number = parseFloat(text);
                if (!isNaN(number)) {
                    animateCounter(value, number, 2000);
                }
            }
            statsObserver.unobserve(stat);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Close menu with Escape key
    if (e.key === 'Escape') {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-menu').classList.remove('active');
    }
});

// ============================================
// DARK MODE TOGGLE (OPTIONAL)
// ============================================

function createThemeToggle() {
    const themeBtn = document.createElement('button');
    themeBtn.id = 'themeToggle';
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeBtn.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: var(--card-bg);
        border: 2px solid var(--border-color);
        color: var(--primary-color);
        padding: 10px 15px;
        border-radius: 50%;
        cursor: pointer;
        z-index: 500;
        transition: all 0.3s ease;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    `;
    
    // Uncomment to add theme toggle
    // document.body.appendChild(themeBtn);
    
    // themeBtn.addEventListener('click', () => {
    //     document.body.classList.toggle('light-mode');
    // });
}

// createThemeToggle();

// ============================================
// PERFORMANCE: LAZY LOADING FOR IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// LOG MESSAGE (Remove in production)
// ============================================

console.log('%c Portfolio Website', 'font-size: 24px; color: #00d4ff; font-weight: bold;');
console.log('%c Welcome to Hansini\'s Portfolio!', 'font-size: 16px; color: #ff006e;');
