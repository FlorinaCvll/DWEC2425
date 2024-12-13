const tablero = document.getElementById('tablero');
const intentosSpan = document.getElementById('intentos');
const tiempoSpan = document.getElementById('tiempo');
let intentos = 0;
let tiempo = 0;
let temporizador;

const cartas = [
    '🍎', '🍎', '🍌', '🍌',
    '🍇', '🍇', '🍓', '🍓',
    '🍉', '🍉', '🍒', '🍒',
    '🍍', '🍍', '🥝', '🥝'
];

function barajar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

barajar(cartas);

function crearTablero() {
    cartas.forEach((simbolo, index) => {
        const carta = document.createElement('div');
        carta.classList.add('carta');
        carta.dataset.simbolo = simbolo; // Guardar el símbolo como dato
        carta.dataset.index = index; // Guardar el índice único
        carta.textContent = simbolo;
        tablero.appendChild(carta);
    });
}

let primeraCarta = null;
let segundaCarta = null;
let bloquearTablero = false;

function manejarCartaClick(e) {
    const carta = e.target;

    if (bloquearTablero || carta === primeraCarta || carta.classList.contains('revelada')) {
        return; // Ignorar si ya está revelada o si el tablero está bloqueado
    }

    carta.classList.add('revelada');

    if (!primeraCarta) {
        primeraCarta = carta;
        return;
    }

    segundaCarta = carta;
    verificarPareja();
}

// Verificar si las cartas coinciden
function verificarPareja() {
    const simbolo1 = primeraCarta.dataset.simbolo;
    const simbolo2 = segundaCarta.dataset.simbolo;

    bloquearTablero = true;
    intentos++;
    intentosSpan.textContent = intentos;

    if (simbolo1 === simbolo2) {
        resetearSeleccion();
        verificarFinDelJuego();
    } else {
        setTimeout(() => {
            primeraCarta.classList.remove('revelada');
            segundaCarta.classList.remove('revelada');
            resetearSeleccion();
        }, 1000);
    }
}

// Resetear la selección de cartas
function resetearSeleccion() {
    primeraCarta = null;
    segundaCarta = null;
    bloquearTablero = false;
}

// Verificar si el juego ha terminado
function verificarFinDelJuego() {
    const cartasRestantes = document.querySelectorAll('.carta:not(.revelada)');
    if (cartasRestantes.length === 0) {
        clearInterval(temporizador);
        alert(`¡Felicidades! Has terminado el juego en ${tiempo} segundos con ${intentos} intentos.`);
    }
}

// Iniciar el temporizador
function iniciarTemporizador() {
    temporizador = setInterval(() => {
        tiempo++;
        tiempoSpan.textContent = tiempo;
    }, 1000);
}

// Iniciar el juego
crearTablero();
iniciarTemporizador();

// Añadir eventos a las cartas
document.querySelectorAll('.carta').forEach(carta => {
    carta.addEventListener('click', manejarCartaClick);
});
