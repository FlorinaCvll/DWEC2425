function valores() {
    let valor1 = prompt("Escribe una palabra:");
    let valor2 = prompt("Escribe otra palabra:");

    let val = valor1.localeCompare(valor2);

    if (val == 1) {
        alert("La palabra ganadora es: " + valor1);
    } else if (val == 0) {
        alert("Las palabras son iguales");
    } else if (val == -1) {
        alert("La palabra ganadora es: " + valor2);
    }
}

window.onload = function () {
    document.getElementById("valores").addEventListener("click", valores);
}