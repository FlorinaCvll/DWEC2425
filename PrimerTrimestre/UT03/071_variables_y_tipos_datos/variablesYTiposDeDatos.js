function tipoDatos() {

    // Tipos de datos primitivos

    console.log("Undefined: " + typeof nada);
    console.log("Boolean: " + typeof true);
    console.log("Number: " + typeof 1);
    console.log("String: " + typeof "cadena texto");
    console.log("BigInt: " + typeof 1n);
    console.log("Symbol: " + typeof Symbol("valorUnico"));
    console.log("Null: " + typeof null);


    // Tipos de datos no primitivos

    console.log("Object: " + typeof {});
    console.log("Array: " + typeof []);
    console.log("Map: " + typeof new Map());
    console.log("Set: " + typeof new Set());
    console.log("WeakMap: " + typeof new WeakMap());
    console.log("WeakSet: " + typeof new WeakSet());
    console.log("Date: " + typeof new Date());
    console.log("Function: " + typeof function () {
    });
}


window.onload = function () {
    document.getElementById("tipoDatos").addEventListener("click", tipoDatos);
}