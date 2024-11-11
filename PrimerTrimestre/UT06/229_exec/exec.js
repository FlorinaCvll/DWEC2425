function ejecuarExec() {
    let texto = "Este es un texto de prueba";
    //let expresion = /\w+/;
    // let expresion = /Este/;
    let expresion = /(\w+)/;
    let res = expresion.exec(texto);
    console.log(res);
    console.log(res[0]);
}

window.onload = function () {
    document.getElementById("ejecutarExec").addEventListener("click", ejecuarExec);
}