const form = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(result => {
      if (result.trim() === 'success') {
        form.reset();
        thankYouMessage.style.display = 'block';
      } else {
        alert('Error: ' + result);
      }
    })
    .catch(() => alert('There was a problem sending your message.'));
});
