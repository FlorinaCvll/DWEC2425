function creaNuevoConMap() {
    const nota = [5, 6, , , , 9, , 8, , 9, , 7, 8];
    const doble = nota.map(x => 2 * x);
    const dble = nota.map(function (x) {
        return 2 * x;
    })
    console.log(nota);
    console.log(doble);
}


window.onload = function () {
    document.getElementById("creaNuevoConMap").addEventListener("click", creaNuevoConMap);
}