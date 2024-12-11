function recuperarAtributoData() {
    let p1 = document.getElementById("p1");
    console.log(p1.dataset.tipo);
    console.log(p1.dataset.libro);
    console.log(p1.dataset.autorprincipal);
}

window.onload = function () {
    document.getElementById("recuperarAtributoData").addEventListener("click", recuperarAtributoData)
}