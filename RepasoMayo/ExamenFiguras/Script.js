figuras = ["circuloAzul", "circuloRojo", "circuloVerde",
    "cuadradoAzul", "cuadradoRojo", "cuadradoVerde",
    "trianguloAzul", "trianguloRojo", "trianguloVerde"];

var posicionActual = 0;


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

function ocultarFiguras(elemento) {
    let valorElemento = elemento.target.id;
    /* alert(valorElemento);*/
    // hacer que el elemento de abajo parpadee
    let cont = 0;
    let intervalo = setInterval(function () {
        if (cont >= 4) {
            clearInterval(intervalo);
            document.getElementById(valorElemento).classList.toggle("transparente");
        } else {
            document.getElementById(valorElemento).classList.toggle("ocultar");
            // document.getElementById(valorElemento).classList.toggle("transparente");
            cont++;
        }
    }, 750);


}

function comparaFiguras(elemento) {
    let elementoSeleccionado = document.getElementById(elemento).getAttribute("src");
    let idElemento = elemento.target.id;
    let elementoAbajo = document.getElementById();
}


window.onload = function () {
    cargarSecuencia();
    cargarCuerpo();
    for (let i = 0; i < 6; i++) {
        let idImagen = "imagen" + i;
        document.getElementById(idImagen).addEventListener("click", comparaFiguras); // Ese evento se asocia a los elementos que se crean

    }

}