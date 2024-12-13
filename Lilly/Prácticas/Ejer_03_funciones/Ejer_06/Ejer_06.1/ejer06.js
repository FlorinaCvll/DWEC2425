function sumaDigitosRecursiva(numero) {
    if (numero < 10) {
        return numero;
    } else {
        return numero % 10 + sumaDigitosRecursiva(Math.floor(numero / 10));
    }
}

function calcularSumaDigitos() {
    const inputNumber = document.getElementById("inputNumber");
    const numero = parseInt(inputNumber.value);

    if (isNaN(numero) || numero < 0) {
        alert("Ingrese un número entero no negativo");
        return;
    }

    const resultadoSumaDigitos = sumaDigitosRecursiva(numero);

    const resultElement = document.getElementById("result");
    resultElement.textContent = `La suma de los dígitos de ${numero} es: ${resultadoSumaDigitos}`;
}

  