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

//Hamburguer menu
const toggle = document.getElementById("nav-toggle");
toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const items = document.getElementById("_items");

    items.classList.toggle("open")
    toggle.classList.toggle("close")
})

//Responsive Text

window.addEventListener('resize', () => {
    const textoResponsivo = document.getElementById("links-message");
    if(window.innerWidth < 768){
        textoResponsivo.textContent = "No olvides revisar estos enlaces.";
    } else{
        textoResponsivo.textContent = "No olvides revisar los siguientes enlaces:";
    }
})