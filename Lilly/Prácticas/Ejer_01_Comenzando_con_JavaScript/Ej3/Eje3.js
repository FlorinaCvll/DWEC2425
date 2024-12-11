function seleccioarValor() {
    let valor = document.getElementById("seleccioarValor").value;
    let variable = true;
    if (valor == "undefined" || valor == "null" || valor == "" || valor == 0 || valor == "false" || valor == "NaN") {
        variable = false;

    } else {
        variable = true;
    }
    document.getElementById("resultado").textContent = variable;
}


   