var valores = [];
var array2 = [];
var array3 = [];

function enviarNumeros(event) {
    const operacion = (document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    const numeroInput = document.getElementById("numero");


    event.preventDefault();
    let cadena = operacion.length;
    console.log(cadena);

    for (let index = 0; index < cadena; index++) {
        valores.push(operacion.charCodeAt(index));
    }
    console.log(valores);
    let texto = '';

    for (let index = 0; index < valores.length; index++) {
        texto += String.fromCharCode(valores[index]);
        array2.push(String.fromCharCode(valores[index]));
    }
    console.log(array2);
    //console.log(texto);
    let resultFinal = texto;
    //console.log("El resultado es " + resultFinal);
    let contador = 0;
    for (let index = 0; index < array2.length; index++) {
        if (array2[index] == '1' || array2[index] == '2' || array2[index] == '3' ||
            array2[index] == '4' || array2[index] == '5' ||
            array2[index] == '6' || array2[index] == '7' || array2[index] == '8' ||
            array2[index] == '9') {
            array3.push(parseFloat(array2[index]));
        } else {
            array3.push(array2[index]);
        }
        contador++;
    }

    console.log(array3);
    console.log("Esto es el contador " + contador);
    let resultadoArray3 = 0;
    let operador = '+';

    for (let index = 0; index < contador; index++) {
    }
    let variableindex = array3;
    console.log("Esto es la variable" + variableindex);
}
        
    
   