const colores = ['rojo', 'azul', 'verde', 'amarillo'];
let secuenciaPC = [];
let secuenciaUsuario = [];
let nivel = 1;

function iniciarJuego() {
    secuenciaPC = [];
    secuenciaUsuario = [];
    nivel = 1;
    generarSecuencia();
}


function generarSecuencia() {
    let secuenciaColores = colores[Math.floor(Math.random() * colores.length)];
    secuenciaPC.push(secuenciaColores);
    mostrarSecuencia();
}

function mostrarSecuencia() {
    const secuenciaColores = document.getElementById('secuenciaColor');
    secuenciaColores.textContent = '';

    let delay = 1000; // milisegundos
    secuenciaPC.forEach((color, index) => {
        setTimeout(() => {
            secuenciaColores.textContent = color;
        }, delay * index + 1);
    });

    setTimeout(() => {
        entradaSecuenciaJugador();
    }, delay * secuenciaPC.length + 1);
}

function entradaSecuenciaJugador() {
    secuenciaUsuario = [];
    const colorD = document.getElementById(color);
    colorD.addEventListener('click', () => {
        secuenciaUsuario.push(color);
        if (secuenciaUsuario.length === secuenciaPC.length) {
            verificarSecuencia();
        }
    });

}

function verificarSecuencia() {
    const secuenciaCorrecta = secuenciaUsuario.every((color, index) => color === secuenciaPC[index]);
    if (secuenciaCorrecta) {
        alert("Perfecto, sigue con el siguiente nivel");
        nivel++;
        generarSecuencia();
    } else {
        alert('Juego terminado');
    }
}

