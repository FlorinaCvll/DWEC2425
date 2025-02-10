// Simulación de una llamada a una API
const data = [
    {name: 'Juan', age: 25, city: 'Madrid'},
    {name: 'Ana', age: 30, city: 'Barcelona'},
    {name: 'Carlos', age: 22, city: 'Sevilla'}
];
// Declara una constante llamada `data` y la inicializa con un array de objetos.
// Cada objeto representa una persona con propiedades `name`, `age` y `city`.

// Mostrar los datos en consola como tabla
console.table(data);
// Muestra los datos del array `data` en la consola del navegador en formato de tabla,
// lo que facilita la visualización de los datos.

// Mostrar los datos en el contenedor de la página
function displayData(arr) {
    const container = document.getElementById('data-container');
    // Selecciona el elemento HTML con el id `data-container` y lo asigna a la constante `container`.
    container.innerHTML = '';
    // Limpia el contenido HTML del contenedor antes de redibujar los datos.

    arr.forEach(item => {
        const div = document.createElement('div');
        // Crea un nuevo elemento `div` para cada elemento del array.
        div.textContent = `${item.name} (${item.age}) - ${item.city}`;
        // Establece el contenido de texto del `div` con el nombre, edad y ciudad de la persona.
        container.appendChild(div);
        // Añade el `div` al contenedor `container`.
    });
}

displayData(data);
// Llama a la función `displayData` con el array `data` para mostrar los datos en el contenedor de la página.