document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('contactForm');
  const thankYou  = document.getElementById('thankYouMessage');
  const formError = document.getElementById('formError');
  if (!form || !thankYou || !formError) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formError.style.display = 'none';
    thankYou.style.display  = 'none';

    try {
      const res  = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      if (data.status === 'success') {
        form.reset();
        thankYou.style.display = 'block';
      } else {
        formError.textContent   = data.message || 'An error occurred.';
        formError.style.display = 'block';
      }
    } catch (err) {
      console.error(err);
      formError.textContent   = 'There was a problem sending your message.';
      formError.style.display = 'block';
    }
  });
});
