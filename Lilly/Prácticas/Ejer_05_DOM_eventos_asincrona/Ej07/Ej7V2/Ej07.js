var aperturaPrograma = 0;
var arrayResultado = [];

function generarSuma() {
    let numero1 = Math.floor(Math.random() * 10) + 1;
    let numero2 = Math.floor(Math.random() * 10) + 1;
    console.log(numero1);
    console.log(numero2);
    //sumas.push(numero1, numero2);
    let valor1 = document.getElementById("suma1");
    let valor2 = document.getElementById("suma2");
    valor1.textContent = numero1;
    valor2.textContent = numero2;
    let resultados = numero1 + numero2;
    arrayResultado.push(resultados);
}

function comprobarSumas() {
    try {
        let resultadoUsuario = document.getElementById("resultado").value;
        resultadoUsuario = parseInt(resultadoUsuario);
        console.log("Resultado Usuario", resultadoUsuario);
        let correcto = arrayResultado[arrayResultado.length - 1];
        console.log("Array", correcto);
        console.log("Resultado", resultado);
        if (correcto == resultadoUsuario) {
            alert("Correcto");

        } else {
            throw new Error("Respuesta incorrecta. Inténtalo de nuevo.");
        }
    } catch (error) {
        alert(error.message);
    }

    document.getElementById("resultado").value = "";
    generarSuma();
}

window.onload = function () {
    document.getElementById("enviar").addEventListener("click", comprobarSumas);
    if (aperturaPrograma == 0) {
        generarSuma();
        aperturaPrograma++;
    }
};
