// Callback basico
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

function procesarEntradaUsuario(callback) {
    let nombre = "María";
    callback(nombre);
}

procesarEntradaUsuario(saludar);
// Output: "Hola, María"

// Callback con setTimeout
function mostrarMensaje() {
    console.log("Este mensaje se muestra después de 2 segundos");
}

setTimeout(mostrarMensaje, 2000);
// Output (después de 2 segundos): "Este mensaje se muestra después de 2 segundos"


// Callback con AJAX
function cargarDatos(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status === 200) {
            callback(null, xhr.responseText);
        } else {
            callback(new Error(xhr.statusText));
        }
    };
    xhr.send();
}

cargarDatos("https://api.example.com/data", function (error, data) {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Datos:", data);
    }
});
// Output: "Datos: {datos de la API}" (si la solicitud es exitosa)

// Callback con Metodos de Arrays
let numeros = [1, 2, 3, 4, 5];
let cuadrados = numeros.map(function (num) {
    return num * num;
});
console.log(cuadrados); // [1, 4, 9, 16, 25]
let numerosX = [1, 2, 3, 4, 5];
let pares = numerosX.filter(function (num) {
    return num % 2 === 0;
});
console.log(pares); // [2, 4]

// Callback hell y alternativa con promesas
function funcion1(callback) {
    setTimeout(function () {
        callback("Resultado 1");
    }, 1000);
}

function funcion2(resultado1, callback) {
    setTimeout(function () {
        callback("Resultado 2 basado en " + resultado1);
    }, 1000);
}

function funcion3(resultado2, callback) {
    setTimeout(function () {
        callback("Resultado 3 basado en " + resultado2);
    }, 1000);
}

funcion1(function (resultado1) {
    funcion2(resultado1, function (resultado2) {
        funcion3(resultado2, function (resultado3) {
            console.log(resultado3);
            // Output (después de 3 segundos): "Resultado 3 basado en Resultado 2 basado en Resultado 1"
        });
    });
});

// Alternativa con promesas
function funcion1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resultado 1");
        }, 1000);
    });
}

function funcion2(resultado1) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resultado 2 basado en " + resultado1);
        }, 1000);
    });
}

function funcion3(resultado2) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Resultado 3 basado en " + resultado2);
        }, 1000);
    });
}

funcion1()
    .then(resultado1 => funcion2(resultado1))
    .then(resultado2 => funcion3(resultado2))
    .then(resultado3 => {
        console.log(resultado3);
        // Output (después de 3 segundos): "Resultado 3 basado en Resultado 2 basado en Resultado 1"
    })
    .catch(error => {
        console.error("Error:", error);
    });

