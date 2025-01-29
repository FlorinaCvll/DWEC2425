// Simular la carga de muchos elementos (items)
function loadItems() {
    console.time("loadItems");  // Iniciar la medición del tiempo con la etiqueta 'loadItems' para medir el tiempo de carga de los elementos

    // Simulando datos con un array de 1000 elementos
    const items = [];  // Inicializar un array vacío para almacenar los elementos
    for (let i = 1; i <= 1000; i++) {  // Bucle desde 1 hasta 1000
        items.push(`Elemento ${i}`);  // Agregar cada elemento al array con el formato 'Elemento {i}'
    }

    // Llamada a la función de renderizado optimizado
    renderItems(items);  // Pasar el array de elementos a la función renderItems para su renderizado

    console.timeEnd("loadItems");  // Detener la medición del tiempo y registrar el tiempo tomado para cargar los elementos
}

// Optimización de renderizado usando técnicas de "virtualización" o "paginación"
function renderItems(items) {
    const container = document.getElementById("itemsList");  // Obtener el elemento contenedor del DOM con el id 'itemsList'
    container.innerHTML = '';  // Limpiar el contenedor antes de agregar nuevos elementos

    // Cargar solo una pequeña porción de elementos a la vez (en lugar de todos)
    const batchSize = 20;  // Definir el número de elementos a cargar a la vez para evitar sobrecargar el DOM
    for (let i = 0; i < Math.min(batchSize, items.length); i++) {  // Bucle a través de los primeros batchSize elementos o el total de elementos, lo que sea menor
        const item = document.createElement('div');  // Crear un nuevo elemento div para cada elemento
        item.classList.add('item');  // Agregar la clase 'item' al div para aplicar estilos CSS
        item.textContent = items[i];  // Establecer el contenido de texto del div al elemento actual
        container.appendChild(item);  // Agregar el div al contenedor
    }
}

// Botón para cargar los items
document.getElementById('loadItemsButton').addEventListener('click', loadItems);  // Agregar un evento 'click' al botón con id 'loadItemsButton' para llamar a la función loadItems cuando se haga clic

// Explicación de los métodos usados y por qué se usan:

// 1. console.time(label): Inicia un temporizador con la etiqueta especificada para medir el tiempo transcurrido. Se usa para medir el tiempo de carga de los elementos.
// 2. console.timeEnd(label): Detiene el temporizador iniciado con console.time y muestra el tiempo transcurrido. Se usa para registrar el tiempo total de carga.
// 3. document.getElementById(id): Obtiene el elemento del DOM con el id especificado. Se usa para acceder a elementos específicos del DOM para manipularlos.
// 4. element.innerHTML: Establece o devuelve el contenido HTML de un elemento. Se usa para limpiar el contenedor antes de agregar nuevos elementos.
// 5. document.createElement(tagName): Crea un nuevo elemento HTML con el nombre de etiqueta especificado. Se usa para crear nuevos elementos div para cada item.
// 6. element.classList.add(className): Agrega una clase al atributo class del elemento. Se usa para aplicar estilos CSS a los nuevos elementos div.
// 7. element.textContent: Establece o devuelve el contenido textual de un elemento. Se usa para establecer el contenido de texto de los nuevos elementos div.
// 8. element.appendChild(child): Agrega un nodo hijo al final de la lista de hijos de un elemento. Se usa para agregar los nuevos elementos div al contenedor.
// 9. element.addEventListener(event, function): Asigna un evento al elemento especificado para que ejecute la función cuando ocurra el evento. Se usa para asignar la función loadItems al evento 'click' del botón.