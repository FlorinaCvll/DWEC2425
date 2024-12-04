// Variables iniciales
let turnoActual = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];
let juegoTerminado = false;

// Referencias al DOM
const tableroDiv = document.getElementById("tablero");
const turnoSpan = document.getElementById("turno");
const resultadoP = document.getElementById("resultado");
const reiniciarBtn = document.getElementById("reiniciar");

// Función para dibujar el tablero
function dibujarTablero() {
    tableroDiv.innerHTML = ""; // Limpiar tablero
    tablero.forEach((celda, index) => {
        const celdaDiv = document.createElement("div");
        celdaDiv.classList.add("celda");
        celdaDiv.textContent = celda;
        celdaDiv.addEventListener("click", () => manejarClick(index));
        tableroDiv.appendChild(celdaDiv);
    });
}

// Manejar el clic en una celda
function manejarClick(index) {
    if (juegoTerminado || tablero[index] !== "") return;

    // Actualizar tablero y alternar turno
    tablero[index] = turnoActual;
    turnoActual = turnoActual === "X" ? "O" : "X";
    turnoSpan.textContent = turnoActual;

    // Verificar si hay un ganador o empate
    verificarEstado();
    dibujarTablero();
}

// Verificar si hay un ganador o empate
function verificarEstado() {
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    combinacionesGanadoras.forEach(combinacion => {
        const [a, b, c] = combinacion;
        if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
            resultadoP.textContent = `¡${tablero[a]} ha ganado!`;
            juegoTerminado = true;
        }
    });

    // Verificar si hay empate
    if (!juegoTerminado && tablero.every(celda => celda !== "")) {
        resultadoP.textContent = "Es un empate.";
        juegoTerminado = true;
    }
}

// Reiniciar el juego
reiniciarBtn.addEventListener("click", () => {
    tablero = ["", "", "", "", "", "", "", "", ""];
    turnoActual = "X";
    juegoTerminado = false;
    resultadoP.textContent = "";
    turnoSpan.textContent = turnoActual;
    dibujarTablero();
});

// Inicializar el juego
dibujarTablero();
