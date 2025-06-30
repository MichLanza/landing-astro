// Animations script for the landing page
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Wait for DOM content to be loaded
document.addEventListener('DOMContentLoaded', () => {
  // Hero animations
  const tl = gsap.timeline();
  
  tl.from('.hero-title-1', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
  })
  .from('.hero-title-2', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-subtitle', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.5')
  .from('.hero-buttons', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  }, '-=0.3');

  // Floating elements animation
  gsap.to('.floating-element', {
    duration: 3,
    y: -30,
    rotation: 360,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    stagger: 0.2
  });

  // Services section animations
  gsap.from('.services-title', {
    scrollTrigger: {
      trigger: '.services-title',
      start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.services-subtitle', {
    scrollTrigger: {
      trigger: '.services-subtitle',
      start: 'top 80%'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.service-card', {
    scrollTrigger: {
      trigger: '.service-card',
      start: 'top 85%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.2
  });

  // Technologies section animations
  gsap.from('.tech-title', {
    scrollTrigger: {
      trigger: '.tech-title',
      start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.tech-subtitle', {
    scrollTrigger: {
      trigger: '.tech-subtitle',
      start: 'top 80%'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.tech-card', {
    scrollTrigger: {
      trigger: '.tech-card',
      start: 'top 85%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.15
  });

  // Projects section animations
  gsap.from('.projects-title', {
    scrollTrigger: {
      trigger: '.projects-title',
      start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.projects-subtitle', {
    scrollTrigger: {
      trigger: '.projects-subtitle',
      start: 'top 80%'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.project-card',
      start: 'top 85%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    stagger: 0.2
  });

  // Contact section animations
  gsap.from('.contact-title', {
    scrollTrigger: {
      trigger: '.contact-title',
      start: 'top 80%'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.contact-subtitle', {
    scrollTrigger: {
      trigger: '.contact-subtitle',
      start: 'top 80%'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.2
  });

  gsap.from('.contact-info', {
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 85%'
    },
    duration: 1,
    x: -50,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.contact-form', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 85%'
    },
    duration: 1,
    x: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  // Smooth scrolling for navigation links
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

  // Mobile menu functionality
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 z-40 transform -translate-x-full transition-transform duration-300';
  mobileMenu.innerHTML = `
    <div class="flex flex-col items-center justify-center h-full space-y-8 text-xl">
      <a href="#inicio" class="hover:text-blue-400 transition-colors">Inicio</a>
      <a href="#servicios" class="hover:text-blue-400 transition-colors">Servicios</a>
      <a href="#tecnologias" class="hover:text-blue-400 transition-colors">Tecnologías</a>
      <a href="#proyectos" class="hover:text-blue-400 transition-colors">Proyectos</a>
      <a href="#contacto" class="hover:text-blue-400 transition-colors">Contacto</a>
    </div>
  `;
  document.body.appendChild(mobileMenu);

  let menuOpen = false;
  hamburger?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      mobileMenu.style.transform = 'translateX(0)';
    } else {
      mobileMenu.style.transform = 'translateX(-100%)';
    }
  });

  // Close mobile menu when clicking on a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuOpen = false;
      mobileMenu.style.transform = 'translateX(-100%)';
    });
  });
});
