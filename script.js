// script.js
// Small JS helpers: mobile nav toggle and contact form handling.

// Toggle mobile nav
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if(navToggle){
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}

// Update footer year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Simple contact form handling
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Minimal client-side validation
    if(!name || !email || !message){
      feedback.textContent = 'Please complete all fields.';
      feedback.style.color = 'crimson';
      return;
    }

    // In a real site you'd send this to a server or email API.
    // For now we'll open the user's mail client as a fallback and show a success message.
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
  const mailto = `mailto:tkzulu44@gmail.com?subject=${subject}&body=${body}`;

    // Try to open mail client; still show inline success so user has feedback.
    window.location.href = mailto;

    feedback.style.color = 'green';
    feedback.textContent = 'Thanks — your message was prepared in your mail client.';

    form.reset();
  });
}
