// array como tabla de las posiciones de las imagenes & comprobar contra él despues
var tablaComprobar = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];
// array para rellenar con imagenes
var tablaConImagenes = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
var imagenes = ["android", "fucshia", "ios"]
/*
* 0 android
* 1 fuchsia
* 2 ios
* */

// Random saca numeros decimales, entonces usamos floor para redondear
function soElegido() {
    let so = Math.floor(Math.random() * 3);
    let soFinal = imagenes[so];
    return soFinal;
}

function cargarImagenes() {
    let alt = "";

    // concatenar SO con el separador "_" y el numero de imagen del 1 al 9 y añadir al array de las imagenes
    /*for (let fila = 0; fila < tablaConImagenes.length; fila++) {
        for (let col = fila; col < tablaConImagenes[fila]; col++) {
            alt = soElegido() + "_" + col;
            tablaConImagenes[fila] = alt;
        }
    }*/
    // crear elemento de img para añadir las imagenes
    let x = document.createElement('img');

    for (let i = 0; i < tablaConImagenes.length; i++) {
        for (let j = 1; j < 10; j++) {
            // indicar ruta de las imagenes con los nombres del array;
            x.src = "./Z_imagenes_ENTREGAR/" + tablaConImagenes[i];
            x.alt = tablaConImagenes[i];
            let id = document.getElementById("img" + j);
            id.appendChild(x);
        }
    }


}

document.addEventListener('DOMContentLoaded', () => {
    cargarImagenes();
});