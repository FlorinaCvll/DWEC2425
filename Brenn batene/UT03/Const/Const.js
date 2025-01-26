const nombre = "Maria";
console.log(nombre); // "Maria"
// nombre = "Pedro"; // Error: Assignment to constant variable

const usuario = {
    nombre: "Carlos",
    edad: 25
};
usuario.edad = 26; // Permitido
console.log(usuario.edad); // 26

const numeros = [1, 2, 3];
numeros.push(4); // Permitido
console.log(numeros); // [1, 2, 3, 4]
