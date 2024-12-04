function calculaOperacion(operandoUno, operador, operandoDos) {
    let resultado = "";
    switch (operador) {
        case "+":
            resultado = parseFloat(operandoUno) + parseFloat(operandoDos);
            break;
        case "-":
            resultado = parseFloat(operandoUno) - parseFloat(operandoDos);
            break;
        case "*":
            resultado = parseFloat(operandoUno) * parseFloat(operandoDos);
            break;
        case "/":
            resultado = parseFloat(operandoUno) / parseFloat(operandoDos);
            break;
        case "%":
            resultado = parseFloat(operandoUno) % parseFloat(operandoDos);
            break;
        default:
            break;
    }
    return resultado;
}

function realizarOperacion(operandoPrioritarioUno,
                           operadorPrioritario,
                           operandoPrioritarioDos,
                           operandoTres,
                           operadorIntermedio,
                           resultadoIntermedio) {

    if ((operandoPrioritarioUno == "") && (operadorPrioritario == "") && (operandoPrioritarioDos == "")) {
        let result = calculaOperacion(operandoTres, operadorIntermedio, resultadoIntermedio);
        console.log(operandoTres + " " + operadorIntermedio + " " + resultadoIntermedio + " = " + result);
    } else {
        let resultadoPrioritario = calculaOperacion(operandoPrioritarioUno, operadorPrioritario, operandoPrioritarioDos);
        console.log("(" + operandoPrioritarioUno + " " + operadorPrioritario + " " + operandoPrioritarioDos
            + ") = " + resultadoPrioritario);
        // Comprueba si la operación prioritaria se realiza antes o después
        if (resultadoIntermedio == "prioritarioDespues") {
            let resultadoFinal = calculaOperacion(operandoTres, operadorIntermedio, resultadoPrioritario);
            console.log(operandoTres + " " + operadorIntermedio + " " + resultadoPrioritario + " = " +
                resultadoFinal);
        } else {
            let resultadoFinal = calculaOperacion(resultadoPrioritario, operadorIntermedio, operandoTres);
            console.log(resultadoPrioritario + " " + operadorIntermedio + " " + operandoTres + " = " +
                resultadoFinal);
        }


    }
}

function separarComponentes() {
    let cadenaOperacion = document.getElementById("valorEntrada").value;
    let operandoPrioritarioUno = "", operandoPrioritarioDos = "", operandoTres = "",
        resultadoIntermedio = "";
    let operadorPrioritario = "", operadorIntermedio = "";
    let caracter = "";

    for (let i = 0; i < cadenaOperacion.length; i++) {
        caracter = cadenaOperacion.charAt(i);

        if (caracter == "(") {
            i++;
            while (Number.isInteger(parseInt(cadenaOperacion.charAt(i)))) {
                operandoPrioritarioUno = operandoPrioritarioUno + cadenaOperacion.charAt(i);
                i++;
            }
            operadorPrioritario = cadenaOperacion.charAt(i);
            i++;
            while (Number.isInteger(parseInt(cadenaOperacion.charAt(i)))) {
                operandoPrioritarioDos = operandoPrioritarioDos + cadenaOperacion.charAt(i);
                i++;
            }
            i++
        } else if (Number.isInteger(parseInt(caracter))) {
            if (operandoTres == "") {
                if (i == 0) {
                    resultadoIntermedio = "prioritarioDespues";
                }
                while (Number.isInteger(parseInt(cadenaOperacion.charAt(i)))) {
                    operandoTres = operandoTres + cadenaOperacion.charAt(i);
                    i++;
                }
            } else {
                resultadoIntermedio = "";
                while (Number.isInteger(parseInt(cadenaOperacion.charAt(i)))) {
                    resultadoIntermedio = resultadoIntermedio + cadenaOperacion.charAt(i);
                    i++;
                }
            }
        }

        caracter = cadenaOperacion.charAt(i);
        if ((caracter == "+") || (caracter == "-") || (caracter == "*") || (caracter == "/") || (caracter == "%")) {
            operadorIntermedio = cadenaOperacion.charAt(i);
        }
    }
    console.log("OPERANDO prioritario uno ----> " + operandoPrioritarioUno);
    console.log("+-*/% Operador prioritario --> " + operadorPrioritario);
    console.log("OPERANDO prioritario dos ----> " + operandoPrioritarioDos);
    console.log("OPERANDO tres ---------------> " + operandoTres);
    console.log("+-*/% Operador Intermedio ---> " + operadorIntermedio);
    console.log("RESULTADO Intermedio --------> " + resultadoIntermedio);

    realizarOperacion(operandoPrioritarioUno, operadorPrioritario, operandoPrioritarioDos,
        operandoTres, operadorIntermedio, resultadoIntermedio);
}

window.onload = function () {
    separarComponentes();
}