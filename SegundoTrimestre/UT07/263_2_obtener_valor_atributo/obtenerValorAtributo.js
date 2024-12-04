function obtenerValorAtributo() {
    let lis = document.querySelectorAll("li");
    for (const li of lis) {
        console.log(li.getAttribute("class"));
    }
    console.log("----------------------------------");
    let arrayLis = [...lis];
    arrayLis.forEach(element => {
        console.log(element.getAttribute("class"));
    });
}

window.onload = function () {
    document.getElementById("valorAtributo").addEventListener("click", obtenerValorAtributo);
}