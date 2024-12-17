function crearLanzarError() {
    throw new Error("Se esperaba un número");
}

window.onload = function () {
    document.getElementById("crearLaznzarError").addEventListener("click", crearLanzarError);
}