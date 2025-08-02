const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent page reload
  alert('Thank you for reaching out, ' + contactForm.name.value + '! Your message has been received.');
  contactForm.reset();
});
