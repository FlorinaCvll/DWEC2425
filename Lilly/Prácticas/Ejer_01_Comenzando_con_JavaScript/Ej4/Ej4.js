function compararValores() {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let operadoresComparacion = document.getElementById("operadoresComparacion").value;
    let resultado = "";
    console.log(operadoresComparacion);
    console.log(valor1);
    console.log(valor2);
    switch (operadoresComparacion) {
        case "==":
            resultado = valor1 == valor2;
            break;
        case "===":
            resultado = valor1 === valor2;
            break;
        case "!=":
            resultado = valor1 != valor2;
            break;
        case "!==":
            resultado = valor1 !== valor2;
            break;
        case "<":
            resultado = valor1 < valor2;
            break;
        case "<=":
            resultado = valor1 <= valor2;
            break;
        case ">":
            resultado = valor1 > valor2;
            break;
        case ">=":
            resultado = valor1 >= valor2;
            break;
    }
    document.getElementById("resultado").textContent = resultado;
}
