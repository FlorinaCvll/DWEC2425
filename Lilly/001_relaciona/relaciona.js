// preguntas, respuestas ------------> Arrays de preguntas y de respuestas
// numDivPreguna, numDivRespuesta ---> Identificador div pregunta y respuesta
// valorPregunta, valorRespuesta ----> Contenido de pregunta y respuesta
// numPregunta, numRespuesta --------> Numero de posición en array pregunta y respuesta

const preguntas = ["Hardware", "Redes", "Programación", "Sistema Operativo"];
const respuestas = ["M.2", "802.11ax", "Dart", "Fuchsia"];
let numDivPregunta = "";
let numDivRespuesta = "";

function comprobarPregunta(i) {
    numDivPregunta = i.target.id;
    let valorPregunta = document.getElementById(numDivPregunta).textContent;
    let numeroPregunta = preguntas.indexOf(valorPregunta);

    if (numDivRespuesta == "") {
        document.getElementById(numDivPregunta).classList.add("color" + numeroPregunta);
    } else {
        let valorRespuesta = document.getElementById(numDivRespuesta).textContent;
        let numeroRespuesta = respuestas.indexOf(valorRespuesta);
        if (numeroPregunta == numeroRespuesta) {
            document.getElementById(numDivPregunta).classList.add("color" + numeroPregunta);
            // Una vez son correcta se quitan los eventos para que no se puedan volver a pulsar
            document.getElementById(numDivPregunta).removeEventListener("click", comprobarPregunta);
            document.getElementById(numDivRespuesta).removeEventListener("click", comprobarRespuesta);
            alert("Correctas");
        } else {
            //document.getElementById(j.target.id).classList.remove(j.target.id);
            document.getElementById(numDivRespuesta).classList.remove("color" + numeroRespuesta);
        }
        numDivPregunta = "";
        numDivRespuesta = "";
    }
}

function comprobarRespuesta(j) {
    numDivRespuesta = j.target.id;
    let valorRespuesta = document.getElementById(numDivRespuesta).textContent;
    let numeroRespuesta = respuestas.indexOf(valorRespuesta);

    if (numDivPregunta == "") {
        //alert(numDivRespuesta);
        document.getElementById(numDivRespuesta).classList.add("color" + numeroRespuesta);
    } else {
        let valorPregunta = document.getElementById(numDivPregunta).textContent;
        let numeroPregunta = preguntas.indexOf(valorPregunta);
        if (numeroPregunta == numeroRespuesta) {
            document.getElementById(numDivRespuesta).classList.add("color" + numeroRespuesta);
            // Una vez son correcta se quitan los eventos para que no se puedan volver a pulsar
            document.getElementById(numDivPregunta).removeEventListener("click", comprobarPregunta);
            document.getElementById(numDivRespuesta).removeEventListener("click", comprobarRespuesta);
            alert("Correctas");
        } else {
            document.getElementById(numDivPregunta).classList.remove("color" + numeroPregunta);
        }
        numDivPregunta = "";
        numDivRespuesta = "";
    }
}

function aleatoriosMininoMaximo(minimo, maximo) {
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return parseInt(Math.random() * ((maximo + 1) - minimo) + minimo);
}

function cambiarOrden() {
    for (let i = 0; i < 10; i++) {
        let primero = aleatoriosMininoMaximo(0, 3);
        let segundo = aleatoriosMininoMaximo(0, 3);
        if (primero != segundo) {
            let aux = document.getElementById("pregunta" + primero).textContent;
            document.getElementById("pregunta" + primero).textContent = document.getElementById("pregunta" + segundo).textContent;
            document.getElementById("pregunta" + segundo).textContent = aux;
        }
        let tercero = aleatoriosMininoMaximo(0, 3);
        let cuarto = aleatoriosMininoMaximo(0, 3);
        if (tercero != cuarto) {
            let auxDos = document.getElementById("respuesta" + tercero).textContent;
            document.getElementById("respuesta" + tercero).textContent = document.getElementById("respuesta" + cuarto).textContent;
            document.getElementById("respuesta" + cuarto).textContent = auxDos;
        }
    }
}

function cargarEventos() {

    cambiarOrden();
    for (let i = 0; i < preguntas.length; i++) {
        document.getElementById("pregunta" + i).addEventListener("click", comprobarPregunta);
        document.getElementById("respuesta" + i).addEventListener("click", comprobarRespuesta);
    }
}


window.onload = function () {
    cargarEventos();
}