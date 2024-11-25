// 4.1.1
function operacionesMatematicasAleatorias() {
    const num1 = numeroAleatorio();
    const operador = operadorAleatorio();
    const num2 = numeroAleatorio();

    console.log(`Operacion matematica: ${num1} ${operador} ${num2}`);
    return {num1, operador, num2};
}

function numeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

function operadorAleatorio() {
    const oper = ['+', '-', '*', '/'];
    return oper[Math.floor(Math.random() * oper.length)];
}

// 4.1.2 // 4.1.3 // 4.1.4 // 4.1.5 // 4.1.6
function pasoDeValores() {
    let num1 = prompt("Introduzca un numero:");
    let operador = prompt("Introduzca un operador(+,-,*,/):");
    let num2 = prompt("Introduzca un numero:");

    if (num1 === "") {
        num1 = numeroAleatorio();
    }
    if (num2 === "") {
        num2 = numeroAleatorio();
    }
    if (operador === "") {
        operador = operadorAleatorio();
    }

    alert(`Operacion matematica de paso por valores: ${num1} ${operador} ${num2}`);
    return {num1, operador, num2};
}

// 4.1.7

function resultado() {
    const operacion = pasoDeValores();
    const resultadoOperacion = prompt("Introduce el resultado de la operacion:");
    const evaloper = eval(`${operacion.num1}
    ${operacion.operador}
    ${operacion.num2}`);
    if (Number(resultadoOperacion) === evaloper) {
        alert("Su respuesta es correcta");
    } else {
        alert(`Su respuesta es incorrecta . El resultado es: ${evaloper}`);
    }
}

window.onload = function () {
    document.getElementById("operacionesMatematicasAleatorias").addEventListener("click", operacionesMatematicasAleatorias);
    document.getElementById("pasoDeValores").addEventListener("click", pasoDeValores);
    document.getElementById("resultado").addEventListener("click", resultado);

}