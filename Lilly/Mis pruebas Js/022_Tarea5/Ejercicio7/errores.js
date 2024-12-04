function sumasAleatorias() {
    let a = Math.floor(Math.random() * (100 - 1) + 1);
    let b = Math.floor(Math.random() * (100 - 1) + 1);

    let c = prompt("Dime la suma de:" + a + " + " + b);

    if (Number(c) == (a + b)) {
        console.log("Operacion correcta");
    } else {
        let error = new Error("Operacion Incorrecta");
        throw error;
    }
}

function tryCatch() {
    let e = "hola";
    try {
        let numero = Number(e);

        if (!isNaN(numero)) {
            console.log(e + "es un número");
        } else {
            throw new Error(e + " no es un número");
        }
    } catch (error) {
        console.error(error.message);
    }
}

window.onload = function () {
    document.getElementById("sumasAleatorias").addEventListener("click", sumasAleatorias);
    document.getElementById("tryCatch").addEventListener("click", tryCatch);
}