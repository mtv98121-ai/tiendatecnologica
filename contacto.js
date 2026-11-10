
const formContacto = document.getElementById("formContacto");
const respuesta = document.getElementById("respuesta");

formContacto.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {

        mostrarMensaje(
            "Por favor, completa todos los campos.",
            "error"
        );

        return;
    }

    formContacto.reset();

    mostrarMensaje(
        "Gracias por escribirnos, " + nombre +
        ". Tu mensaje se registró en esta demostración, " +
        "pero no se envió por correo.",
        "exito"
    );

});

formContacto.addEventListener("reset", function() {

    respuesta.textContent = "";
    respuesta.className = "";

});

function mostrarMensaje(texto, tipo) {

    respuesta.textContent = texto;
    respuesta.className = tipo;

}
