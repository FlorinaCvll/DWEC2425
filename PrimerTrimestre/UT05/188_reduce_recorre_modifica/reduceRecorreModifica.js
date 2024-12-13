function reduceRecorreModifica() {
    const array = [1, 2, 3, 4, 5];
    /*
    * El valor 10, sería el valor del inicio del acumulador
    * si no se pone el valor del acumulador inicial es el primer valor
    * del array
    *
    *
    * */
    let suma = array.reduce((acu, valor) => acu + valor, 0);
    console.log(array);
    console.log(suma);
}


window.onload = function () {
    document.getElementById("reduceRecorreModifica").addEventListener("click", reduceRecorreModifica);
}