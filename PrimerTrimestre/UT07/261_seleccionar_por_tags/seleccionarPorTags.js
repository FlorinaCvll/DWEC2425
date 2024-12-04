function recuperarPorEtiqueta() {
    let principal = document.getElementById("principal");
    let interiores = principal.getElementsByTagName("p");
    console.log("Número de párrafos --->" + interiores.length);
}

window.onload = function () {
    document.getElementById("principal").addEventListener("click", recuperarPorEtiqueta);
}