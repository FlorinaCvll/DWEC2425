function construirArray() {
    let array = [];

    let numeroAleatorio = 0;
    for (let index = 0; index < 10; index++) {
        do {
            numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        } while (array.includes(numeroAleatorio));
        array.push(numeroAleatorio);
    }
    console.log(array);
    document.getElementById("resultado1").textContent =
        array;
    return array;
}

function ordenarArray(construirArray) {
    array = [];
    array = construirArray;
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log(array);
    document.getElementById("resultado2").textContent = array;

    return array;
}

function desordenarArray(ordenarArray) {
    let arrayDesordenado = [];
    let array = ordenarArray;
    let resultado = [];

    let numeroAleatorio = 0;
    for (let index = 0; index < 10; index++) {
        do {
            numeroAleatorio = Math.floor(Math.random() * 10);
        } while (arrayDesordenado.includes(numeroAleatorio));
        arrayDesordenado.push(numeroAleatorio);
    }
    for (let index = 0; index < array.length; index++) {
        // resultado.push(array[arrayDesordenado[index]]);
        resultado.push(array[arrayDesordenado[index]]);
    }

    document.getElementById("resultado3").textContent =
        resultado;
    return resultado;
}

function start() {
    let arrayAleatorio = construirArray();
    let arrayOrdenado = ordenarArray(arrayAleatorio);
    let arrayDesordenado = desordenarArray(arrayOrdenado);
}

window.onload = function () {
    document.getElementById("start").addEventListener("click", start);
};
