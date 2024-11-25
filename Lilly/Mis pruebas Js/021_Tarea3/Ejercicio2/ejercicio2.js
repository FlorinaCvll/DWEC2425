function datos() {
    base = prompt("Tamaño de la base del rectangulo: ");
    altura = prompt("Tamaño de la altura del rectangulo: ");
}

function tradicional() {
    datos();
    const area = (base * altura);

    document.getElementById("resultado").textContent = "El area del rectangulo segun la funcion tradicional es: " + area;
}

function anonima() {

    const anonima = function () {
        const area = (base * altura);

        document.getElementById("resultado").textContent = "El area del rectangulo segun la funcion anonima es: " + area;

    }
    anonima();

}

function flecha() {
    const flecha = () => {
        const area = (base * altura);

        document.getElementById("resultado").textContent = "El area del rectangulo segun la funcion flecha es: " + area;

    }
    flecha();
}

window.onload = function () {
    document.getElementById("tradicional").addEventListener("click", tradicional);
    document.getElementById("anonima").addEventListener("click", anonima);
    document.getElementById("flecha").addEventListener("click", flecha);

}