var palabras = ["Amor", "Esperanza", "Alegria", "Paz", "Armonia", "Felicidad", "Luz", "Vida", "Sueño", "Libertad", "Gratitud", "Ternura", "Bondad", "Serenidad", "Ilusion"];
var palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
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
    var letritas = document.getElementById("letritas");
    letritas.innerHTML = "";
    Object.keys(letrasIncorrectas).forEach(function (letra) {
        var span = document.createElement("span");
        span.innerHTML = letra + (letrasIncorrectas[letra] > 1 ? "<sub>" + letrasIncorrectas[letra] + "</sub>" : '') + " ";
        letritas.appendChild(span);
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
        revelarPalabraDerrota(palabra);
    }
}

function verificarVictoria() {
    var todasAdivinadas = palabra.split("").every(function (letra) {
        return letrasCorrectas.includes(letra);
    });

    if (todasAdivinadas) {
        juegoActivo = false;
        revelarPalabraVictoria(palabra);
    }
}

function revelarPalabraVictoria(palabraCorrecta) {
    const palabraElement = document.getElementById('palabra');
    palabraElement.innerHTML = 'Palabra: ';

    palabraCorrecta.split('').forEach((letra, index) => {
        const span = document.createElement('span');
        span.textContent = letra;
        span.style.animationDelay = `${index * 0.1}s`;
        span.classList.add('letra-ganadora');
        palabraElement.appendChild(span);
    });

    const mensaje = document.getElementById('mensaje');
    if (mensaje) {
        mensaje.textContent = '¡Felicidades! ¡Has ganado! 🎉';
        mensaje.style.color = '#FFD700';
    }

    setTimeout(reiniciarTablero, 5000);
}

function revelarPalabraDerrota(palabraCorrecta) {
    const palabraElement = document.getElementById('palabra');
    palabraElement.innerHTML = 'Palabra: ';

    palabraCorrecta.split('').forEach((letra, index) => {
        const span = document.createElement('span');
        span.textContent = letra;
        span.style.animationDelay = `${index * 0.1}s`;
        span.classList.add('letra-revelada');
        palabraElement.appendChild(span);
    });

    const mensaje = document.getElementById('mensaje');
    if (mensaje) {
        mensaje.textContent = '¡Oh no! Has perdido...';
        mensaje.style.color = '#FF69B4';
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
                        verificarVictoria();
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
    document.querySelectorAll('#letritas span').forEach((span, index) => {
        span.style.setProperty('--order', index);
    });
};