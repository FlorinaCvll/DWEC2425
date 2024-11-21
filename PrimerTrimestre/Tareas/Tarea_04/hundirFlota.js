const tamagnoTablero = 10;
let tablero = [];
let barcos = [
    {size: 3, posiciones: []},
    {size: 4, posiciones: []},
    {size: 5, posiciones: []}
];
let puntuacion = 100;

function iniciarTablero() {
    tablero = [];
    for (let i = 0; i < tamagnoTablero; i++) {
        tablero.push(Array(tamagnoTablero).fill(null));
    }
}

function posicionarBarcos() {
    barcos.forEach(barco => {
        let posicion = false;
        while (!posicion) {
            const fila = Math.floor(Math.random() * tamagnoTablero);
            const col = Math.floor(Math.random() * tamagnoTablero);
            const direccion = Math.random() < 0.5 ? 'H' : 'V';
            if (sePuedePonerBarco(fila, col, barco.size, direccion)) {
                for (let i = 0; i < barco.size; i++) {
                    const r = direccion === 'H' ? fila : fila + i;
                    const c = direccion === 'H' ? col + i : col;
                    tablero[r][c] = barco.size;
                    barco.posiciones.push({fila: r, col: c});
                }
                posicion = true;
            }
        }
    });
}

function sePuedePonerBarco(fila, col, tamagno, direccion) {
    if (direccion === 'H') {
        if (col + tamagno > tamagnoTablero) return false;
        for (let i = 0; i < tamagno; i++) {
            if (tablero[fila][col + i] !== null) return false;
        }
    } else {
        if (fila + tamagno > tamagnoTablero) return false;
        for (let i = 0; i < tamagno; i++) {
            if (tablero[fila + i][col] !== null) return false;
        }
    }
    return true;
}

function mostrarTablero() {
    const elementoGrid = document.getElementById('grid');
    elementoGrid.innerHTML = '';
    for (let i = 0; i < tamagnoTablero; i++) {
        for (let j = 0; j < tamagnoTablero; j++) {
            const celda = document.createElement('div');
            celda.className = 'celda';
            celda.dataset.fila = i;
            celda.dataset.col = j;
            celda.addEventListener('click', function () {
                clicCelda(i, j, celda);
            });
            elementoGrid.appendChild(celda);
        }
    }
}

function clicCelda(fila, col, celda) {
    const valorCelda = tablero[fila][col];
    if (valorCelda === null) {
        celda.classList.add('agua');
        celda.textContent = '💧';
    } else {
        celda.classList.add('barco');
        celda.textContent = valorCelda;
    }
    actualizarPuntuacion();
}

function mostrarVisibilidad() {
    const celdas = document.querySelectorAll('.celda');
    celdas.forEach(celda => {
        const fila = parseInt(celda.dataset.fila);
        const col = parseInt(celda.dataset.col);
        const valorCelda = tablero[fila][col];
        if (valorCelda === null) {
            celda.classList.toggle('agua');
            celda.textContent = celda.classList.contains('agua') ? '💧' : '';
        } else {
            celda.classList.toggle('barco');
            celda.textContent = celda.classList.contains('barco') ? valorCelda : '';
        }
    });
}

function cargarBarcos() {
    iniciarTablero();
    barcos.forEach(barco => barco.posiciones = []);
    posicionarBarcos();
    mostrarTablero();
    resetearPuntuacion();
}

function actualizarPuntuacion() {
    puntuacion--;
    document.getElementById('score').textContent = puntuacion;
}

function resetearPuntuacion() {
    puntuacion = 100;
    document.getElementById('score').textContent = puntuacion;
}

// Inicializar el juego
document.addEventListener("DOMContentLoaded", function () {
    cargarBarcos();
});
