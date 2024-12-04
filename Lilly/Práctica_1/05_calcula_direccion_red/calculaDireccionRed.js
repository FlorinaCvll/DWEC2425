function convertirEnBinario(idValor) {
    // transformamos valor decimal a binario con toString(2), convierte a entero
    // para que lo acepte toString
    let valorBinario = parseInt(document.getElementById(idValor).value).toString(2);
    // Recupera la longitud del binario
    let longitud = valorBinario.length;
    // Resta a 8 si fuera menor que 8 para rellenar con ceros    
    let cerosQueFaltan = 8 - parseInt(longitud);
    // Añade con ceros para que quede bonito
    let valorBinarioConCeros = valorBinario.padStart(8, "0");
    // Iguala el valor al elemento id donde se calcula
    document.getElementById(idValor + "Binario").value = valorBinarioConCeros;
    return valorBinario;
}

function convertirDecimalesABinario() {
    convertirEnBinario("ipUno");
    convertirEnBinario("ipDos");
    convertirEnBinario("ipTres");
    convertirEnBinario("ipCuatro");
    convertirEnBinario("mascaraUno");
    convertirEnBinario("mascaraDos");
    convertirEnBinario("mascaraTres");
    convertirEnBinario("mascaraCuatro");
    convertirEnBinario("redUno");
    convertirEnBinario("redDos");
    convertirEnBinario("redTres");
    convertirEnBinario("redCuatro");
}

function calcularRed(ip, mascara, destino) {
    let ipRecuperado = document.getElementById(ip).value;
    let mascaraRecuperado = document.getElementById(mascara).value;
    let red = ipRecuperado & mascaraRecuperado;
    document.getElementById(destino).value = red;
    //console.log(red);
}

function calcularDireccionesDeRed() {
    calcularRed("ipUno", "mascaraUno", "redUno");
    calcularRed("ipDos", "mascaraDos", "redDos");
    calcularRed("ipTres", "mascaraTres", "redTres");
    calcularRed("ipCuatro", "mascaraCuatro", "redCuatro");
}

window.onload = function () {
    convertirDecimalesABinario();
    calcularDireccionesDeRed();
}