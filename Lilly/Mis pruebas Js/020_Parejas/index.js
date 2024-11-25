const array = [
    'img/reglas.png',
    'img/goma-de-borrar.png',
    'img/libros.png',
    'img/mochila.png',
    'img/ordenador-portatil.png',
    'img/silla.png',
    'img/reglas.png',
    'img/goma-de-borrar.png',
    'img/libros.png',
    'img/mochila.png',
    'img/ordenador-portatil.png',
    'img/silla.png'
];

const array2 = Array.from({length: array.length}, () => 'img/signo-de-interrogacion.png');

array.sort(() => 0.5 - Math.random());
array2.sort(() => 0.5 - Math.random());
const grid = document.querySelector('#pareja');


function mostrar() {

    const card = document.querySelectorAll('#colocar .intro img');
    card.forEach((card, index) => {
        card.src = array[index];
    });
    document.getElementById("mostrar").removeEventListener("click", mostrar);
    document.getElementById("ocultar").addEventListener("click", ocultar);

}

let tablero = [];

function ocultar() {

    const card = document.querySelectorAll('#colocar .intro img');
    card.forEach((card, index) => {
        card.src = array2[index];
    });
    document.getElementById("ocultar").removeEventListener("click", ocultar);
    document.getElementById("mostrar").addEventListener("click", mostrar);

}

let puntuacion = 0;

function iniciar() {
    document.querySelectorAll('.intro').forEach((elem, i) => elem.addEventListener("click", (ev) => pulsando(ev, i)));
}

let seleccion = [];
let pares = 0;

function pulsando(ev, pos) {
    const btn = ev.target;

    if (btn.src.includes('signo-de-interrogacion.png')) {
        btn.src = array[pos];
        btn.classList.add('rotacion');
        seleccion.push({elem: btn, index: pos});

        if (seleccion.length === 2) {
            ganar();
        }
    }
}

function ganar() {
    const [primera, segunda] = seleccion;
    if (array[primera.index] === array[segunda.index]) {
        alert("ACERTASTE");
        pares++;
        puntuacion++;
        document.getElementById("puntuacion1").textContent = puntuacion;
        document.getElementById("puntuacion2").textContent = puntuacion;
        if (pares === array.length / 2) {
            alert("Has ganado el juego");
        }
        seleccion = [];
    } else {
        setTimeout(() => {
            primera.elem.src = 'img/signo-de-interrogacion.png';
            segunda.elem.src = 'img/signo-de-interrogacion.png';
            seleccion = [];
        }, 1000);
    }
}

window.onload = function () {
    document.getElementById("mostrar").addEventListener("click", mostrar);
    document.getElementById("ocultar").addEventListener("click", ocultar);
    document.getElementById("iniciar").addEventListener("click", iniciar);
}
    


