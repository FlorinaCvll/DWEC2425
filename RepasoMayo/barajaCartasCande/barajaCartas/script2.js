class Carta {
    constructor(numero, palo) {
        this.numero = numero;
        this.palo = palo;
    }
}

const numeros = ['1', '2', '3', '4', '5', '6', '7', '10', '11', '12'];

let baraja = [];

let cartasVistas = [];

let posicionActual = 0;

let desordenado = false;


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

function nuevaCarta() {
    if (posicionActual < baraja.length) {
        const carta = baraja[posicionActual];
        cartasVistas.push(carta);

        const elementoCarta = crearElementoCarta(carta.numero, carta.palo);
        const cartas = document.getElementById('cartas');
        cartas.appendChild(elementoCarta);

        posicionActual++;
    }
}


function crearElementoCarta(numero, palo) {
    const elemento = document.createElement('div');
    elemento.classList.add('carta');

    const numFormateado = numero < 10 ? `0${numero}` : numero;
    const srcImg = `${numFormateado}-${palo.toLowerCase()}.png`;
    const imagenElemento = document.createElement('img');
    imagenElemento.classList.add('img-carta');
    imagenElemento.src = `./img/${srcImg}`;

    elemento.appendChild(imagenElemento);
    elemento.innerHTML += `<span class="numeroArriba">${numero}</span><span class="numeroAbajo">${numero}</span>`;

    return elemento;
}


function ordenPorPalos() {
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


window.onload = function () {
    baraja = generarBaraja();
    const monton = document.getElementById('monton');
    const cartas = document.getElementById('cartas');

    monton.addEventListener('click', () => {
        nuevaCarta();
    });


    cartas.addEventListener('dblclick', () => {
        if (cartasDescubiertas.length > 0) {
            if (desordenado) {
                ordenPorPalos();
                mostrarCartas();
                desordenado = false;
            } else {
                barajarCartas();
                mostrarCartas();
                desordenado = true;
            }
        }
    });
}