//Contact
document.getElementById("contact-send").addEventListener('click', () => {
    event.preventDefault();
    const input = document.getElementById("visitor-name");
    const nombre = input.value.trim(); //Quita los espacios en blanco al inicio
    const email = document.getElementById("visitor-email");
    const phone = document.getElementById("visitor-number");

    if (nombre){
        const mensaje = document.createElement('p');
        mensaje.id = 'contact-message'
        mensaje.textContent = `${nombre}, ¡Estaremos en contacto pronto!`;
        document.getElementById("contact-links").appendChild(mensaje);
        //Devuelve el formulario a cero
        input.value = '';
        email.value = '';
        phone.value = '';
    }
})