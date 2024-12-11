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
    let cadena = prompt("Introduzca la cadena (D y z): ");
    let expEmpiezaYTermina = /^D.+z$/;
    if (expEmpiezaYTermina.test(cadena)) {
        console.log("La cadena " + cadena + " si cumple D y z");
    } else {
        console.log("La cadena " + cadena + " NO CUMPLE D y z");
    }
}

function expresionCompleja() {
    let expresionCom = /^[A-Z][a-z]{2,}[0-9]*[a-z]+$/;
    console.log(expresionCom);
    const valroesTest = ["Daa44a", "Daa4aa", "Daaa3A", "Daa4aa", "Daaa", "daa44a", "daa33a", "Da44a", "Daa44"];
    for (testeo of valroesTest) {
        if (expresionCom.test(testeo)) {
            console.log("La cadena " + testeo + " si cumple");
        } else {
            console.log("La cadena " + testeo + " NO CUMPLE!!");
        }
    }
}

window.onload = function () {
    document.getElementById("validarDNI").addEventListener("click", validarDni);
    document.getElementById("existeCaracter").addEventListener("click", existeCaracter);
    document.getElementById("empiezaYTermina").addEventListener("click", empiezaYtermina);
    document.getElementById("conMayus").addEventListener("click", expresionCompleja);
};
