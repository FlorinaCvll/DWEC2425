function boton() {
    document.getElementById("n1").textContent = "Elemento ---" + document.ELEMENT_NODE;
    document.getElementById("n2").textContent = "Atributo ---" + document.ATTRIBUTE_NODE;
    document.getElementById("n3").textContent = "Texto ---" + document.TEXT_NODE;
    document.getElementById("n4").textContent = "Apartadado CDATA ---" + document.CDATA_SECTION_NODE;
    document.getElementById("n5").textContent = "Refrencia a entidad ---" + document.ENTITY_REFERENCE_NODE;
    document.getElementById("n6").textContent = "Entidad ---" + document.ENTITY_NODE;
    document.getElementById("n7").textContent = "Instrucción de procesado ---" + document.PROCESSING_INSTRUCTION_NODE;
    document.getElementById("n8").textContent = "Comentarios ---" + document.COMMENT_NODE;
}

window.onload = function () {
    document.getElementById("boton").addEventListener("click", boton);
}