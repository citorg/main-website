document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('contactForm');
  const thankYou  = document.getElementById('thankYouMessage');
  const formError = document.getElementById('formError');
  const submitBtn = form?.querySelector('button[type="submit"]');

  if (!form || !thankYou || !formError || !submitBtn) return;

  const hide = el => el.setAttribute('hidden', '');
  const show = el => el.removeAttribute('hidden');

  // Ensure hidden on load
  hide(thankYou);
  hide(formError);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    hide(formError);
    hide(thankYou);

    // Client-side CAPTCHA check (server still validates)
    if (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse().length === 0) {
      formError.textContent = 'Please complete the CAPTCHA.';
      show(formError);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();

      if (data.status === 'success') {
        form.reset();
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
        show(thankYou);
      } else {
        formError.textContent = data.message || 'An error occurred.';
        show(formError);
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
      }
    } catch (err) {
      console.error(err);
      formError.textContent = 'There was a problem sending your message.';
      show(formError);
      if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
    } finally {
      setLoading(false);
    }
  });

  function setLoading(isLoading) {
    submitBtn.disabled    = isLoading;
    submitBtn.textContent = isLoading ? 'Sending…' : 'Send Message';
  }
});