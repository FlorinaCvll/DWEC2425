function escribir(x, accion) {
    console.log(accion(x));
}

window.onload = function () {
    document.getElementById("dobleCallback").addEventListener("click", llamadaDobleCallback);
    document.getElementById("dobleCallbackAnonima").addEventListener("click", llamadaDobleCallbackAnonima);
    document.getElementById("dobleCallbackFlecha").addEventListener("click", llamadaDobleCallbackFlecha);
}