let valoresMedia = [];

function calcularMedia() {
    let suma = 0;
    let numValores = valoresMedia.length;
    for (let valor in valoresMedia) {
        suma = suma + parseFloat(valoresMedia[valor]);
    }
    console.log("suma --> " + suma + " numValores --> " + numValores);
    let media = suma / numValores;
    let resultado = document.getElementById("resultado").textContent;
    resultado = resultado + " la media de los valores es: " + media;
    document.getElementById("resultado").textContent = resultado;
}

function solicitarValores() {

    let valorMedia = document.getElementById("valorParaMedia").value;
    if (valorMedia == "n") {
        calcularMedia();
    } else if (isNaN(valorMedia)) {
        document.getElementById("valorParaMedia").value = "";
        document.getElementById("mensajeAviso").textContent = "Solo puede introducir números o 'n'";
    } else {
        let resultado = document.getElementById("resultado").textContent;
        resultado = resultado + valorMedia + ", ";
        document.getElementById("resultado").textContent = resultado;
        valoresMedia.push(valorMedia);
    }
}

window.onload = function () {
    document.getElementById("aniadirAMedia").addEventListener("click", solicitarValores);
}