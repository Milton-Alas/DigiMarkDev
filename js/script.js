// Incluye el script de EmailJS desde la URL proporcionada
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
document.head.appendChild(script);

// Agrega el evento 'submit' al formulario
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const btn = document.getElementById('button');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.innerText = 'Enviando...';

    emailjs.init('tm-7vPw4Q24b3Ke8n');

    const serviceID = 'default_service';
    const templateID = 'template_fbfynjb';

    const params = {
      name: document.getElementById('nombre').value,
      email: document.getElementById('email').value,
      nombre_empresa: document.getElementById('nombre_empresa').value,
      asunto: document.getElementById('asunto').value,
      message: document.getElementById('mensaje').value
    };

    emailjs.sendForm(serviceID, templateID, this, 'tm-7vPw4Q24b3Ke8n')
      .then(() => {
        btn.innerText = 'Enviar mensaje';
        alert('Enviado!');
        form.reset();
      })
      .catch((err) => {
        btn.innerText = 'Enviar mensaje';
        alert(JSON.stringify(err));
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carouselExampleCaptions');
  const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 1500, // Intervalo de reproducción en milisegundos
      ride: 'carousel'
  });
});