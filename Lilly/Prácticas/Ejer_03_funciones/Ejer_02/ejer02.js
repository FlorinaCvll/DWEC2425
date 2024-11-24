let contador = 0;
let base = 0;
let altura = 0;

function solicitarDatos() {
    if (contador == 0) {
        do {
            base = prompt("Ingrese la base del rectángulo");
            altura = prompt("Ingrese la altura del rectángulo");
            contador++;
        } while (base == 0 || altura == 0 || base == altura);
    }
}

function funcionTradicional() {
    solicitarDatos();
    console.log(base);
    console.log(altura);
    let area = base * altura;
    document.getElementById("resultado2").textContent =
        "Resultado con función Tradicional " + area;
}

const funcionAnonima = function () {
    solicitarDatos();
    console.log(base);
    console.log(altura);
    let area = base * altura;
    document.getElementById("resultado2").textContent =
        "Resultado con función Anonima " + area;
};
const funcionFlecha = () => {
    solicitarDatos();
    console.log(base);
    console.log(altura);
    let area = base * altura;
    document.getElementById("resultado2").textContent =
        "Resultado con Función Flecha " + area;
};
window.onload = function () {
    document
        .getElementById("variable1")
        .addEventListener("click", funcionTradicional);
    document
        .getElementById("variable2")
        .addEventListener("click", funcionAnonima);
    document.getElementById("variable3").addEventListener("click", funcionFlecha);
};
