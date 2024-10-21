function llamadaConLog() {
    escribe("Hola", console.log);
}

function llamadaConError() {
    escribe("Adios", console.error);
}

function llamadaConAlert() {
    escribe("Hola", alert);
}

function escribe(dato, funktion) {
    funktion(dato);
}

window.onload = function () {
    document.getElementById("llamarLog").addEventListener('click', llamadaConLog);
    document.getElementById("llamarError").addEventListener('click', llamadaConError);
    document.getElementById("llamarAlert").addEventListener('click', llamadaConAlert);
}