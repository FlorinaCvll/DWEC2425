function inicializarCamposEntrada(target) {
    let valorSelect = target.target.value;
    switch (valorSelect) {
        case "cuadrado":
            document.getElementById("altura").disabled = true;
            document.getElementById("base").disabled = false;
            let base = document.getElementById("base").value;
            document.getElementById("altura").value = base;
            console.log(base);
            break;
        case "rectangulo":
            document.getElementById("altura").disabled = false;
            document.getElementById("base").disabled = false;
            break;
        case "triangulo":
            document.getElementById("altura").disabled = false;
            document.getElementById("base").disabled = true;
            base = document.getElementById("altura").value;
            base = (base * 2) - 1;
            document.getElementById("base").value = base;
            break;
        default:
            break;
    }
}

function cargarFigura() {
    valorFigura = document.getElementById("tipoFigura").value;
    let cadenaFigura = "";
    let base = "", altura = "";
    switch (valorFigura) {
        case "cuadrado":
            let lado = document.getElementById("base").value;
            document.getElementById("altura").value = lado;
            for (let i = 0; i < lado; i++) {
                for (let j = 0; j < lado; j++) {
                    cadenaFigura = cadenaFigura + "* ";
                }
                cadenaFigura = cadenaFigura + "\n";
            }
            document.getElementById("resultadoFigura").textContent = cadenaFigura;
            break;
        case "rectangulo":
            base = document.getElementById("base").value;
            altura = document.getElementById("altura").value;
            for (let i = 0; i < altura; i++) {
                for (let j = 0; j < base; j++) {
                    cadenaFigura = cadenaFigura + "* ";
                }
                cadenaFigura = cadenaFigura + "\n";
            }
            document.getElementById("resultadoFigura").textContent = cadenaFigura;
            break;
        case "triangulo":
            altura = document.getElementById("altura").value;
            base = (altura * 2) - 1;
            document.getElementById("base").value = base;

            for (let i = 1; i <= altura; i++) {
                inicio = base - i;
                for (let k = 1; k <= (altura - i); k++) {
                    cadenaFigura = cadenaFigura + " ";
                    // Con - se ven los espacios generados
                    //cadenaFigura = cadenaFigura + "-";
                }
                console.log("base --> " + base);
                for (let j = 1; j <= (2 * i) - 1; j++) {
                    cadenaFigura = cadenaFigura + "*";
                }
                inicio = inicio - 1;
                cadenaFigura = cadenaFigura + "\n";
            }
            document.getElementById("resultadoFigura").textContent = cadenaFigura;
            break;
        default:
            break;
    }
}

window.onload = function () {
    document.getElementById("tipoFigura").addEventListener("change", inicializarCamposEntrada);
    document.getElementById("generarFigura").addEventListener("click", cargarFigura);
}