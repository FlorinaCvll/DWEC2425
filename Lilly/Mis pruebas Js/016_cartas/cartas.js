class carta {
    constructor(num, pal) {
        this.num = num;
        this.pal = pal;
    }

}

const aa = ['O', 'C', 'E', 'B'];
const bb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
let baraja = [];
let desordenado = false;
let cartaDesc = [];
let posicio = 0;

function crear(num, pal) {

    const elem = document.createElement('div');

    const imagePath = `img/${num}${pal}.jpeg`;

    elem.innerHTML += `<div class="principal " id="carta"   style="background-image: url('${imagePath}')">
<div class="card-number">${pal}</div>
</div>`;

    return elem;
}

function aniadir() {
    const nueva = [];

    aa.forEach(num => {
        bb.forEach(pal => {
            nueva.push(new carta(num, pal));
        });
    });
    return nueva;
}


function mezclarCartas() {
    for (let i = cartaDesc.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartaDesc[i], cartaDesc[j]] = [cartaDesc[j], cartaDesc[i]];
    }
}

function ordenar() {
    cartaDesc.sort((a, b) => {
        const ina = aa.indexOf(a.num);
        const inb = aa.indexOf(b.num);
        if (ina === inb) {
            return parseInt(a.pal) - parseInt(b.pal);
        }
        return ina - inb;
    });
}

function mostrarCartas() {
    const contenedorA = document.getElementById('principal');
    contenedorA.innerHTML = '';
    cartaDesc.forEach(carta => {
        const cartaElemento = crear(carta.num, carta.pal);
        contenedorA.appendChild(cartaElemento);
    });
}

function nueva() {
    if (posicio < baraja.length) {
        const c = baraja[posicio];
        cartaDesc.push(c);
        const cartE = crear(c.num, c.pal);
        const cont = document.getElementById('principal');
        cont.appendChild(cartE);
        posicio++;
    }
}

window.onload = function () {
    baraja = aniadir();

    const mazo = document.getElementById("boton");
    const contenedor = document.getElementById("principal");
    mazo.addEventListener("click", () => {
        nueva();
    });
    contenedor.addEventListener("dblclick", () => {
        if (cartaDesc.length > 0) {
            if (desordenado) {
                ordenar();
                mostrarCartas();
                desordenado = false;
            } else {
                mezclarCartas();
                mostrarCartas();
                desordenado = true;
            }
        }
    });
    mostrarCartas();
};