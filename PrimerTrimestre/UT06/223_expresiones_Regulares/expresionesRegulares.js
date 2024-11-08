function validarDni() {
    let dni = prompt("Introduce tu DNI");
    let expDNI = /[klxyz0-9][0-9]{7}[A-Z]/;
    /*
    * //Explicación de la expresión regular. Se ponen al principio y al final
    * [klxyz0-9] → permite las letras klxyz o los números del 0 al 9
    * [0-9]{7} → permite 7 números del 0 al 9
    * [A-Z] → permite una letra mayúscula del alfabeto
    * */
    console.log(expDNI);
    if (expDNI.test(dni)) {
        console.log("El DNI: " + dni + " es correcto");
    } else {
        console.log("El DNI: " + dni + " es incorrecto");
    }
}

function existeCaracter() {
    let cadena = prompt("Introduce una cadena ");
    let caracter = prompt("Introduce un cáracter: ");
    let expCaracter = new RegExp(caracter, "i");
    console.log(expCaracter);
    if (expCaracter.test(cadena)) {
        console.log("En " + cadena + " existe el caracter ---> " + caracter);
    } else {
        console.log("En " + cadena + " NO EXISTE el caracter");
    }
}

function empiezaYtermina() {

}

function expresionCompleja() {

}

window.onload = function () {
    document.getElementById("validarDNI").addEventListener("click", validarDni);
    document.getElementById("existeCaracter").addEventListener("click", existeCaracter);
    document.getElementById("empiezaYTermina").addEventListener("click", empiezaYtermina);
    document.getElementById("conMayus").addEventListener("click", expresionCompleja);
};
