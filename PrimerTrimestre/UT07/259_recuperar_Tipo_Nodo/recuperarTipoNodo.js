function cargarTipoNodo() {
    let seccion = document.getElementById("s1");
    console.log("Elemento (nodeType)--> " + seccion.nodeType);
    console.log("Nombre Elemento (nodeName)--> " + seccion.nodeName);
    console.log("Documento (nodeType)--> " + document.nodeType);
    //Comprobar lo que devuelve nodeValue
    let parrafoTexto = document.getElementById("texto");
    console.log("Node name (valor) --> " + parrafoTexto.nodeName);
    console.log("Valor del nodo --> " + parrafoTexto.firstChild.nodeValue);

}

window.onload = function () {
    document.getElementById("s1").addEventListener("click", cargarTipoNodo);

}