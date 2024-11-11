function rellenarCuadrado() {
    const ids = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];
    const valores = generarValores(1, 9);

    ids.forEach((id, index) => {
        const div = document.getElementById(id);
        div.textContent = valores[index];
    });

}

function generarValores(minimo, maximo) {
    const numeros = [];
    const tam = 9;
    while (numeros.length < tam) {
        let num = generarNumRandom(minimo, maximo);
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }
    return numeros;
}

function generarNumRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

window.onload = function () {
    document.getElementById("enviar").addEventListener("click", rellenarCuadrado);
}