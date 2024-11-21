let primerOperando = '';
let segundoOperando = '';
let operacionActual = null;
let resetear = false;

const mostrar = document.getElementById('mostrar');

function agnadirNum(num) {
    if (resetear) {
        mostrar.textContent = '';
        resetear = false;
    }
    if (mostrar.textContent === '0') {
        mostrar.textContent = num; // Para reemplazar el 0 inicial con el primer número
    } else {
        mostrar.textContent += num;
    }
}

function elegirOperacion(operacion) {
    if (operacionActual !== null) calcular();
    primerOperando = mostrar.textContent;
    operacionActual = operacion;
    resetear = true;
}

function calcular() {
    if (operacionActual === null || resetear) return; // Verificar si hay operación pendiente
    segundoOperando = mostrar.textContent;
    mostrar.textContent = operar(operacionActual, primerOperando, segundoOperando);
    operacionActual = null;
    resetear = true;
}

function operar(operacion, a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operacion) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) return 'Error';  // No dividir por cero
            return a / b;
        default:
            return null;
    }
}

function clearDisplay() {
    mostrar.textContent = '0';
    primerOperando = '';
    segundoOperando = '';
    operacionActual = null;
    resetear = false;
}
