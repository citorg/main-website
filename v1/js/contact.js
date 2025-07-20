document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const modal = document.getElementById('thankYouModal');
  const closeModal = document.getElementById('closeModal');
  const formError = document.getElementById('formError');
  if (!form || !modal || !closeModal || !formError) return;
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    formError.style.display = 'none';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      const data = await response.json();

      if (data.status === 'success') {
        form.reset();
        modal.style.display = 'block';
        closeModal.focus();
      } else {
        formError.textContent = data.message || 'An error occurred.';
        formError.style.display = 'block';
      }
    } catch (err) {
      console.error(err);
      formError.textContent = 'There was a problem sending your message.';
      formError.style.display = 'block';
    }
  });

  // Close modal on close button click
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    submitButton.focus();
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      submitButton.focus();
    }
  });

  // Close modal on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
      submitButton.focus();
    }
  });
});
