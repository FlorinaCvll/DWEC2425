function cargarSelectoresCss() {
    console.log("--- Seleccona los elementos de clase verdura ---");
    let verduras = document.querySelectorAll(".verdura");
    let arrayVerduras = [...verduras];
    arrayVerduras.forEach(element => {
        console.log(element.textContent);
    });
    console.log("--- Selecciona los elementos li de ul ---");
    let listadoLi = document.querySelectorAll("ul li");
    let arrayListadoLi = [...listadoLi];
    arrayListadoLi.forEach(element => {
        console.log(element.textContent);
    })
    console.log("--- Selecciona el primer Elemento li de cada lista ---");
    let primerLi = document.querySelectorAll("li:first-of-type");
    let arrayPrimerLi = [...primerLi];
    arrayPrimerLi.forEach(element => {
        console.log(element.textContent);
    })
    console.log("--- Selecciona el primer Elemento de cada lista si es verdura ---");
    let primerVerdura = document.querySelectorAll("li.verdura:first-of-type");
    let arrayPrimerVerdura = [...primerVerdura];
    arrayPrimerVerdura.forEach(element => {
        console.log(element.textContent);
    });
    console.log("--- Selecciona el atributo data-src ---");
    let todosAtributosDataSrc = document.querySelectorAll("li[data-src]");
    let arrayTodosAtributos = [...todosAtributosDataSrc];
    arrayTodosAtributos.forEach(elemnt => {
        console.log(elemnt.textContent);
    });
    console.log("--- Selecciona el atributo data-src igual a valorDos ---");
    let todosAtributosDataSrcValorDos = document.querySelectorAll("li[data-src='valorDos']");
    let arrayTodosAtributosValorDos = [...todosAtributosDataSrcValorDos];
    arrayTodosAtributosValorDos.forEach(elemnt => {
        console.log(elemnt.textContent);
    });

}

window.onload = function () {
    document.getElementById("cargarSelectoresCss").addEventListener("click", cargarSelectoresCss);
}