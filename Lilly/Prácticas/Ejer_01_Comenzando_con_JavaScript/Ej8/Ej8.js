function modificarCadena() {
    let cadenaEntrada = document.getElementById("texto").value;
    let caracter1 = document.getElementById("caracter1").value;
    let caracter2 = document.getElementById("caracter2").value;
    const resultado = document.getElementById("resultadoCadenaTexto");
    let resultado2 = cadenaEntrada.replaceAll(caracter1, caracter2);
    //cadenaEntrada.replace

    console.log(cadenaEntrada.replaceAll(caracter1, caracter2));
    resultado.innerHTML = resultado2;
}