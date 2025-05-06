const numeros = ['1', '2', '3', '4', '5', '6', '7', '10', '11', '12'];
let baraja = [];
let posicionActual = 0;
let cartasDescubiertas = [];
let desordenado = false;

class Carta {
    constructor(numero, palo) {
        this.numero = numero;
        this.palo = palo;
    }
}

class Baraja {
    constructor(palo) {
        this.palo = palo;
        this.cartas = this.generarCartas();
    }

    generarCartas() {
        return numeros.map(numero => new Carta(numero, this.palo));
    }

}

class BarajaOros extends Baraja {
    constructor() {
        super('Oros');
    }
}

class BarajaCopas extends Baraja {
    constructor() {
        super('Copas');
    }
}

class BarajaEspadas extends Baraja {
    constructor() {
        super('Espadas');
    }
}

class BarajaBastos extends Baraja {
    constructor() {
        super('Bastos');
    }
}

// Instancias de las barajas
const barajaOros = new BarajaOros();
const barajaCopas = new BarajaCopas();
const barajaEspadas = new BarajaEspadas();
const barajaBastos = new BarajaBastos();


function crearElementoCarta(numero, palo) {
    const elemento = document.createElement('div');
    elemento.classList.add('carta');

    const numeroFormateado = numero < 10 ? `0${numero}` : numero;
    const imagenSrc = `${numeroFormateado}-${palo.toLowerCase()}.png`;

    const imagenElemento = document.createElement('img');
    imagenElemento.classList.add('imagen-carta');
    imagenElemento.src = `./img/${imagenSrc}`;

    elemento.appendChild(imagenElemento);
    return elemento;
}

function mostrarCartaDeBaraja(baraja) {
    if (baraja.cartas.length > 0) {
        const carta = baraja.cartas.shift(); // quitar la primera carta de la baraja
        cartasDescubiertas.push(carta); // añadir a las cartas descubiertas al array
        const cartaElemento = crearElementoCarta(carta.numero, carta.palo); // crear el elemento de la carta segun el palo y numero

        let contenedorCartas;
        switch (carta.palo) {
            case 'Oros':
                contenedorCartas = document.getElementById('cartas-oros');
                break;
            case 'Copas':
                contenedorCartas = document.getElementById('cartas-copas');
                break;
            case 'Espadas':
                contenedorCartas = document.getElementById('cartas-espadas');
                break;
            case 'Bastos':
                contenedorCartas = document.getElementById('cartas-bastos');
                break;
        }

        contenedorCartas.appendChild(cartaElemento);
    }
}


function barajarCartas(cartas) {
    for (let i = cartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
    }
}

function ordenarCartasPorPaloYNumero(cartas) {
    const palosOrden = ['Oros', 'Copas', 'Espadas', 'Bastos'];
    cartas.sort((a, b) => {
        const indexA = palosOrden.indexOf(a.palo);
        const indexB = palosOrden.indexOf(b.palo);
        if (indexA === indexB) {
            return a.numero - b.numero;
        }
        return indexA - indexB;
    });
}

function mostrarCartasOrdenadasODesordenadas() {
    const contenedores = {
        Oros: document.getElementById('cartas-oros'),
        Copas: document.getElementById('cartas-copas'),
        Espadas: document.getElementById('cartas-espadas'),
        Bastos: document.getElementById('cartas-bastos')
    };

    Object.values(contenedores).forEach(contenedor => contenedor.innerHTML = '');

    // Añade las cartas a sus respectivos contenedores
    cartasDescubiertas.forEach(carta => {
        const cartaElemento = crearElementoCarta(carta.numero, carta.palo);
        contenedores[carta.palo].appendChild(cartaElemento);
    });
}

window.onload = function () {
    // recoger el div de las barajas individuales
    const mazoOros = document.getElementsByClassName('baraja oros')[0];
    const mazoCopas = document.getElementsByClassName('baraja copas')[0];
    const mazoEspadas = document.getElementsByClassName('baraja espadas')[0];
    const mazoBastos = document.getElementsByClassName('baraja bastos')[0];

    // Asignar eventos
    mazoOros.addEventListener('click', () => mostrarCartaDeBaraja(barajaOros));
    mazoCopas.addEventListener('click', () => mostrarCartaDeBaraja(barajaCopas));
    mazoEspadas.addEventListener('click', () => mostrarCartaDeBaraja(barajaEspadas));
    mazoBastos.addEventListener('click', () => mostrarCartaDeBaraja(barajaBastos));

    const contenedorCartas = document.getElementById('cartas');
    let desordenado = false;

    contenedorCartas.addEventListener('dblclick', () => {
        if (cartasDescubiertas.length > 0) {
            if (desordenado) {
                ordenarCartasPorPaloYNumero(cartasDescubiertas);
                desordenado = false;
            } else {
                barajarCartas(cartasDescubiertas);
                desordenado = true;
            }
            mostrarCartasOrdenadasODesordenadas();
        }
    });

}
