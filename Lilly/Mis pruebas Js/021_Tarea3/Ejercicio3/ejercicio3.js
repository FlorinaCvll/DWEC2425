//3.1

function palabra(palabra) {

    let x = 9;
    console.log("Primera antes del bucle: ", x);


    for (let z = 1; z <= 3; z++) {
        x = 4;
        console.log("Segunda en el bucle:", x);
    }

    x = 6;
    console.log("Tercera fuera del bucle y de la funcion: ", x);
    console.log("***************************************************");

}

//3.2 
function crear() {
    let array = new Array(10);
    console.log("Array creado: ", array);
    return array;
}

function rellenar(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 100);
    }
    console.log("Array rellenado:", array);

}


function ordenar(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[i] > array[j + 1]) {
                let a = array[j];
                array[j] = array[j + 1];
                array[j + 1] = a;
            }
        }
    }
    console.log("Ordenado: ", array);
}

function desordenado(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log("Desordenado: ", array);
}

function manejarArray() {
    let principal = crear();
    rellenar(principal);
    ordenar(principal);
    desordenado(principal);
}

window.onload = function () {
    document.getElementById("array").addEventListener("click", manejarArray);
    document.getElementById("palabra").addEventListener("click", palabra);
}