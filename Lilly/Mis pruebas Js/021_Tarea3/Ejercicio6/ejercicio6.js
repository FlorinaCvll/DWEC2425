// 6.1
// El problema a solucionar es , la media de el numero dado hasta llegar a 1

function problemaConRecursividad() {
    function media(num, suma = 0, cont = 0) {
        if (num === 0) {
            if (cont === 0) {
                return 0;
            }
            return suma / cont;
        } else {
            return media(num - 1, suma + num, cont + 1);
        }
    }

    let n = 5;
    let resultado = media(5);
    console.log(`La media de los numeros del 1 al ${n}: ${resultado}`);
}

// 6.2
//este es el del libro que he tomado como ejemplo
/*
function factorial(){
    function factorial2(num){
    if(num<=1){
        return 1;
    }else{
        return num*factorial2(num-1);
    }
}
console.log("El factorial  es : " + factorial2(6));

}
*/

// este es el realizado por mi tomando como ejemplo el annterior

function factorial() {
    function num(n) {
        if (n <= 0) {
            return 0;
        } else {
            return n + num(n - 1);
        }
    }

    console.log("El factorial es: " + num(6));
}


window.onload = function () {
    document.getElementById("factorial").addEventListener("click", factorial);
    document.getElementById("problemaConRecursividad").addEventListener("click", problemaConRecursividad);
}
