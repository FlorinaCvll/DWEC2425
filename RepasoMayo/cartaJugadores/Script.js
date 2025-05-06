document.addEventListener("DOMContentLoaded", () => {
    const nombreJugadoresForm = document.getElementById("nombreJugadoresForm");
    const nombreJugador1Display = document.getElementById("nombreJugador1Display");
    const nombreJugador2Display = document.getElementById("nombreJugador2Display");
    const inicio = document.getElementById("inicio");
    const juego = document.getElementById("juego");

    const crearCartaForm = document.getElementById("crearCartaForm");
    const mostrar1 = document.getElementById("mostrar1");
    const mostrar2 = document.getElementById("mostrar2");
    const ocultar1 = document.getElementById("ocultar1");
    const ocultar2 = document.getElementById("ocultar2");

    const jugadorUnoCartas = document.querySelectorAll("#jugadorUno .carta");
    const jugadorDosCartas = document.querySelectorAll("#jugadorDos .carta");

    let cartasJugador1 = [];
    let cartasJugador2 = [];
    let turno = 1;
    let turnoNumero = 1;

    let cartaSeleccionadaJugador1 = null;
    let atributoSeleccionadoJugador1 = null;

    nombreJugadoresForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombreJugador1 = document.getElementById("nombreJugador1").value;
        const nombreJugador2 = document.getElementById("nombreJugador2").value;

        nombreJugador1Display.textContent = `JUGADOR 1: ${nombreJugador1}`;
        nombreJugador2Display.textContent = `JUGADOR 2: ${nombreJugador2}`;

        inicio.style.display = "none";
        juego.style.display = "flex";
    });

    crearCartaForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombreCarta").value;
        const fuerza = parseInt(document.getElementById("fuerza").value);
        const defensa = parseInt(document.getElementById("defensa").value);
        const habilidad = parseInt(document.getElementById("habilidad").value);

        if (fuerza + defensa + habilidad > 30) {
            alert("La suma de Fuerza, Defensa y Habilidad no puede superar 30");
            return;
        }

        const carta = {nombre, fuerza, defensa, habilidad};

        if (turno === 1) {
            if (cartasJugador1.length < 3) {
                cartasJugador1.push(carta);
                actualizarCartas(jugadorUnoCartas, cartasJugador1);
                if (cartasJugador1.length === 3) {
                    turno = 2;
                }
            }
        } else {
            if (cartasJugador2.length < 3) {
                cartasJugador2.push(carta);
                actualizarCartas(jugadorDosCartas, cartasJugador2);
                if (cartasJugador2.length === 3) {
                    turno = 1;
                }
            }
        }

        crearCartaForm.reset();
    });

    mostrar1.addEventListener("click", () => {
        toggleMostrarCartas(jugadorUnoCartas, true);
    });

    mostrar2.addEventListener("click", () => {
        toggleMostrarCartas(jugadorDosCartas, true);
    });

    ocultar1.addEventListener("click", () => {
        toggleMostrarCartas(jugadorUnoCartas, false);
    });

    ocultar2.addEventListener("click", () => {
        toggleMostrarCartas(jugadorDosCartas, false);
    });

    function actualizarCartas(cartasElements, cartasData) {
        cartasData.forEach((carta, index) => {
            const cartaElement = cartasElements[index];
            cartaElement.querySelector(".nombre").textContent = `NOMBRE: ${carta.nombre}`;
            cartaElement.querySelector(".fuerza").textContent = `FUERZA: ${carta.fuerza}`;
            cartaElement.querySelector(".defensa").textContent = `DEFENSA: ${carta.defensa}`;
            cartaElement.querySelector(".habilidad").textContent = `HABILIDAD: ${carta.habilidad}`;
        });
    }

    function toggleMostrarCartas(cartasElements, mostrar) {
        cartasElements.forEach(carta => {
            carta.classList.toggle("oculta", !mostrar);
            carta.style.pointerEvents = mostrar ? "auto" : "none";
        });
    }

    jugadorUnoCartas.forEach((carta, index) => {
        carta.addEventListener("click", () => seleccionarCarta(1, index + 1));
    });

    jugadorDosCartas.forEach((carta, index) => {
        carta.addEventListener("click", () => seleccionarCarta(2, index + 1));
    });

    function seleccionarCarta(jugador, cartaIndex) {
        if (jugador === 1) {
            if (turnoNumero > 1 && turno !== jugador) {
                alert(`No es el turno del Jugador ${jugador}`);
                return;
            }

            const carta = cartasJugador1[cartaIndex - 1];
            const atributo = prompt(`Jugador ${jugador}, elige un atributo (fuerza, defensa, habilidad):`).toLowerCase();

            if (!carta || !['fuerza', 'defensa', 'habilidad'].includes(atributo)) {
                alert("Atributo inválido o carta no disponible.");
                return;
            }

            cartaSeleccionadaJugador1 = carta;
            atributoSeleccionadoJugador1 = atributo;

            toggleMostrarCartas(jugadorUnoCartas, false);
            toggleMostrarCartas(jugadorDosCartas, true);

            turno = 2;
        } else {
            if (turnoNumero > 1 && turno !== jugador) {
                alert(`No es el turno del Jugador ${jugador}`);
                return;
            }

            if (!cartaSeleccionadaJugador1) {
                alert("Error: no se ha seleccionado ninguna carta del Jugador 1");
                return;
            }

            const carta = cartasJugador2[cartaIndex - 1];
            if (!carta || !cartaSeleccionadaJugador1) {
                alert("Error: carta no disponible o no se ha seleccionado ninguna carta del Jugador");

                return;
            }

            let atributo;
            if (turnoNumero === 1) {
                // En el primer turno, el segundo jugador utiliza el atributo opuesto al seleccionado por el primer jugador
                switch (atributoSeleccionadoJugador1) {
                    case 'fuerza':
                        atributo = 'defensa';
                        break;
                    case 'defensa':
                        atributo = 'fuerza';
                        break;
                    case 'habilidad':
                        atributo = 'habilidad';
                        break;
                }
            } else {
                // En el segundo turno, se elige aleatoriamente el atributo
                const atributos = ['fuerza', 'defensa', 'habilidad'];
                atributo = atributos[Math.floor(Math.random() * atributos.length)];
            }

            mostrarCartasEnRing(cartaSeleccionadaJugador1, carta);

            const valorJugador1 = cartaSeleccionadaJugador1[atributo];
            const valorJugador2 = carta[atributo];

            if (valorJugador1 === valorJugador2) {
                alert("Empate. Ninguna carta será eliminada.");
            } else {
                if (valorJugador1 > valorJugador2) {
                    alert(`Jugador 1 gana este turno!`);
                    eliminarCarta(cartasJugador2, cartaIndex - 1, jugadorDosCartas);
                } else {
                    alert(`Jugador 2 gana este turno!`);
                    eliminarCarta(cartasJugador1, cartasJugador1.indexOf(cartaSeleccionadaJugador1), jugadorUnoCartas);
                }
            }

            turnoNumero++;
            turno = 1;

            verificarFinDelJuego();
        }
    }


    function eliminarCarta(cartasArray, index, cartasElements) {
        cartasArray.splice(index, 1);
        const cartaElement = cartasElements[index];
        cartaElement.style.display = 'none';
    }

    function mostrarCartasEnRing(carta1, carta2) {
        const carta1Element = document.getElementById("cj1");
        const carta2Element = document.getElementById("cj2");

        carta1Element.querySelector(".nombre").textContent = `NOMBRE: ${carta1.nombre}`;
        carta1Element.querySelector(".fuerza").textContent = `FUERZA: ${carta1.fuerza}`;
        carta1Element.querySelector(".defensa").textContent = `DEFENSA: ${carta1.defensa}`;
        carta1Element.querySelector(".habilidad").textContent = `HABILIDAD: ${carta1.habilidad}`;

        carta2Element.querySelector(".nombre").textContent = `NOMBRE: ${carta2.nombre}`;
        carta2Element.querySelector(".fuerza").textContent = `FUERZA: ${carta2.fuerza}`;
        carta2Element.querySelector(".defensa").textContent = `DEFENSA: ${carta2.defensa}`;
        carta2Element.querySelector(".habilidad").textContent = `HABILIDAD: ${carta2.habilidad}`;
    }

    function verificarFinDelJuego() {
        if (cartasJugador1.length === 0) {
            alert("Jugador 2 gana el juego!");
            juego.style.display = "none";
            inicio.style.display = "flex";
        } else if (cartasJugador2.length === 0) {
            alert("Jugador 1 gana el juego!");
            juego.style.display = "none";
            inicio.style.display = "flex";
        } else {
            toggleMostrarCartas(jugadorUnoCartas, turno === 1);
            toggleMostrarCartas(jugadorDosCartas, turno === 2);
        }
    }


    function addSparkles() {
        const body = document.body;
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 3 + 's';
            body.appendChild(sparkle);
        }
    }
});
