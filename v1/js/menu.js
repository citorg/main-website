document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile');
  const navMenu       = document.querySelector('.main-nav-menu');

  // Initialize aria-expanded
  mobileToggle.setAttribute('aria-expanded', 'false');

  // Toggle menu open/closed
  mobileToggle.addEventListener('click', () => {
    const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });

  // Close mobile menu when any link is clicked
  document
    .querySelectorAll('.main-nav-menu-item-link')
    .forEach(link =>
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      })
    );
});