function operaciones(valor1, valor2, operacionCall) {

    return operacionCall(valor1, valor2);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("No se puede dividr por cero");
    }
}

function ejectuar() {
    resultados();
}

function resultados() {
    const mensaje1 = document.getElementById("valor1");
    let valor1 = mensaje1.value;
    const valor1F = parseFloat(valor1);
    const mensaje2 = document.getElementById("valor2");
    let valor2 = mensaje2.value;
    const valor2F = parseFloat(valor2);

    const suma = operaciones(valor1F, valor2F, sumar);
    const resta = operaciones(valor1F, valor2F, restar);
    const multiplica = operaciones(valor1F, valor2F, multiplicar);
    const divide = operaciones(valor1F, valor2F, dividir);
    document.getElementById("resultado1").textContent = "El resultado de la Suma es: " + suma;
    document.getElementById("resultado2").textContent = "El resultado de la Resta es: " + resta;
    document.getElementById("resultado3").textContent = "El resultado de la Multiplicación es: " + multiplica;
    document.getElementById("resultado4").textContent = "El resultado de la División es: " + divide;


}

window.onload = function () {
    document.getElementById("start").addEventListener("click", ejectuar);
};
