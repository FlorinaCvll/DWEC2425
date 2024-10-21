function calcularFactorial() {
    let valorCalcular = prompt("Introduce el número a calcular");

    let valorCalculado = factorialIterativo(valorCalcular);

    alert("El factorial de " + valorCalcular + " es: " + valorCalculado);
}

function factorialIterativo(n) {
    let res = 1;
    while (n > 1) {
        res *= n;
        n--;
    }
    return res;
}

window.onload = function () {
    document.getElementById("factorialIterativo").addEventListener("click", calcularFactorial);
}