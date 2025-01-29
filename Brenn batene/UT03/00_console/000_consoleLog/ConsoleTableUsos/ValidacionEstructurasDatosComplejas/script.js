// Ejemplo de objeto complejo que representa un usuario
const user = {
    name: 'Juan Pérez', // Propiedad 'name' que almacena el nombre del usuario como una cadena de texto.
    age: 25, // Propiedad 'age' que almacena la edad del usuario como un número.
    address: { // Propiedad 'address' que almacena un objeto con la dirección del usuario.
        street: 'Calle Principal', // Propiedad 'street' que almacena la calle de la dirección como una cadena de texto.
        city: 'Madrid', // Propiedad 'city' que almacena la ciudad de la dirección como una cadena de texto.
        postalCode: '28001', // Propiedad 'postalCode' que almacena el código postal de la dirección como una cadena de texto.
    },
};

// Función para validar el objeto de usuario
function validateUser(user) {
    // Mostrar el objeto de usuario en la consola como tabla
    console.table(user); // Utiliza console.table para mostrar el objeto 'user' en formato de tabla en la consola.

    if (typeof user.name !== 'string' || user.name.trim() === '') {
        // Verifica si 'user.name' no es una cadena de texto o está vacía después de eliminar los espacios en blanco.
        return 'El nombre debe ser una cadena no vacía.'; // Retorna un mensaje de error si la validación falla.
    }

    if (typeof user.age !== 'number' || user.age < 18) {
        // Verifica si 'user.age' no es un número o es menor que 18.
        return 'La edad debe ser un número mayor o igual a 18.'; // Retorna un mensaje de error si la validación falla.
    }

    if (typeof user.address !== 'object' || user.address === null) {
        // Verifica si 'user.address' no es un objeto o es nulo.
        return 'La dirección debe ser un objeto.'; // Retorna un mensaje de error si la validación falla.
    }

    if (typeof user.address.street !== 'string' || user.address.street.trim() === '') {
        // Verifica si 'user.address.street' no es una cadena de texto o está vacía después de eliminar los espacios en blanco.
        return 'La calle debe ser una cadena no vacía.'; // Retorna un mensaje de error si la validación falla.
    }

    if (typeof user.address.city !== 'string' || user.address.city.trim() === '') {
        // Verifica si 'user.address.city' no es una cadena de texto o está vacía después de eliminar los espacios en blanco.
        return 'La ciudad debe ser una cadena no vacía.'; // Retorna un mensaje de error si la validación falla.
    }

    if (
        typeof user.address.postalCode !== 'string' || // Verifica si 'user.address.postalCode' no es una cadena de texto.
        !/^\d{5}$/.test(user.address.postalCode) // Verifica si 'user.address.postalCode' no es una cadena de 5 dígitos usando una expresión regular.
    ) {
        return 'El código postal debe ser una cadena de 5 dígitos.'; // Retorna un mensaje de error si la validación falla.
    }

    // Si todo está correcto, se devuelve un mensaje de éxito
    return 'El usuario es válido.'; // Retorna un mensaje indicando que el usuario es válido.
}

// Validar el objeto de usuario
const result = validateUser(user); // Llama a la función 'validateUser' con el objeto 'user' y almacena el resultado en la constante 'result'.
console.log(result); // Muestra el resultado de la validación en la consola.