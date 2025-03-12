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

function mostrarCoordenadas() {
    // Verifica si ambas coordenadas están seleccionadas
    if (letraSeleccionada && numeroSeleccionado) {
        // Combina las coordenadas y las muestra en una alerta
        const coordenadas = letraSeleccionada + numeroSeleccionado;
        alert(coordenadas);
        // Resetea las coordenadas seleccionadas
        letraSeleccionada = '';
        numeroSeleccionado = '';
    }
}


function mostrarCelda() {
    let imagenes = document.getElementsByClassName("img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].addEventListener('click', function () {
            alert("Has seleccionado la celda " + imagenes[i].id);
        })
    }

}


window.onload = function () {
    // Agrega un evento de clic al elemento con id 'mostrar' para ocultar/mostrar imágenes
    document.getElementById("mostrar").addEventListener("click", ocultarMonigote);
    // Agrega eventos de clic a las celdas de letras
    for (let i = 1; i <= 4; i++) {
        document.getElementById("celda" + i).addEventListener("click", recuperarLetra);
    }
    // Agrega eventos de clic a las celdas de números
    for (let i = 1; i <= 3; i++) {
        document.getElementById("celda0" + i).addEventListener("click", recuperarNumero);
    }
    mostrarCelda();
}