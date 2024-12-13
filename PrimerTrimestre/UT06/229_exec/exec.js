function ejecuarExec() {
    let texto = "Este es un texto  Este de prueba";
    //let expresion = /\w+/;  // w+ busca una palabra
    // let expresion = /Este/; // un → busca la palabra un
    //let expresion = /(\w+)(\s)/; // busca palabra seguida de espacio
    let expresion = /(\s)(Este)/;
    let res = expresion.exec(texto);
    console.log(res); // Muestra el array completo
    console.log(res[0]); // 1ª coincidencia, que es la completa
}

window.onload = function () {
    document.getElementById("ejecutarExec").addEventListener("click", ejecuarExec);
}