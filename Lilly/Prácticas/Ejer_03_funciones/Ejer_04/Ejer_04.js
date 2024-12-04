function generarSigno(signo = "") {
    let signos = ["+", "-", "*", "/"];
    if (signo == "") {
        let posicionAleatoria = Math.floor(Math.random() * 4);
        signo = signos[posicionAleatoria];
    }
    return signo;
}

function parametrosUsuario(parametro1 = "") {
    if (parametro1 == "") {
        parametro1 = Math.floor(Math.random() * 100) + 1;
    }

    return parametro1;
}

function solicitarDatos() {
    let parametro1 = parametrosUsuario(prompt("Introduzca el primer caracter"));
    let signo = generarSigno(prompt("Introduzca un sigo: +, - , / o *"));
    let parametro2 = parametrosUsuario(prompt("Introduzca otro valor"));
    parametro1 = parseInt(parametro1);
    parametro2 = parseInt(parametro2);

    let resultado = 0;
    switch (signo) {
        case "+":
            resultado = parametro1 + parametro2;
            break;
        case "-":
            resultado = parametro1 - parametro2;
            break;
        case "*":
            resultado = parametro1 * parametro2;
            break;
        case "/":
            do {
                parametro2 = parametrosUsuario(
                    prompt("Introduzca otro valor que no sea 0")
                );
            } while (parametro2 == 0 && signo == "/");
            resultado = parametro1 / parametro2;
            break;
    }
    let operacion = parametro1 + signo + parametro2;
    console.log(operacion);
    console.log(resultado);
    let resultadoUsuario = prompt("Resultado de " + operacion + " = ");
    document.getElementById("resultado").textContent = resultado;
    document.getElementById("operacion").textContent = operacion;
    if (resultadoUsuario == resultado) {
        document.getElementById("felicitacion").textContent = "Has acertado :)";
        document.getElementById("resultadoUser").textContent = "Has puesto..." + resultadoUsuario;
    } else {
        document.getElementById("resultadoUser").textContent = "Has puesto..." + resultadoUsuario;
        document.getElementById("felicitacion").textContent = "No has acertado :(";

    }
}

window.onload = function () {
    document.getElementById("start").addEventListener("click", solicitarDatos);
};
