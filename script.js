// Mobile Navbar Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'flex';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navbar Active Link Highlight on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.from(".navbar", {
  duration: 1,
  y: -100,
  opacity: 0,
  ease: "power3.out"
});

// Hero section
gsap.from(".hero-text h1", { duration: 1, x: -100, opacity: 0, delay: 0.3 });
gsap.from(".hero-text h2", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
gsap.from(".hero-text p",  { duration: 1, x: -100, opacity: 0, delay: 0.7 });
gsap.from(".hero-buttons", { duration: 1, scale: 0.8, opacity: 0, delay: 0.9 });
gsap.from(".hero-image img", { duration: 1, scale: 0.9, opacity: 0, delay: 1 });

// About section
gsap.from(".about-text", {
  duration: 1,
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 80%"
  }
});
gsap.from(".skills", {
  duration: 1,
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%"
  }
});

// Animate skill bars
gsap.utils.toArray('.progress-bar div').forEach(bar => {
  const width = bar.style.width;
  bar.style.width = '0%';
  gsap.to(bar, {
    width: width,
    duration: 1,
    scrollTrigger: {
      trigger: bar,
      start: "top 90%"
    }
  });
});

// Projects section
gsap.utils.toArray(".project-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    delay: i * 0.1,
    ease: "power2.out"
  });
});

// Contact section
gsap.from(".contact-form", {
  duration: 1,
  x: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 85%"
  }
});
gsap.from(".contact-info", {
  duration: 1,
  x: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact-info",
    start: "top 85%"
  }
});

// Simple client-side form validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    e.preventDefault();
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
  }
});
