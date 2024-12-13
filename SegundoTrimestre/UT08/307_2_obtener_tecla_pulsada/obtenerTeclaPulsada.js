function obtenerTeclaPulsada() {
    window.addEventListener("keydown", function (event) {
        alert("Tecla pulsada: " + event.key);
    });
}

window.onload = function () {
    document.getElementById("obtenerTeclaPulsada").addEventListener("click", obtenerTeclaPulsada);
}