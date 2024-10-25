function recorrerCondicion() {
    const array = [4, 9, 2, 6, 6, 7, 8, 1, 10, 3, 7];
    const arrayFiltrado = array.filter(x => x > 5);
    console.log(array);
    console.log(arrayFiltrado);
}

window.onload = function () {
    document.getElementById("recorrerCondicion").addEventListener("click", recorrerCondicion);
}
