function construirCuadrado() {
    let lado = document.getElementById("cuadrado").value;
    const resultado = document.getElementById("resultadoCuadrado");
    let asterisco = " ";
    for (let i = 0; i < lado; i++) {
        asterisco += "<br>";
        for (let j = 0; j < lado; j++) {
            asterisco += " * ";
        }
    }
    resultado.innerHTML = asterisco;
}

function construirRectangulo() {
    let base = document.getElementById("baseRectangulo").value;
    let altura = document.getElementById("alturaRectangulo").value;
    const resultado = document.getElementById("resultadoRectangulo");
    let asterisco = "";
    let advertencia = "La base y la altua no pueden ser iguales para formar un rectángulo";
    if (base == altura) {
        resultado.innerHTML = advertencia;
    } else {
        for (let i = 0; i < altura; i++) {
            asterisco += "<br>";
            for (let j = 0; j < base; j++) {
                asterisco += "*";
            }
            resultado.innerHTML = asterisco;
        }
    }
}

function construirTriangulo() {
    let altura = document.getElementById("alturaTriangulo").value;
    const resultado = document.getElementById("resultadoTriangulo");

    for (let i = 0; i < altura; i++) {
        let espacio = "";
        let asteriscos = "";

        for (let j = 0; j < altura - i - 1; j++) {
            espacio += " ";
        }

        for (let k = 0; k < 2 * i + 1; k++) {
            asteriscos += "*";
        }

        resultado.innerHTML += espacio + asteriscos + "<br>";
    }
}

