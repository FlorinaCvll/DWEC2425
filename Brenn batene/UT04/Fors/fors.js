let numeros = [10, 20, 30];

// Bucle for: usando el índice
for (let i = 0; i < numeros.length; i++) {
    console.log(`Número en índice ${i}: ${numeros[i]}`);
}

// Bucle for...in: iterando propiedades de un objeto
let persona = {nombre: "Ana", edad: 25};
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

// Bucle for...of: iterando elementos de un array
for (let numero of numeros) {
    console.log(`Número: ${numero}`);
}
