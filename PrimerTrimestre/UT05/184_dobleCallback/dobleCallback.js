function llamadaDobleCallback() {
    escribir(8, doble);
}

function llamadaDobleCallbackAnonima() {
    escribir(8, function (y) {
        return 2 * y
    });
}

function llamadaDobleCallbackFlecha() {
    escribir(8, y => 2 * y);
}
function escribir(x, accion) {
    console.log(accion(x));
}

function doble(y) {
    return 2 * y;
}
window.onload = function () {
    document.getElementById("dobleCallback").addEventListener("click", llamadaDobleCallback);
    document.getElementById("dobleCallbackAnonima").addEventListener("click", llamadaDobleCallbackAnonima);
    document.getElementById("dobleCallbackFlecha").addEventListener("click", llamadaDobleCallbackFlecha);
}