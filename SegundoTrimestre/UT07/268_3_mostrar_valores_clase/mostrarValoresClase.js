function recuValorClassBucle() {
    let parrafo = document.getElementById("parrafo");
    for (let clase of parrafo.classList) {
        console.log(clase);
    }
}

function recuperarValoresClase() {
    let parrafo = document.getElementById("parrafo");
    console.log(parrafo.className);
}

window.onload = function () {
    document
        .getElementById("recuValorClassBucle")
        .addEventListener("click", recuValorClassBucle);
    document
        .getElementById("recuperarValoresClase")
        .addEventListener("click", recuperarValoresClase);
};
