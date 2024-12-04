function cargarHijos() {
    let parrafo1 = document.getElementById("parrafo1");
    for (let hijo of parrafo1.childNodes) {
        console.log(
            `Texto: "${hijo.nodeValue}"` +
            `Tipo de nodo: "${hijo.nodeType}"`, `Nombre: ${hijo.nodeName}`
        );
    }
}

function cargarHijosElementos() {
    let parrafo1 = document.getElementById("parrafo1");
    for (let hijo of parrafo1.children) {
        console.log(`Texto: "${hijo.nodeValue}"` + `Tipo de nodo: ${hijo.nodeType}, ${hijo.nodeName}`);
    }
}

window.onload = function () {
    document.getElementById("cargarHijos").addEventListener("click", cargarHijos);
    document.getElementById("cargarHijoselemento").addEventListener("click", cargarHijosElementos);
}