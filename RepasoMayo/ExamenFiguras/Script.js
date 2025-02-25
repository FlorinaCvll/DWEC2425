figuras = ["circuloAzul", "circuloRojo", "circuloVerde",
    "cuadradoAzul", "cuadradoRojo", "cuadradoVerde",
    "trianguloAzul", "trianguloRojo", "trianguloVerde"];


function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function cargarSecuencia() {
    completado = 0;
    figurasUsadas = new Set();
    while (completado < 6) {
        let numPosicion = devolverNumero(0, 8);
        let posicionImagen = "imagenAbajo" + completado;
        let nombreImagen = "./imagenes/" + figuras[numPosicion] + ".png";
        if (!figurasUsadas.has(figuras[numPosicion])) {
            document.getElementById(posicionImagen).setAttribute("src", nombreImagen);
            figurasUsadas.add(figuras[numPosicion]);
            completado++;
        }
    }
}

function cargarCuerpo() {
    completadoTablero = 0;
    while (completadoTablero < 6) {
        let numPosicionTablero = devolverNumero(0, 5);
        posicionTablero = "imagen" + numPosicionTablero;
        posicionSecuencia = "imagenAbajo" + completadoTablero; // completa las imagenes del tablero
        let nombreImagenTablero = document.getElementById(posicionSecuencia).getAttribute("src");
        if (document.getElementById(posicionTablero).getAttribute("src") === "") {
            document.getElementById(posicionTablero).setAttribute("src", nombreImagenTablero);
            completadoTablero++;
        }
    }
}

window.onload = function () {
    cargarSecuencia();
    cargarCuerpo();
}