const preguntas = ["Ordena los dispositivos de más rápido a más lento",
    "M.2", "SATA", "DVD", "CD",
    "Ordena los diferentes protocolos de más rápido a más lento",
    "IEEE 802.11ax", "IEEE 802.11ac", "IEEE 802.11g", "IEEE 802.11b"];
const numeroPosicionPregunta = [0, 5];
let numeroPregunta = numeroPosicionPregunta[1];
let numDivRespuesta = "";
let acertadas = 0;

function aleatoriosMininoMaximo(minimo, maximo) {
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return parseInt(Math.random() * ((maximo + 1) - minimo) + minimo);
}

function comprobarRespuesta(i) {
    numDivRespuesta = i.target.id;
    let valorRespuesta = document.getElementById(numDivRespuesta).textContent;
    if ((valorRespuesta == preguntas[numeroPregunta + 1]) && (acertadas == 0)) {
        let opicionElegida = 1;
        let numeroEstilo = numDivRespuesta.charAt(9);
        document.getElementById(numDivRespuesta).classList.add("color" + numeroEstilo);
        document.getElementById(numDivRespuesta).removeEventListener("click", comprobarRespuesta);
        acertadas++;
    } else if ((valorRespuesta == preguntas[numeroPregunta + 2]) && (acertadas == 1)) {
        let opicionElegida = 2;
        let numeroEstilo = numDivRespuesta.charAt(9);
        document.getElementById(numDivRespuesta).classList.add("color" + numeroEstilo);
        document.getElementById(numDivRespuesta).removeEventListener("click", comprobarRespuesta);
        acertadas++;
    } else if ((valorRespuesta == preguntas[numeroPregunta + 3]) && (acertadas == 2)) {
        let opicionElegida = 3;
        let numeroEstilo = numDivRespuesta.charAt(9);
        document.getElementById(numDivRespuesta).classList.add("color" + numeroEstilo);
        document.getElementById(numDivRespuesta).removeEventListener("click", comprobarRespuesta);
        acertadas++;
    } else if ((valorRespuesta == preguntas[numeroPregunta + 4]) && (acertadas == 3)) {
        let opicionElegida = 4;
        let numeroEstilo = numDivRespuesta.charAt(9);
        document.getElementById(numDivRespuesta).classList.add("color" + numeroEstilo);
        document.getElementById(numDivRespuesta).removeEventListener("click", comprobarRespuesta);
        acertadas++;
        alert("COMPLETADO!!!");
    } else {
        for (let i = 1; i < 5; i++) {
            document.getElementById("respuesta" + i).classList.remove("color" + i);
            document.getElementById("respuesta" + i).addEventListener("click", comprobarRespuesta);
        }
        acertadas = 0;
    }
}

function cambiarOrden() {
    for (let i = 0; i < 10; i++) {
        let primero = aleatoriosMininoMaximo(1, 4);
        let segundo = aleatoriosMininoMaximo(1, 4);
        if (primero != segundo) {
            let aux = document.getElementById("respuesta" + primero).textContent;
            document.getElementById("respuesta" + primero).textContent = document.getElementById("respuesta" + segundo).textContent;
            document.getElementById("respuesta" + segundo).textContent = aux;
        }
    }
}

function cargarDatos() {
    let posicionPregunta = aleatoriosMininoMaximo(0, 1);
    let respuestaAniadir = numeroPosicionPregunta[posicionPregunta];
    numeroPregunta = numeroPosicionPregunta[posicionPregunta];
    for (let i = 0; i < 5; i++) {
        document.getElementById("respuesta" + i).textContent = preguntas[respuestaAniadir];
        respuestaAniadir++;
    }
}

window.onload = function () {
    cargarDatos();
    cambiarOrden();
    for (let i = 1; i < 5; i++) {
        document.getElementById("respuesta" + i).addEventListener("click", comprobarRespuesta);
    }
}