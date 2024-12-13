function anularComportPredeterminado() {
    document.getElementById("enlace").classList.add("anulado");
    let enlace = document.querySelector("a");
    enlace.addEventListener("click", function (evento) {
        if (!confirm("¿Desea ir a Wikipedia.org?")) {
            evento.preventDefault();
        }
    });
}

window.onload = function () {
    document.getElementById("anularComportPredeterminado").addEventListener("click", anularComportPredeterminado);
}