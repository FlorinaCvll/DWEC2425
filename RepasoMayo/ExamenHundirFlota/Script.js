var puntuacionTotal = 3;
function ocultarMonigote() {
    // Obtiene el atributo 'src' del elemento con id 'mostrar'
    let monigoteMostrarSRC = document.getElementById("mostrar").getAttribute("src");

    // Verifica si la imagen actual es 'mostrar.png'
    if (monigoteMostrarSRC == "imagenes/mostrar.png") {
        // Cambia la imagen a 'ocultar.png' y oculta las imágenes
        document.getElementById("mostrar").setAttribute("src", "imagenes/ocultar.png");
        ocultarImagenes();
    } else if (monigoteMostrarSRC == "imagenes/ocultar.png") {
        // Cambia la imagen a 'mostrar.png' y muestra las imágenes
        document.getElementById("mostrar").setAttribute("src", "imagenes/mostrar.png");
        mostrarImagenes();
    } else {
        // Muestra un mensaje de error en la consola si el 'src' no es válido
        console.log("Error");
    }
}

function ocultarImagenes() {
    // Obtiene todos los elementos con la clase 'img'
    let imagenes = document.getElementsByClassName("img");
    // Itera sobre cada imagen y la oculta
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.visibility = "hidden";
    }
}

function mostrarImagenes() {
    // Obtiene todos los elementos con la clase 'img'
    let imagenes = document.getElementsByClassName("img");
    // Itera sobre cada imagen y la muestra
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.visibility = "visible";
    }
}

let letraSeleccionada = '';
let numeroSeleccionado = '';

function recuperarLetra(event) {
    // Obtiene el id del elemento que disparó el evento
    const celdaId = event.target.id;
    // Mapea los ids de las celdas a letras
    const letras = {
        celda1: 'A',
        celda2: 'B',
        celda3: 'C',
        celda4: 'D'
    };
    // Asigna la letra correspondiente al id de la celda
    letraSeleccionada = letras[celdaId] || '';
    // Muestra las coordenadas si ambas están seleccionadas
    mostrarCoordenadas();
}

function recuperarNumero(event) {
    // Obtiene el id del elemento que disparó el evento
    const celdaId = event.target.id;
    // Verifica si el id comienza con 'celda0' y asigna el número correspondiente
    if (celdaId.startsWith('celda0')) {
        numeroSeleccionado = celdaId.slice(-1);
    } else {
        numeroSeleccionado = '';
    }
    // Muestra las coordenadas si ambas están seleccionadas
    mostrarCoordenadas();
}

let barcosClics = 0;

function puntuacion(celda) {
    if (celda.src.endsWith("barco1.png")) {
        puntuacionTotal += 1; // Barco 1: 1 punto
        barcosClics += 1;
    } else if (celda.src.endsWith("barco2.png")) {
        puntuacionTotal += 2; // Barco 2: 2 puntos
        barcosClics += 1;
    } else if (celda.src.endsWith("barco3.png")) {
        puntuacionTotal += 3; // Barco 3: 3 puntos
        barcosClics += 1;
    } else if (celda.src.endsWith("barco4.png")) {
        puntuacionTotal += 4; // Barco 4: 4 puntos
        barcosClics += 1;
    } else if (celda.src.endsWith("agua.png")) {
        puntuacionTotal -= 3; // Agua: -3 puntos
    } else if (celda.src.endsWith("estrellaBrilla.png")) {
        puntuacionTotal += 3; // Estrella: 3 puntos
    }

    if (puntuacionTotal <= 0) {
        alert("La partida ha acabado. Tu puntuación es: " + puntuacionTotal);
    }

    if (barcosClics === 4) {
        alert("Has hundido todos los barcos. Tu puntuación es: " + puntuacionTotal);
    }

    document.getElementById("score").innerText = "Puntuación: " + puntuacionTotal;
}
function mostrarCoordenadas() {
    if (letraSeleccionada && numeroSeleccionado) {
        const coordenadas = letraSeleccionada.toLowerCase() + numeroSeleccionado; // Ejemplo: "a1"
        const celda = document.getElementById(coordenadas);

        if (celda) {
            // Hace que la imagen parpadee dos veces
            let parpadeos = 0;
            const intervalo = setInterval(() => {
                celda.style.visibility = celda.style.visibility === "hidden" ? "visible" : "hidden";
                parpadeos++;

                if (parpadeos === 4) { // Dos parpadeos (ocultar y mostrar dos veces)
                    clearInterval(intervalo);
                    celda.style.visibility = "visible"; // Asegura que quede visible
                    celda.classList.add("resaltado"); // Resalta la celda
                    if (celda.src.endsWith("estrella.png")) {
                        celda.src = "imagenes/estrellaBrilla.png"; // Cambia la imagen 'estrella.png' a 'estrellaBrilla.png'
                    }
                    puntuacion(celda); // Llama a la función puntuacion
                }
            }, 750); // Intervalo de 750ms entre cada cambio de visibilidad
        }

        // Resetea la selección
        letraSeleccionada = '';
        numeroSeleccionado = '';
    }
}

function asignarImagenesAleatorias() {
    let imagenes = [
        "imagenes/barco1.png", "imagenes/barco2.png", "imagenes/barco3.png", "imagenes/barco4.png",
        "imagenes/agua.png", "imagenes/agua.png", "imagenes/agua.png",
        "imagenes/agua.png", "imagenes/agua.png", "imagenes/agua.png",
        "imagenes/estrella.png", "imagenes/estrella.png"
    ];

    // Mezclar aleatoriamente las imágenes
    imagenes = imagenes.sort(() => Math.random() - 0.5);

    // Obtener todas las celdas con imágenes y asignarles una imagen aleatoria
    let celdas = document.getElementsByClassName("img");

    for (let i = 0; i < celdas.length; i++) {
        celdas[i].src = imagenes[i]; // Asigna una imagen a cada celda
    }
}

function mostrarCelda() {
    // Obtiene todos los elementos con la clase 'img'
    let imagenes = document.getElementsByClassName("img");
    // Itera sobre cada imagen y agrega un evento de clicks
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener("click", function () {
            alert("Has seleccionado: " + imagenes[i].id);
            puntuacion(imagenes[i]);
        });
    }
}

window.onload = function () {
    // Agrega un evento de clic al elemento con id 'mostrar' para ocultar/mostrar imágenes
    document.getElementById("mostrar").addEventListener("click", ocultarMonigote);
    // Agrega eventos de clic a las celdas de letras
    for (let i = 1; i <= 4; i++) {
        document.getElementById("celda" + i).addEventListener("click", recuperarLetra);
    }
    for (let i = 1; i <= 3; i++) {
        document.getElementById("celda0" + i).addEventListener("click", recuperarNumero);
    }
    mostrarCelda();
    asignarImagenesAleatorias();
}