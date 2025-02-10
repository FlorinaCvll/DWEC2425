figuras = ["circuloRojo", "circuloAzul", "circuloVerde",
    "cuadradoRojo", "cuadradoAzul", "cuadradoVerde",
    "trianguloRojo", "trianguloAzul", "trianguloVerde"];
figurasUsadas = new Set();
let terminado = 0;
let puntuacion = 0;
let vidas = 4;


class RecordsPersona {
    constructor(nombre, puntuacion) {
        this.nombre = nombre;
        this.puntuacion = puntuacion;
    }

    mostratDatos() {
        return this.nombre + " " + this.puntuacion;
    }

    recuperarPuntuacion() {
        return this.puntuacion;
    }
}

let persona1 = new RecordsPersona("Maria", 5);
let persona2 = new RecordsPersona("Ana", 3);
let persona3 = new RecordsPersona("Jesus", 1);

records.push(persona1);
records.push(persona2);
records.push(persona3);

function devolerNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarSecuencia() {
    let completado = 0;
    while (completado < 6) {
        let numeroPosicion = devolerNum(0, 8);
        let posicionSecuencia = "secuencia" + completado;
        let nombreImagen = "./imagenes/" + figuras[numeroPosicion] + ".png";
        if (!figurasUsadas.has(figuras[numeroPosicion])) {
            document.getElementById(posicionSecuencia).setAttribute("src", nombreImagen);
            figurasUsadas.add(figuras[numeroPosicion]);
            completado++;
        }
    }
}

function cargartablero() {
    let completadoTablero = 0;
    while (completadoTablero < 6) {
        let numeroPosicion = devolerNum(0, 5);
        let posicionTablero = "juego" + numeroPosicion;
        let posicionSecuencia = "secuencia" + completadoTablero;
        let nombreImgTablero = document.getElementById(posicionSecuencia).getAttribute("src");
        if (document.getElementById(posicionTablero).getAttribute("src") === "") {
            document.getElementById(posicionTablero).setAttribute("src", nombreImgTablero);
            completadoTablero++;
        }
    }
}

function barraVidas(vidas) {

}

function compararFiguras(elemento) {
    /*
        alert("Has pulsado en la figura " + idTablero);
    */
    if (terminado < 7 && (vidas > 0)) {
        let idTablero = elemento.target.id;
        let figuraTablero = document.getElementById(idTablero).getAttribute("src");
        let idSecuencia = "secuencia" + terminado;
        let figuraSecuencia = document.getElementById(idSecuencia).getAttribute("src");
        if (figuraTablero === figuraSecuencia) {
            ocultarFigura(idTablero, idSecuencia);
            terminado++;
            puntuacion++;
        } else {
            vidas--;
            barraVidas(vidas);
            puntuacion--;
            if (vidas === 0) {
                setTimeout(() => {
                    alert("Has perdido")
                }, 1000);
            }
            if (terminado === 6) {
                setTimeout(() => {
                    fijarRecord()
                }, 1000);
            }
        }
    }

}

function mostrarTransparente(idSecuencia) {
    document.getElementById(idSecuencia).classList.add("transparente");
}

function fijaRecord() {
    let nombre = prompt("Introduce tu nombre");
    let persona = new RecordsPersona(nombre, puntuacion);
    let puntuaciones = "PUNTUACIONES JUGADORES \n";
    records.push(persona);
    records.sort((a, b) => b.recuperarPuntuacion() - a.recuperarPuntuacion());
    records.forEach(element => {
        puntuaciones += element.mostratDatos() + "\n";
    })
}


function ocultarFigura(idTablero, idSecuencia) {
    let contador = 0;
    let tiempo = setInterval(
        function () {
            if (contador >= 4) {
                clearInterval(tiempo);
                mostrarTransparente(idSecuencia);
                mostrarTransparente(idFigura);
            } else {
                document.getElementById(idFigura).classList.toggle("ocultar");
                contador++;
            }
        }, 750);
}

window.onload = function () {
    cargarSecuencia();
    cargartablero();
    barraVidas(4);
    for (let i = 0; i < 6; i++) {
        let idTablero = "tablero" + i;
        document.getElementById(idTablero).addEventListener("click", compararFiguras);
    }
}