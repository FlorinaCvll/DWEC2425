const circulo = document.getElementById('circulo');
const puntuacion = document.getElementById('puntos');
const tiempo = document.getElementById('tiempoRestante');

let puntos = 0;
let tiempoRestante = 30; // PARA MODIFICAR TIEMPO DE JUEGO
const gameWidth = document.getElementById('pantalla').offsetWidth;
const gameHeight = document.getElementById('pantalla').offsetHeight;
let juegoInterval;
let tiempoInterval;

function moverCirculo() {
    const randomX = Math.floor(Math.random() * (gameWidth - 50));
    const randomY = Math.floor(Math.random() * (gameHeight - 50));
    circulo.style.left = `${randomX}px`;
    circulo.style.top = `${randomY}px`;
}

circulo.addEventListener('click', () => {
    puntos++;
    puntuacion.textContent = puntos; // PUNTUACION
    moverCirculo();
});

function iniciarCrono() {
    tiempoInterval = setInterval(() => {
        tiempoRestante--;
        tiempo.textContent = tiempoRestante; // TIEMPO

        if (tiempoRestante <= 0) {
            clearInterval(tiempoInterval);
            clearInterval(juegoInterval);
            finJuego(); // GAME OVER
        }
    }, 1000);
}

function finJuego() {
    alert(`¡Se acabó el tiempo! Tu puntuación es: ${puntos}`);

    const jugarDeNuevo = confirm("¿Quieres jugar otra vez?");
    if (jugarDeNuevo) {
        location.reload();
    } else {
        console.log("¡Hasta pronto!");
    }
}

function iniciarJuego() {
    moverCirculo();
    juegoInterval = setInterval(moverCirculo, 1500);
    iniciarCrono();
}

window.onload = function () {
    iniciarJuego();
}
