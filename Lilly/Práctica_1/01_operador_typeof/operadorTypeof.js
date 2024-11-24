function inicializaTypeof() {
    let valorStringPrimitivo = "Hola";
    let valorStringObjeto = new String("Hola");
    let valorNumber = 10;
    let valorBoolean = true;
    let valorObjeto = null;
    let valorUndefined = typeof nada;
    let valorFuncion = typeof function () {
    };

    let cadenaMostrar =
        "valorStringPrimitivo ----> " + valorStringPrimitivo + "\n" +
        "valorStringObjeto ------> " + valorStringObjeto + "\n" +
        "valorNumber -----------> " + valorNumber + "\n" +
        "valorBoolean -----------> " + valorBoolean + "\n" +
        "valorStringPrimitivo ----> " + valorStringPrimitivo + "\n" +
        "valorObjeto -------------> " + valorObjeto + "\n" +
        "valorFuncion ------------> " + valorFuncion + "\n";

    alert(cadenaMostrar);
}

window.onload = function () {
    inicializaTypeof();
}