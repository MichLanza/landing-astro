// GSAP Animations - Properly configured
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  console.log('GSAP animations loading...');

  // Hero animations with GSAP timeline
  const heroTl = gsap.timeline({ delay: 0.2 });
  
  heroTl
    .from('.hero-title-1', {
      duration: 1.2,
      y: 80,
      opacity: 0,
      ease: 'power3.out'
    })
    .from('.hero-title-2', {
      duration: 1.2,
      y: 80,
      opacity: 0,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-subtitle', {
      duration: 1,
      y: 40,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.hero-buttons', {
      duration: 1,
      y: 40,
      opacity: 0,
      ease: 'power2.out'
    }, '-=0.3');

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

  // Services section animations
  gsap.from('.services-title', {
    scrollTrigger: {
      trigger: '.services-title',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 60,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.services-subtitle', {
    scrollTrigger: {
      trigger: '.services-subtitle',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 40,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '#servicios',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 60,
    opacity: 0,
    ease: 'back.out(1.2)',
    stagger: 0.15
  });

  // Technologies section animations
  gsap.from('.tech-title', {
    scrollTrigger: {
      trigger: '.tech-title',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 60,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.tech-subtitle', {
    scrollTrigger: {
      trigger: '.tech-subtitle',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 40,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('.tech-card', {
    scrollTrigger: {
      trigger: '#tecnologias',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.6,
    y: 50,
    opacity: 0,
    scale: 0.9,
    ease: 'back.out(1.1)',
    stagger: 0.1
  });

  // Projects section animations
  gsap.from('.projects-title', {
    scrollTrigger: {
      trigger: '.projects-title',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 60,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.projects-subtitle', {
    scrollTrigger: {
      trigger: '.projects-subtitle',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 40,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '#proyectos',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 60,
    opacity: 0,
    rotationX: 15,
    ease: 'power2.out',
    stagger: 0.15
  });

  // Contact section animations
  gsap.from('.contact-title', {
    scrollTrigger: {
      trigger: '.contact-title',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 60,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.contact-subtitle', {
    scrollTrigger: {
      trigger: '.contact-subtitle',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 40,
    opacity: 0,
    ease: 'power2.out',
    delay: 0.2
  });

  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '#contacto',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -60,
    opacity: 0,
    ease: 'power2.out'
  });

  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '#contacto',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: 60,
    opacity: 0,
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
        ease: 'power2.out',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        scale: 1,
        ease: 'power2.out',
        boxShadow: '0 0px 0px rgba(0, 0, 0, 0)'
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

  // Smooth scrolling with GSAP ScrollToPlugin (fallback to native if not available)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        if (gsap.plugins.ScrollToPlugin) {
          gsap.to(window, {
            duration: 1.2,
            scrollTo: {
              y: target,
              offsetY: 80
            },
            ease: 'power2.inOut'
          });
        } else {
          // Fallback to native smooth scroll
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
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

  console.log('GSAP animations loaded successfully! 🎉');
});
