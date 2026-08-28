// 1. Inicializamos EmailJS con tu Public Key
emailjs.init('aNFfWW4GplZSiPuz7');

// 2. Seleccionamos el formulario
const formulario = document.getElementById('mi-formulario');

// 3. Escuchamos el evento de envío
formulario.addEventListener('submit', function(evento) {
    // Evita que la página se recargue
    evento.preventDefault();

    // Podemos cambiar el texto del botón para que el usuario sepa que está cargando
    const boton = formulario.querySelector('button[type="submit"]');
    boton.innerText = 'Enviando...';

    // 4. Enviamos los datos usando EmailJS
    emailjs.sendForm('service_vbgxhni', 'template_g7cz3mo', this)
        .then(function() {
            // Si sale bien:
            alert('¡Mensaje enviado con éxito! Me pondré en contacto pronto.');
            formulario.reset(); // Limpia el formulario
            boton.innerText = 'Enviar mensaje'; // Restaura el botón
        }, function(error) {
            // Si hay un error:
            alert('Ups, hubo un error al enviar: ' + JSON.stringify(error));
            boton.innerText = 'Enviar mensaje';
        });
});