function recuperarEstilo() {
    let cssParrrafo = window.getComputedStyle(parrafo);
    console.log(cssParrrafo.fontFamily);
}

window.onload = function () {
    document.getElementById("recuperarEstilo").addEventListener("click", recuperarEstilo);
}