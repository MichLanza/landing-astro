// GSAP Script Loader
async function loadGSAP() {
  try {
    // Try to load GSAP from local installation
    const gsapModule = await import('/node_modules/gsap/index.js');
    const scrollTriggerModule = await import('/node_modules/gsap/ScrollTrigger.js');
    
    const { gsap } = gsapModule;
    const { ScrollTrigger } = scrollTriggerModule;
    
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    console.log('GSAP loaded locally! 🎉');
    return { gsap, ScrollTrigger };
  } catch (error) {
    console.log('Loading GSAP from CDN as fallback...');
    // Fallback to CDN
    const gsapModule = await import('https://unpkg.com/gsap@3.13.0/index.js');
    const scrollTriggerModule = await import('https://unpkg.com/gsap@3.13.0/ScrollTrigger.js');
    
    const { gsap } = gsapModule;
    const { ScrollTrigger } = scrollTriggerModule;
    
    gsap.registerPlugin(ScrollTrigger);
    
    console.log('GSAP loaded from CDN! 🎉');
    return { gsap, ScrollTrigger };
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  console.log('Loading GSAP animations...');
  
  // Immediately ensure all elements are visible (critical for user experience)
  const makeElementsVisible = () => {
    const elements = [
      '.hero-title-1', '.hero-title-2', '.hero-subtitle', '.hero-buttons',
      '.services-title', '.services-subtitle', '.service-card',
      '.tech-title', '.tech-subtitle', '.tech-card',
      '.projects-title', '.projects-subtitle', '.project-card',
      '.contact-title', '.contact-subtitle', '.contact-info', '.contact-form'
    ];
    
    elements.forEach(selector => {
      const els = document.querySelectorAll(selector);
      els.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0) scale(1) rotateX(0)';
        el.style.visibility = 'visible';
      });
    });
  };

  // Ensure visibility immediately
  makeElementsVisible();
  
  // Also set a fallback timer in case GSAP takes too long
  setTimeout(makeElementsVisible, 500);
  
  try {
    const { gsap, ScrollTrigger } = await loadGSAP();

    // Only set initial states if GSAP loaded successfully
    gsap.set(['.hero-title-1', '.hero-title-2'], { y: 100, opacity: 0, scale: 0.8 });
    gsap.set(['.hero-subtitle'], { y: 60, opacity: 0 });
    gsap.set(['.hero-buttons'], { y: 40, opacity: 0, scale: 0.9 });

    // Hero animations with GSAP timeline - más dramático
    const heroTl = gsap.timeline({ delay: 0.8 });
    
    heroTl
      .to('.hero-title-1', {
        duration: 1.5,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'power3.out'
      })
      .to('.hero-title-2', {
        duration: 1.5,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .to('.hero-subtitle', {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: 'power2.out'
      }, '-=0.6')
      .to('.hero-buttons', {
        duration: 1,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: 'power2.out'
      }, '-=0.4');

    // Floating elements with GSAP
    gsap.to('.floating-element', {
      duration: 4,
      y: -25,
      rotation: 180,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1.5,
        from: 'random'
      }
    });

    // Services section animations - set initial state then animate
    gsap.set('.services-title', { y: 60, opacity: 0 });
    gsap.set('.services-subtitle', { y: 40, opacity: 0 });
    gsap.set('.service-card', { y: 60, opacity: 0 });

    gsap.to('.services-title', {
      scrollTrigger: {
        trigger: '.services-title',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power3.out'
    });

    gsap.to('.services-subtitle', {
      scrollTrigger: {
        trigger: '.services-subtitle',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      delay: 0.2
    });

    gsap.to('.service-card', {
      scrollTrigger: {
        trigger: '#servicios',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      y: 0,
      opacity: 1,
      ease: 'back.out(1.2)',
      stagger: 0.15
    });

    // Technologies section animations - set initial state then animate
    gsap.set('.tech-title', { y: 60, opacity: 0 });
    gsap.set('.tech-subtitle', { y: 40, opacity: 0 });
    gsap.set('.tech-card', { y: 50, opacity: 0, scale: 0.9 });

    gsap.to('.tech-title', {
      scrollTrigger: {
        trigger: '.tech-title',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power3.out'
    });

    gsap.to('.tech-subtitle', {
      scrollTrigger: {
        trigger: '.tech-subtitle',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      delay: 0.2
    });

    gsap.to('.tech-card', {
      scrollTrigger: {
        trigger: '#tecnologias',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.6,
      y: 0,
      opacity: 1,
      scale: 1,
      ease: 'back.out(1.1)',
      stagger: 0.1
    });

    // Projects section animations - set initial state then animate
    gsap.set('.projects-title', { y: 60, opacity: 0 });
    gsap.set('.projects-subtitle', { y: 40, opacity: 0 });
    gsap.set('.project-card', { y: 60, opacity: 0, rotationX: 15 });

    gsap.to('.projects-title', {
      scrollTrigger: {
        trigger: '.projects-title',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power3.out'
    });

    gsap.to('.projects-subtitle', {
      scrollTrigger: {
        trigger: '.projects-subtitle',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      delay: 0.2
    });

    gsap.to('.project-card', {
      scrollTrigger: {
        trigger: '#proyectos',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      duration: 0.8,
      y: 0,
      opacity: 1,
      rotationX: 0,
      ease: 'power2.out',
      stagger: 0.15
    });

    // Contact section animations - set initial state then animate
    gsap.set('.contact-title', { y: 60, opacity: 0 });
    gsap.set('.contact-subtitle', { y: 40, opacity: 0 });
    gsap.set('.contact-info', { x: -60, opacity: 0 });
    gsap.set('.contact-form', { x: 60, opacity: 0 });

    gsap.to('.contact-title', {
      scrollTrigger: {
        trigger: '.contact-title',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power3.out'
    });

    gsap.to('.contact-subtitle', {
      scrollTrigger: {
        trigger: '.contact-subtitle',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 0,
      opacity: 1,
      ease: 'power2.out',
      delay: 0.2
    });

    gsap.to('.contact-info', {
      scrollTrigger: {
        trigger: '#contacto',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      x: 0,
      opacity: 1,
      ease: 'power2.out'
    });

    gsap.to('.contact-form', {
      scrollTrigger: {
        trigger: '#contacto',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      x: 0,
      opacity: 1,
      ease: 'power2.out',
      delay: 0.1
    });

    // Enhanced hover animations with GSAP
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -10,
          scale: 1.02,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          scale: 1,
          ease: 'power2.out'
        });
      });
    });

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.3,
          y: -8,
          rotationY: 5,
          ease: 'power2.out'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.3,
          y: 0,
          rotationY: 0,
          ease: 'power2.out'
        });
      });
    });

    document.querySelectorAll('.tech-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          duration: 0.4,
          scale: 1.08,
          rotation: 2,
          ease: 'elastic.out(1, 0.3)'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          duration: 0.4,
          scale: 1,
          rotation: 0,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
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

    // Mobile menu with GSAP animations
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 z-40 opacity-0 pointer-events-none';
    mobileMenu.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full space-y-8 text-xl">
        <a href="#inicio" class="hover:text-blue-400 transition-colors opacity-0">Inicio</a>
        <a href="#servicios" class="hover:text-blue-400 transition-colors opacity-0">Servicios</a>
        <a href="#tecnologias" class="hover:text-blue-400 transition-colors opacity-0">Tecnologías</a>
        <a href="#proyectos" class="hover:text-blue-400 transition-colors opacity-0">Proyectos</a>
        <a href="#contacto" class="hover:text-blue-400 transition-colors opacity-0">Contacto</a>
      </div>
    `;
    document.body.appendChild(mobileMenu);

    let menuOpen = false;
    hamburger?.addEventListener('click', () => {
      menuOpen = !menuOpen;
      if (menuOpen) {
        mobileMenu.style.pointerEvents = 'auto';
        gsap.to(mobileMenu, { duration: 0.3, opacity: 1, ease: 'power2.out' });
        gsap.from(mobileMenu.querySelectorAll('a'), {
          duration: 0.5,
          y: 30,
          opacity: 0,
          ease: 'back.out(1.2)',
          stagger: 0.1,
          delay: 0.2
        });
      } else {
        gsap.to(mobileMenu, { 
          duration: 0.3, 
          opacity: 0, 
          ease: 'power2.out',
          onComplete: () => {
            mobileMenu.style.pointerEvents = 'none';
          }
        });
      }
    });

    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuOpen = false;
        gsap.to(mobileMenu, { 
          duration: 0.3, 
          opacity: 0, 
          ease: 'power2.out',
          onComplete: () => {
            mobileMenu.style.pointerEvents = 'none';
          }
        });
      });
    });

    console.log('🎉 GSAP animations loaded and ready!');
    
  } catch (error) {
    console.error('Error loading GSAP:', error);
    console.log('Falling back to CSS animations and ensuring visibility...');
    
    // Ensure all elements are visible as fallback
    const elements = [
      '.hero-title-1', '.hero-title-2', '.hero-subtitle', '.hero-buttons',
      '.services-title', '.services-subtitle', '.service-card',
      '.tech-title', '.tech-subtitle', '.tech-card',
      '.projects-title', '.projects-subtitle', '.project-card',
      '.contact-title', '.contact-subtitle', '.contact-info', '.contact-form'
    ];
    
    elements.forEach(selector => {
      const els = document.querySelectorAll(selector);
      els.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) translateX(0) scale(1)';
        el.style.visibility = 'visible';
      });
    });
    
    // Fallback CSS animations
    const style = document.createElement('style');
    style.textContent = `
      .hero-title-1, .hero-title-2, .hero-subtitle, .hero-buttons,
      .services-title, .services-subtitle, .service-card,
      .tech-title, .tech-subtitle, .tech-card,
      .projects-title, .projects-subtitle, .project-card,
      .contact-title, .contact-subtitle, .contact-info, .contact-form {
        animation: fadeInUp 1s ease forwards;
        opacity: 1 !important;
        visibility: visible !important;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .service-card:hover, .tech-card:hover, .project-card:hover {
        transform: translateY(-5px) scale(1.02);
        transition: all 0.3s ease;
      }
    `;
    document.head.appendChild(style);
  }
});
