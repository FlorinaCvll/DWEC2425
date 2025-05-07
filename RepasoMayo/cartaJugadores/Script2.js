class Carta {
    constructor(nombre, fuerza, defensa, habilidad) {
        this.nombre = nombre;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.habilidad = habilidad;
    }
}

class Jugador {
    constructor(nombre) {
        this.nombre = nombre;
        this.cartas = [];
    }

    agregarCartita(carta) {
        if (this.cartas.length < 3) {
            this.cartas.push(carta);
        } else {
            throw new Error("El jugador ya tiene 3 cartas.");
        }
    }

    eliminarCarta(index) {
        if (index < 0 || index >= this.cartas.length) {
            throw new Error("No existe la carta.");
        }
        this.cartas.splice(index, 1);

    }
}

class Juego {
    function

    constructor() {
        this.jugadorUno = null;
        this.jugadorDos = null;
        this.turno = 1;
        this.cartaSelectJ1 = null;
        this.cartaSelectJ2 = null;

        this.inicioEventos();
        this.addSparkles()
    }

    inicioEventos() {
        document.getElementById("nombreJugadoresForm").addEventListener("submit", (e) => this.iniciarJueguito(e));
        document.getElementById("crearCartaForm").addEventListener("submit", (e) => this.crearCartita(e));
    }

    addSparkles() {
        var body = document.body;
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            body.appendChild(sparkle);
        }
    }

    iniciarJueguito(e) {
        e.preventDefault();

        const nombreJUno = document.getElementById("nombreJugador1").value;
        const nombreJDos = document.getElementById("nombreJugador2").value;

        this.jugadorUno = new Jugador(nombreJUno);
        this.jugadorDos = new Jugador(nombreJDos);

        document.getElementById("nombreJugador1Display").textContent = 'JUGADOR 1: ' + this.jugadorUno.nombre;
        document.getElementById("nombreJugador2Display").textContent = 'JUGADOR 2: ' + this.jugadorDos.nombre;

        document.getElementById("inicio").style.display = "none";
        document.getElementById("juego").style.display = "flex";
    }

    crearCartita(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombreCarta").value;
        const fuerza = parseInt(document.getElementById("fuerza").value);
        const defensa = parseInt(document.getElementById("defensa").value);
        const habilidad = parseInt(document.getElementById("habilidad").value);

        if (fuerza + defensa + habilidad > 30) {
            alert("La suma de Fuerza, Defensa y Habilidad no puede superar 30.");
            return;
        }

        const cartita = new Carta(nombre, fuerza, defensa, habilidad);

        try {
            if (this.turno === 1) {
                this.jugadorUno.agregarCartita(cartita);
                this.actualizarTurno(1, this.jugadorUno.cartas);
                if (this.jugadorUno.cartas.length === 3) {
                    this.turno = 2;
                }
            } else {
                this.jugadorDos.agregarCartita(cartita);
                this.actualizarTurno(2, this.jugadorDos.cartas);
                if (this.jugadorDos.cartas.length === 3) {
                    this.turno = 1;
                }
            }
        } catch (error) {
            alert(error.message);
        }

        this.cambiarVisibilidad();
        document.getElementById("crearCartaForm").reset();
    }

    actualizarTurno(jugador, cartas) {
        const cartasElements = document.querySelectorAll(`#jugador${jugador === 1 ? "Uno" : "Dos"} .carta`);

        cartas.forEach((carta, index) => {
            const cartaElemento = cartasElements[index];
            if (cartaElemento && carta) {
                // Validar que el atributo habilidad exista y sea un número
                if (typeof carta.habilidad !== "number" || isNaN(carta.habilidad)) {
                    console.error(`Error: La carta en el índice ${index} no tiene un atributo 'habilidad' válido.`);
                    return;
                }

                cartaElemento.querySelector(".nombre").textContent = `NOMBRE: ${carta.nombre}`;
                cartaElemento.querySelector(".fuerza").textContent = `FUERZA: ${carta.fuerza}`;
                cartaElemento.querySelector(".defensa").textContent = `DEFENSA: ${carta.defensa}`;
                cartaElemento.querySelector(".habilidad").textContent = `HABILIDAD: ${carta.habilidad}`;
            } else {
                console.error(`Error: cartaElemento o carta no están definidos en el índice ${index}.`);
            }
        });
    }

    asociarEventosCartas() {
        const cartas = document.querySelectorAll('.carta');
        cartas.forEach((carta) => {
            carta.addEventListener('click', () => {
                const atributos = ['fuerza', 'defensa', 'habilidad'];
                const atributoSeleccionado = prompt(`Elige un atributo: ${atributos.join(', ')}`);

                if (atributos.includes(atributoSeleccionado)) {
                    console.log(`Atributo seleccionado: ${atributoSeleccionado}`);
                    // Aquí puedes manejar la lógica del atributo seleccionado
                } else {
                    alert('Atributo inválido. Intenta de nuevo.');
                }
            });
        });
    }

    cambiarVisibilidad() {
        var cartasJugadorUno = document.querySelectorAll('#jugadorUno .carta');
        var cartasJugadorDos = document.querySelectorAll('#jugadorDos .carta');

        if (this.turno === 1) {
            cartasJugadorUno.forEach(carta => carta.classList.remove('oculto'));
            cartasJugadorDos.forEach(carta => carta.classList.add('oculto'));
        } else {
            cartasJugadorUno.forEach(carta => carta.classList.add('oculto'));
            cartasJugadorDos.forEach(carta => carta.classList.remove('oculto'));
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    new Juego();
});