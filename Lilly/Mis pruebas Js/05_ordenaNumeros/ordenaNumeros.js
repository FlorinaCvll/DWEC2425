function clicame() {
    let contador = 0;
    let array = [];
    do {
        let pregunta = prompt("¿Dime un número?");
        array.push(pregunta);
        contador++;
    } while (contador != 10);

    for (let h of array) {
        console.log(h);
    }
}

window.onload = function () {
    document.getElementById("clicame").addEventListener("click", clicame);
}