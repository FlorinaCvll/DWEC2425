class Carta {
    constructor(numero, palo) {
        this.numero = numero;
        this.palo = palo;
    }
}

const numeros = ['1', '2', '3', '4', '5', '6', '7', '10', '11', '12'];
let baraja = [];
let posicionActual = 0;
let cartasDescubiertas = [];
let desordenado = false;

function crearElementoCarta(numero, palo) {
    const elemento = document.createElement('div');
    elemento.classList.add('carta');

    const numFormateado = numero < 10 ? `0${numero}` : numero;
    const srcImg = `${numFormateado}-${palo.toLowerCase()}.png`;

    const imagenElemento = document.createElement('img');
    imagenElemento.classList.add('imagen-carta');
    imagenElemento.src = `./img/${srcImg}`;

    elemento.appendChild(imagenElemento);

    elemento.innerHTML += `<span class="numero">${numero}</span><span class="numero-invertido">${numero}</span>`;

    return elemento;
}


function generarBaraja() {
    const palos = ['Oros', 'Copas', 'Espadas', 'Bastos'];
    const barajaNueva = [];

    palos.forEach(palo => {
        numeros.forEach(numero => {
            barajaNueva.push(new Carta(numero, palo));
        });
    });

    return barajaNueva;
}

function mostrarCartas() {
    const contenedorCartas = document.getElementById('cartas');
    contenedorCartas.innerHTML = '';
    cartasDescubiertas.forEach(carta => {
        const cartaElemento = crearElementoCarta(carta.numero, carta.palo);
        contenedorCartas.appendChild(cartaElemento);
    });
}

function barajarCartas() {
    for (let i = cartasDescubiertas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartasDescubiertas[i], cartasDescubiertas[j]] = [cartasDescubiertas[j], cartasDescubiertas[i]];
    }
}

function ordenarCartasPorPalo() {
    cartasDescubiertas.sort((a, b) => {
        const palos = ['Oros', 'Copas', 'Espadas', 'Bastos'];
        const indexA = palos.indexOf(a.palo);
        const indexB = palos.indexOf(b.palo);
        if (indexA === indexB) {
            return a.numero - b.numero;
        }
        return indexA - indexB;
    });
}

function nuevaCarta() {
    if (posicionActual < baraja.length) {
        const carta = baraja[posicionActual];
        cartasDescubiertas.push(carta);
        const cartaElemento = crearElementoCarta(carta.numero, carta.palo);
        const contenedorCartas = document.getElementById('cartas');
        contenedorCartas.appendChild(cartaElemento);
        posicionActual++;
    }
}


window.onload = function () {
    baraja = generarBaraja();

    const monton = document.getElementById('monton');
    const contenedorCartas = document.getElementById('cartas');

    monton.addEventListener('click', () => {
        nuevaCarta();
    });

    contenedorCartas.addEventListener('dblclick', () => {
        if (cartasDescubiertas.length > 0) {
            if (desordenado) {
                ordenarCartasPorPalo();
                mostrarCartas();
                desordenado = false;
            } else {
                barajarCartas();
                mostrarCartas();
                desordenado = true;
            }
        }
    });
};