figuras = ["circuloAzul", "circuloRojo", "circuloVerde",
    "cuadradoAzul", "cuadradoRojo", "cuadradoVerde",
    "trianguloAzul", "trianguloRojo", "trianguloVerde"];

var posicionActual = 0;
var totalFiguras = 6;
var vidas = 4;
var puntuacion = 0;

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

function ocultarFiguras(elemento, elemento2) {
    let valorElemento = elemento.id; // Cambiado de elemento.target.id a elemento.id
    let elementoAbajo = elemento2.id;
    let cont = 0;
    let intervalo = setInterval(function () {
        if (cont >= 4) {
            clearInterval(intervalo);
            document.getElementById(valorElemento).classList.toggle("transparente");
            document.getElementById(elementoAbajo).classList.toggle("transparente");
        } else {
            document.getElementById(valorElemento).classList.toggle("ocultar");
            cont++;
        }
    }, 750);
}

function comparaFiguras(element) {
    let idElemento = element.target.id; // ID del elemento que se ha pulsado arriba
    let elementoSeleccionado = document.getElementById(idElemento).getAttribute("src"); // Imagen del elemento que se ha pulsado arriba
    let idElementoAbajo = "imagenAbajo" + posicionActual; // ID del elemento que se ha pulsado abajo
    let elementoAbajoSeleccionado = document.getElementById(idElementoAbajo).getAttribute("src"); // Imagen del elemento que se ha pulsado abajo

    /*console.log("IDelemento " + idElemento);
    console.log("Elemento seleccionado " + elementoSeleccionado);
    console.log("ID Elemento abajo " + idElementoAbajo);
    console.log("Elemeneto abajo seleccionado " + elementoAbajoSeleccionado);*/

    if (elementoSeleccionado === elementoAbajoSeleccionado) {
        let elementoArriba = document.getElementById(idElemento);
        let elementoAbajo = document.getElementById(idElementoAbajo);
        // alert("Son iguales")
        console.log("Seleccione seleccionado " + elementoSeleccionado);
        console.log("Elemento abajo seleccionado " + elementoAbajoSeleccionado);
        ocultarFiguras(elementoArriba, elementoAbajo);
        // ocultarFiguras(document.getElementById(idElementoAbajo));
        posicionActual++;
    } else {
        alert("Son diferentes");
        // TODO puntuacion
        vidas--;
        barravidas(vidas);
        puntuacion--;
    }
    if (posicionActual === totalFiguras) {
        alert("¡HAS GANADO!");
    }
}

function quitarEstiloVidas() {
    document.getElementById("vidas1").classList.remove("vidas4");
    document.getElementById("vidas2").classList.remove("vidas4");
    document.getElementById("vidas3").classList.remove("vidas4");
    document.getElementById("vidas4").classList.remove("vidas4");
    document.getElementById("vidas1").classList.remove("vidas3");
    document.getElementById("vidas2").classList.remove("vidas3");
    document.getElementById("vidas3").classList.remove("vidas3");
    document.getElementById("vidas1").classList.remove("vidas2");
    document.getElementById("vidas2").classList.remove("vidas2");
}

function barraVidas(vidas) {
    quitarEstiloVidas();
    if (vidas === 4) {
        document.getElementById("vidas1").classList.add("vidas4");
        document.getElementById("vidas2").classList.add("vidas4");
        document.getElementById("vidas3").classList.add("vidas4");
        document.getElementById("vidas4").classList.add("vidas4");
    } else if (vidas === 3) {
        document.getElementById("vidas1").classList.add("vidas3");
        document.getElementById("vidas2").classList.add("vidas3");
        document.getElementById("vidas3").classList.add("vidas3");
        document.getElementById("vidas3").textContent = "75%";
        document.getElementById("vidas4").textContent = "";
    } else if (vidas === 2) {
        document.getElementById("vidas1").classList.add("vidas2");
        document.getElementById("vidas2").classList.add("vidas2");
        document.getElementById("vidas2").textContent = "50%";
        document.getElementById("vidas3").textContent = "";
    } else if (vidas === 1) {
        document.getElementById("vidas1").classList.add("vidas1");
        document.getElementById("vidas1").textContent = "25%";
        document.getElementById("vidas2").textContent = "";
    } else if (vidas === 0) {
        document.getElementById("vidas1").classList.add("vidas0");
        document.getElementById("vidas2").classList.add("vidas0");
        document.getElementById("vidas3").classList.add("vidas0");
        document.getElementById("vidas4").classList.add("vidas0");
        document.getElementById("vidas1").textContent = "0%";
        document.getElementById("vidas2").textContent = "---";
        document.getElementById("vidas3").textContent = "---";
        document.getElementById("vidas4").textContent = "---";
    }
}

window.onload = function () {
    cargarSecuencia();
    cargarCuerpo();
    barraVidas(4);
    for (let i = 0; i < 6; i++) {
        let idImagen = "imagen" + i;
        document.getElementById(idImagen).addEventListener("click", comparaFiguras); // Ese evento se asocia a los elementos que se crean

    }

}