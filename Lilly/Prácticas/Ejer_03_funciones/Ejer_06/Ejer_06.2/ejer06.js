function calcularFactorialRecursivo(numero) {
    if (numero <= 1) {
        return 1;
    } else {
        return numero * calcularFactorialRecursivo(numero - 1);
    }
}

function calcularFactorial() {
    const inputNumber = document.getElementById("inputNumber");
    const numero = parseInt(inputNumber.value);

    if (isNaN(numero) || numero < 0) {
        alert("Ingrese un número entero no negativo");
        return;
    }

    const resultado = calcularFactorialRecursivo(numero);

    const resultElement = document.getElementById("result");
    resultElement.textContent = `El factorial de ${numero} es: ${resultado}`;
}
  