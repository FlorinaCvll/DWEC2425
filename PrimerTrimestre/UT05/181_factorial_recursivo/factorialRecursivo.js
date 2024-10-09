let cadena = "";

function calcularFactorial() {
    let valorCalcular = prompt("Introduce el número a calcular");

    let valorCalculado = factorRecursivo(valorCalcular);

    alert("El factorial de " + valorCalcular + " es " + valorCalculado);
    alert(cadena);
}

function factorRecursivo(n) {
    if (n <= 1) {
        cadena = cadena + n + "\n";
        return 1;
    } else {
        cadena = cadena + n + "\n";
        return n * factorRecursivo(n - 1);
    }
}

window.onload = function () {
    document.getElementById("factorialRecursivo").addEventListener("click", calcularFactorial)
}