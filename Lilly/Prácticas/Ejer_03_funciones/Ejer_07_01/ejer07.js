function obtenerMensaje(callback) {
    const mensaje = document.getElementById("texto");
    let texto = mensaje.value;
    const opciones = document.getElementById("opciones");
    const valor = opciones.value;
    callback(texto, valor);
}

function obtenerOpcion(mensaje, accion) {
    switch (accion) {
        case "Console.error":
            console.error(mensaje);
            break;
        case "Console.log":
            console.log(mensaje);
            break;
        case "Alert":
            alert(mensaje);
            break;
        case "Prompt":
            confirm(mensaje);
            break;
        case "Confirm":
            confirm(mensaje);
            break;
        default:
            console.log("Acción no válida");
    }
}

function ejectuar() {
    obtenerMensaje(obtenerOpcion);
}

window.onload = function () {
    document.getElementById("start").addEventListener("click", ejectuar);
};
