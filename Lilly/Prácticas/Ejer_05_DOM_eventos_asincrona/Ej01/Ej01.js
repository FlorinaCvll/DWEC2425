function tiposNodos() {
    document.getElementById("elementNode").textContent = "Document Element_Node: " + document.ELEMENT_NODE;
    document.getElementById("atributeNode").textContent = "Document Atribute_Node: " + document.ATTRIBUTE_NODE;
    document.getElementById("textNode").textContent = "Document Text_Node: " + document.TEXT_NODE;
    document.getElementById("cdataSectionNode").textContent = "Document CDATa_Section_Node: " + document.CDATA_SECTION_NODE;
    document.getElementById("entityNode").textContent = "Document Entity_Node: " + document.ENTITY_NODE;
    document.getElementById("processingInstructionNode").textContent = "Document Processing_InstructionNode: " + document.PROCESSING_INSTRUCTION_NODE;
    document.getElementById("comentNode").textContent = "Document Coment_Node: " + document.COMMENT_NODE;
    document.getElementById("documentNode").textContent = "Document Document_Node: " + document.DOCUMENT_NODE;
    document.getElementById("documentTypeNode").textContent = "Document Document_Type_Node: " + document.DOCUMENT_TYPE_NODE;
    document.getElementById("documentFragmentNode").textContent = "Document Document_Fragment_Node: " + document.DOCUMENT_FRAGMENT_NODE;
    document.getElementById("notationNode").textContent = "Document Notation_Node: " + document.NOTATION_NODE;
}

window.onload = function () {
    tiposNodos();
}