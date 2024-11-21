function inputs(target) {
    let seleccionarVal = target.target.value;
    switch (seleccionarVal) {
        case "cuadrado":
            document.getElementById("altura").disabled = false;
            document.getElementById("base").disabled = true;
            document.getElementById("base").value = document.getElementById("altura").value;
            break;
        case "rectangulo":
            document.getElementById("altura").disabled = false;
            document.getElementById("base").disabled = false;
            break;
        case "triangulo":
            document.getElementById("altura").disabled = false;
            document.getElementById("base").disabled = true;
            let altura = document.getElementById("altura").value;
            document.getElementById("base").value = (altura * 2) - 1;
            break;
        default:
            break;
    }
}

function cargarFigura() {
    let valorFigura = document.getElementById("tipoFigura").value;
    let caracterSeleccionado = document.getElementById("formas").value;
    let caracter = caracterSeleccionado === "asterisco" ? "*" : "|";
    let cadenaFigura = "";
    let base = "", altura = "";

    switch (valorFigura) {
        case "cuadrado":
            let lado = document.getElementById("altura").value;
            for (let i = 0; i < lado; i++) {
                for (let j = 0; j < lado; j++) {
                    cadenaFigura += caracter + " ";
                }
                cadenaFigura += "\n";
            }
            document.getElementById("resultadoFigura").textContent = cadenaFigura;
            break;
        case "rectangulo":
            base = document.getElementById("base").value;
            altura = document.getElementById("altura").value;
            for (let i = 0; i < altura; i++) {
                for (let j = 0; j < base; j++) {
                    cadenaFigura += caracter + " ";
                }
                cadenaFigura += "\n";
            }
            document.getElementById("resultadoFigura").textContent = cadenaFigura;
            break;
        case "triangulo":
            altura = document.getElementById("altura").value;
            base = (altura * 2) - 1;
            document.getElementById("base").value = base;

            for (let i = 1; i <= altura; i++) {
                for (let k = 1; k <= (altura - i); k++) {
                    cadenaFigura += " ";
                }
                for (let j = 1; j <= (2 * i) - 1; j++) {
                    cadenaFigura += caracter;
                }
                cadenaFigura += "\n";
            }
            document.getElementById("resultadoFigura").textContent = cadenaFigura;
            break;
        default:
            break;
    }
}

window.onload = function () {
    document.getElementById("tipoFigura").addEventListener("change", inputs);
    document.getElementById("generarFigura").addEventListener("click", cargarFigura);
}
