document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.querySelector('.mobile');
  const navMenu = document.querySelector('.main-nav-menu');

  // Initialize aria-expanded
  mobileToggle.setAttribute('aria-expanded', 'false');

  mobileToggle.addEventListener('click', () => {
    const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.classList.toggle('open');
  });
});
