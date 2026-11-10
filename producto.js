
const botones = document.querySelectorAll(".btnDetalle");

botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const detalle = boton.nextElementSibling;

        if (!detalle || !detalle.classList.contains("detalle")) {
            return;
        }

        if (detalle.hidden) {
            detalle.hidden = false;
            boton.textContent = "Ocultar Detalles";
        } else {
            detalle.hidden = true;
            boton.textContent = "Ver Detalles";
        }

    });

});

/* IMAGEN DE REEMPLAZO SI FALTA UNA FOTO */

document.querySelectorAll(".producto img").forEach(function(imagen) {

    imagen.addEventListener("error", function() {

        if (imagen.dataset.respaldo) {
            return;
        }

        imagen.dataset.respaldo = "si";

        const svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
             width="400" height="260">
            <rect width="400" height="260" fill="#e6f0ff"/>
            <rect x="105" y="55" width="190" height="120"
                  rx="9" fill="#08458e"/>
            <rect x="116" y="66" width="168" height="98"
                  fill="white"/>
            <text x="200" y="235"
                  font-family="Arial"
                  font-size="19"
                  text-anchor="middle"
                  fill="#08458e">
                Imagen no disponible
            </text>
        </svg>`;

        imagen.src = "data:image/svg+xml;charset=UTF-8,"
                   + encodeURIComponent(svg);

    });

});
