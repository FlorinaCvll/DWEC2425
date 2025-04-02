var palabras = ["ELECTROENCEFALOGRAMA", "CACHORRO", "CHIMENEA", "SUPERCALIFRAGILISTICOESPIALIDOSO", "PROGRAMACION", "MAMUT", "TRIGRE", "ORDENADOR", "PIZARRA"];
var palabra = palabras[Math.floor(Math.random() * palabras.length)];
var letrasCorrectas = [];
var letrasIncorrectas = {};
var fallos = 0;
var juegoActivo = true;

function mostrarPalabraAdivinada() {
    var palabraMostrada = "";
    for (var i = 0; i < palabra.length; i++) {
        palabraMostrada += letrasCorrectas.includes(palabra[i]) ? palabra[i] : "_";
        palabraMostrada += " ";
    }
    document.getElementById("palabra").textContent = "Palabra:    " + palabraMostrada.trim();
}

function mostrarLetrasIncorrectas() {
    var letrasIncorrectasElement = document.getElementById("letras");
    letrasIncorrectasElement.innerHTML = "Letras incorrectas:  ";
    Object.keys(letrasIncorrectas).forEach(function (letra) {
        var span = document.createElement("span");
        span.innerHTML = letra + (letrasIncorrectas[letra] > 1 ? "<sub>" + letrasIncorrectas[letra] + "</sub>" : '') + " "; // Subíndice si el conteo es mayor que 1
        letrasIncorrectasElement.appendChild(span);
    });
}


function dibujarAhorcado() {
    var lineasAhorcado = [
        "",
        " |         O    ",
        " |         |    ",
        " |        /|    ",
        " |        /|\\   ",
        " |        /     ",
        " |        / \\   "
    ];

    var estadoAhorcado = [
        "linea3",
        "linea3",
        "linea4",
        "linea4",
        "linea4",
        "linea5",
        "linea5"
    ];

    for (let i = 1; i <= fallos; i++) {
        document.getElementById(estadoAhorcado[i]).textContent = lineasAhorcado[i];
    }

    if (fallos >= 6) {
        juegoActivo = false;
        alert("PERDISTE! La palabra correcta era: " + palabra);
    }
}

window.onload = function () {
    document.addEventListener("keydown", function (event) {
        if (juegoActivo) {
            var letra = event.key.toUpperCase();
            if (/^[A-Z]$/.test(letra)) {
                if (palabra.includes(letra)) {
                    if (!letrasCorrectas.includes(letra)) {
                        letrasCorrectas.push(letra);
                        mostrarPalabraAdivinada();
                    }
                } else {
                    if (!letrasIncorrectas[letra]) {
                        letrasIncorrectas[letra] = 1;
                    } else {
                        letrasIncorrectas[letra]++;
                    }
                    mostrarLetrasIncorrectas();
                    if (letrasIncorrectas[letra] === 1) {
                        fallos++;
                        dibujarAhorcado();
                    }
                }
            }
        }
    });

    mostrarPalabraAdivinada();
    mostrarLetrasIncorrectas();
};
