document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('contactForm');
  const thankYou  = document.getElementById('thankYouMessage');
  const formError = document.getElementById('formError');
  const submitBtn = form?.querySelector('button[type="submit"]');

  if (!form || !thankYou || !formError || !submitBtn) return;

  const RECAPTCHA_MSG = 'Please complete the CAPTCHA.';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Hide previous messages
    formError.style.display = 'none';
    formError.textContent   = '';
    thankYou.style.display  = 'none';

    // Client-side captcha check (still verify on server!)
    if (typeof grecaptcha !== 'undefined' && grecaptcha.getResponse().length === 0) {
      formError.textContent   = RECAPTCHA_MSG;
      formError.style.display = 'block';
      return;
    }

    // Disable button & show loading state
    setLoading(true);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      // Expect JSON, but be defensive
      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error('Invalid JSON from server.');
      }

      if (data.status === 'success') {
        form.reset();
        // Reset captcha for another submission
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
        thankYou.style.display = 'block';
      } else {
        formError.textContent   = data.message || 'An error occurred.';
        formError.style.display = 'block';
        // If captcha failed server-side, reset it
        if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
      }
    } catch (err) {
      console.error(err);
      formError.textContent   = 'There was a problem sending your message.';
      formError.style.display = 'block';
      if (typeof grecaptcha !== 'undefined') grecaptcha.reset();
    } finally {
      setLoading(false);
    }
  });

  function setLoading(isLoading) {
    submitBtn.disabled   = isLoading;
    submitBtn.textContent = isLoading ? 'Sending…' : 'Send Message';
  }
});