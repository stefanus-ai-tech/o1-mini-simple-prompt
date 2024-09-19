// script.js

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Contact Form Submission Handler
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // Placeholder for form submission logic
  alert('Thank you for your message!');
  form.reset();
});
