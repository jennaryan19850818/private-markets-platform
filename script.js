// Initialize AOS animations
document.addEventListener('DOMContentLoaded', function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      once: true,
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }

  // Mobile navigation toggle
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate burger icon into cross
    menuToggle.classList.toggle('open');
  });

  // Update current year in footer
  const yearSpan = document.getElementById('year');
  const currentYear = new Date().getFullYear();
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
});