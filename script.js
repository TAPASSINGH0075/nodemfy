// Enhanced form validation example
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields before submitting.');
    return;
  }

  // Basic email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you for your message!');
  this.reset();
});
