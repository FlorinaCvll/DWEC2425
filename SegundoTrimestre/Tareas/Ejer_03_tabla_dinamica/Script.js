// Se espera a que el DOM (estructura del documento HTML) esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Se añade un 'listener' al botón de tipo 'submit'. Cuando se haga clic en el botón, se ejecuta la función proporcionada.
    // Se evita que el formulario se envíe de manera tradicional (con recarga de página) y se llama a la función 'agregarDatos'.
    document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
        event.preventDefault(); // Se previene el comportamiento por defecto del botón (enviar el formulario)
        agregarDatos(); // Se llama a la función 'agregarDatos' para realizar una acción personalizada
    });
    // Se añade un 'listener' al botón con el ID 'generar5'. Al hacer clic en este botón, se genera 5 datos aleatorios.
    document.getElementById('generar5').addEventListener('click', function () {
        generar5DatosAleatorios(); // Llama a la función que genera 5 datos aleatorios
    });
    // Se añade un 'listener' al botón con el ID 'generar10'. Al hacer clic en este botón, se genera 10 datos aleatorios.
    document.getElementById('generar10').addEventListener('click', function () {
        generar10DatosAleatorios(); // Llama a la función que genera 10 datos aleatorios
    });
    // Se añade un 'listener' al botón con el ID 'generar15'. Al hacer clic en este botón, se genera 15 datos aleatorios.
    document.getElementById('generar15').addEventListener('click', function () {
        generar15DatosAleatorios(); // Llama a la función que genera 15 datos aleatorios
    });
    // Se añade un 'listener' al campo de entrada con el ID 'buscador'. Este evento se activa cuando se suelta una tecla ('keyup').
    // Cuando esto sucede, se llama a la función 'buscarDatos' para filtrar los datos según el valor introducido.
    document.getElementById('buscador').addEventListener('keyup', function () {
        buscarDatos(); // Llama a la función 'buscarDatos' que realiza la búsqueda de datos según el texto ingresado
    });
    // Se añade un 'listener' a todos los encabezados de columna de la tabla con el ID 'datosTabla'.
    // Estos encabezados tienen un atributo 'data-index' que se usa para identificar qué columna se está ordenando.
    document.querySelectorAll('#datosTabla th[data-index]').forEach(function (th) {
        th.addEventListener('click', function () {
            ordenarTabla(th.getAttribute('data-index')); // Al hacer clic en un encabezado de columna, se llama a 'ordenarTabla' con el índice de la columna
        });
    });
});

let identificador = 1;
let datos = new Map();

class Persona {
    constructor(id, nombre, apellido1, apellido2, fechaNacimiento, edad, localidad, codigoPostal, provincia, comunidad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.localidad = localidad;
        this.codigoPostal = codigoPostal;
        this.provincia = provincia;
        this.comunidad = comunidad;
    }

    get getId() {
        return this.id;
    }

    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getApellido1() {
        return this.apellido1;
    }
    set setApellido1(apellido1) {
        this.apellido1 = apellido1;
    }

    get getApellido2() {
        return this.apellido2;
    }
    set setApellido2(apellido2) {
        this.apellido2 = apellido2;
    }

    get getFechaNacimiento() {
        return this.fechaNacimiento;
    }
    set setFechaNacimiento(fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    get getEdad() {
        return this.edad;
    }
    set setEdad(edad) {
        this.edad = edad;
    }

    get getLocalidad() {
        return this.localidad;
    }
    set setLocalidad(localidad) {
        this.localidad = localidad;
    }

    get getCodigoPostal() {
        return this.codigoPostal;
    }
    set setCodigoPostal(codigoPostal) {
        this.codigoPostal = codigoPostal;
    }

    get getProvincia() {
        return this.provincia;
    }
    set setProvincia(provincia) {
        this.provincia = provincia;
    }

    get getComunidad() {
        return this.comunidad;
    }
    set setComunidad(comunidad) {
        this.comunidad = comunidad;
    }
}

function mayusculas(str) {
    // Reemplazar cada primera letra de cada palabra por su versión en mayúsculas y el resto en minúsculas
    // \b indica el inicio de una palabra
    // \w indica un carácter alfanum
    // /g indica que se busque en toda la cadena
    return str.replace(/\b\w/g, char => char.toUpperCase()).toLowerCase();
}

function validarFormulario() {
    // Obtener los valores de los campos y quitar los espacios en blanco con el trim
    const nombre = document.getElementById('nombre').value.trim();
    const apellido1 = document.getElementById('apellido1').value.trim();
    const apellido2 = document.getElementById('apellido2').value.trim();
    const localidad = document.getElementById('localidad').value.trim();
    const codigoPostal = document.getElementById('codigoPostal').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    // validaciones
    if (nombre.length < 3) {
        alert('El nombre debe tener como mínimo 3 caracteres.');
        return false;
    }
    if (apellido1.length < 2) {
        alert('El primer apellido debe tener como mínimo 2 caracteres.');
        return false;
    }
    if (apellido2 && apellido2.length < 2) {
        alert('El segundo apellido debe tener como mínimo 2 caracteres si se proporciona.');
        return false;
    }
    if (localidad.length < 2) {
        alert('La localidad debe tener como mínimo 2 caracteres.');
        return false;
    }
    if (!fechaNacimiento) {
        alert('La fecha de nacimiento es obligatoria.');
        return false;
    }

    return true;
}

function obtenerProvincia(codigoPostal) {
    const codigo = codigoPostal.substring(0, 2);  // Extrae los primeros dos caracteres como cadena
    // Códigos de provincias y sus nombres
    const provincias = {
        '28': 'Madrid',
        '08': 'Barcelona',
        '46': 'Valencia'
    };
// Devuelve el codigo o un mensaje de no encontrado
    return provincias[codigo] || 'Provincia no encontrada';  // Retorna la provincia o un mensaje de error
}


function obtenerComunidad(provincia) {
    // Comunidades autónomas y sus provincias
    const comunidades = {
        'Madrid': 'Madrid',
        'Barcelona': 'Cataluña',
        'Valencia': 'Comunidad Valenciana',
    };
    // Devuelve la comunidad autónoma o un mensaje de desconocida
    return comunidades[provincia] || 'Desconocida';
}

function agregarDatos() {
    if (!validarFormulario()) { // Verificar que el formulario es válido, si no es valido, se detiene la funcion y no continua ejecutandose
        return;
    }
    /*Recuperar valores y quitar espacios en blanco con el trim*/
    const nombre = mayusculas(document.getElementById('nombre').value.trim());
    const apellido1 = mayusculas(document.getElementById('apellido1').value.trim());
    const apellido2 = mayusculas(document.getElementById('apellido2').value.trim());
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const edad = calcularEdad(fechaNacimiento);
    const localidad = mayusculas(document.getElementById('localidad').value.trim());
    const codigoPostal = document.getElementById('codigoPostal').value.trim();
    const provincia = obtenerProvincia(codigoPostal);
    const comunidad = obtenerComunidad(provincia);
    // Crear un objeto persona
    const persona = new Persona(identificador++, nombre, apellido1, apellido2, fechaNacimiento, edad, localidad, codigoPostal, provincia, comunidad);
    // Agregar la persona al mapa de datos
    datos.set(persona.getId, persona);
    // Colocar la tabla con los datos actualizados
    colocarTabla();
    // Limpiar el formulario para poder agregar más datos
    document.getElementById('formularioDatos').reset();
}

function calcularEdad(fechaNacimiento) {
    // Calcular la edad a partir de la fecha de nacimiento
    const hoy = new Date();
    // Calcular la diferencia de años desde hoy a la fecha de nacimiento
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    // Calcular la diferencia de meses, 0 Enero y 11 diciembre
    const m = hoy.getMonth() - fechaNacimiento.getMonth();
    // Verificar si el cumpleaños no ha pasado en el año actual
    /*Si la diferencia de meses es negativa, aun no ha pasado el cumpleaños por lo que se reduce un año a la edad
    * Si el mes es el mismo peor el día aun no ha llegado, tambien se reduce la edad en uno. */
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function eliminarDatos(id) {
    // Eliminar los datos del mapa con el id proporcionado
    datos.delete(id);
    // Colocar la tabla con los datos actualizados
    colocarTabla();
}

function colocarTabla(filteredData = Array.from(datos.values())) {
    // Se obtiene la referencia al cuerpo de la tabla (el contenedor donde se agregan las filas)
    const tableBody = document.getElementById('datos');

    // Se limpia el contenido actual de la tabla para poder actualizarla con los nuevos datos
    tableBody.innerHTML = '';

    // Se recorre cada elemento en 'filteredData' para crear una fila en la tabla
    filteredData.forEach(item => {
        // Se crea una nueva fila (tr) para la tabla
        const row = document.createElement('tr');
        // Se crea una celda (td) para el ID y se establece su contenido
        const idCell = document.createElement('td');
        idCell.textContent = item.getId;
        row.appendChild(idCell); // Se agrega la celda a la fila
        // Se crea una celda (td) para el nombre y se establece su contenido
        const nombreCell = document.createElement('td');
        nombreCell.textContent = item.getNombre;
        row.appendChild(nombreCell); // Se agrega la celda a la fila
        // Se crea una celda (td) para el primer apellido y se establece su contenido
        const apellido1Cell = document.createElement('td');
        apellido1Cell.textContent = item.getApellido1;
        row.appendChild(apellido1Cell); // Se agrega la celda a la fila
        // Se crea una celda (td) para el segundo apellido y se establece su contenido
        const apellido2Cell = document.createElement('td');
        apellido2Cell.textContent = item.getApellido2;
        row.appendChild(apellido2Cell); // Se agrega la celda a la fila
        // Se crea una celda (td) para la fecha de nacimiento y se convierte a formato legible
        const fechaNacimientoCell = document.createElement('td');
        fechaNacimientoCell.textContent = item.getFechaNacimiento.toLocaleDateString();
        row.appendChild(fechaNacimientoCell); // Se agrega la celda a la fila
        // Se crea una celda (td) para la edad y se establece su contenido
        const edadCell = document.createElement('td');
        edadCell.textContent = item.getEdad;
        row.appendChild(edadCell); // Se agrega la celda a la fila
        // Se crea una celda (td) para la localidad y se establece su contenido
        const localidadCell = document.createElement('td');
        localidadCell.textContent = item.getLocalidad;
        row.appendChild(localidadCell); // Se agrega la celda a la fila
        // Se crea una celda (td) para el código postal y se establece su contenido
        const codigoPostalCell = document.createElement('td');
        codigoPostalCell.textContent = item.getCodigoPostal;
        row.appendChild(codigoPostalCell); // Se agrega la celda a la fila
        // Se crea una celda (td) para la provincia y se establece su contenido
        const provinciaCell = document.createElement('td');
        provinciaCell.textContent = item.getProvincia;
        row.appendChild(provinciaCell); // Se agrega la celda a la fila
        // Se crea una celda (td) para las acciones (editar y eliminar)
        const accionesCell = document.createElement('td');
        // Se crea el botón de editar y se define la acción a realizar al hacer clic en él
        const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar'; // El texto del botón será 'Editar'
        editarButton.onclick = function () {
            editarDatos(item.getId); // Al hacer clic, se llama a la función 'editarDatos' con el ID del item
        };
        accionesCell.appendChild(editarButton); // Se agrega el botón de editar a la celda de acciones
        // Se crea el botón de eliminar y se define la acción a realizar al hacer clic en él
        const eliminarButton = document.createElement('button');
        eliminarButton.textContent = 'Eliminar'; // El texto del botón será 'Eliminar'
        eliminarButton.onclick = function () {
            eliminarDatos(item.getId); // Al hacer clic, se llama a la función 'eliminarDatos' con el ID del item
        };
        accionesCell.appendChild(eliminarButton); // Se agrega el botón de eliminar a la celda de acciones
        // Se agrega la celda de acciones (que contiene los botones de editar y eliminar) a la fila
        row.appendChild(accionesCell);
        // Finalmente, se agrega la fila completa a la tabla
        tableBody.appendChild(row);
    });
}


function rellenarComunidad() {
    // Obtener la provincia seleccionada
    const provincia = document.getElementById('provincia').value;
    // Comunidades autónomas y sus provincias
    const comunidades = {
        "Madrid": "Madrid",
        "Barcelona": "Cataluña",
        "Valencia": "Comunidad Valenciana",
        // Se pueden agregar más comunidades autónomas
    };
    // Colocar la comunidad autónoma en el campo correspondiente
    document.getElementById('comunidad').value = comunidades[provincia] || '';
}

function buscarDatos() {
    // Obtener el valor del input de búsqueda y convertirlo a minúsculas
    const input = document.getElementById('buscador').value.toLowerCase();

    // Filtrar los datos que contengan el valor del input en alguno de sus campos
    const filteredData = Array.from(datos.values()).filter(item =>
        // Verificar si el nombre del item contiene el texto ingresado
        item.getNombre.toLowerCase().includes(input) ||
        // Verificar si el primer apellido del item contiene el texto ingresado
        item.getApellido1.toLowerCase().includes(input) ||
        // Verificar si el segundo apellido del item contiene el texto ingresado
        item.getApellido2.toLowerCase().includes(input) ||
        // Verificar si la localidad del item contiene el texto ingresado
        item.getLocalidad.toLowerCase().includes(input) ||
        // Verificar si el código postal del item contiene el texto ingresado
        item.getCodigoPostal.toLowerCase().includes(input) ||
        // Verificar si la provincia del item contiene el texto ingresado
        item.getProvincia.toLowerCase().includes(input) ||
        // Verificar si la comunidad del item contiene el texto ingresado
        item.getComunidad.toLowerCase().includes(input)
    );
    // Llamar a la función colocarTabla para mostrar los datos filtrados
    colocarTabla(filteredData);
}

function ordenarTabla(index) {
    // Obtener la dirección de orden actual (ascendente o descendente)
    // Usar el índice de columna para seleccionar el encabezado correspondiente
    // Se verifica el valor del atributo 'data-order' (si es 'asc' o 'desc')
    // Si el orden actual es 'asc', se cambia a 'desc' y viceversa.
    const direction = document.querySelectorAll('th')[index].getAttribute('data-order') === 'asc' ? 'desc' : 'asc';

    // Actualizar el atributo 'data-order' del encabezado para reflejar el nuevo orden
    document.querySelectorAll('th')[index].setAttribute('data-order', direction);

    // Convertir los valores de 'datos' a un array y ordenarlos según la columna seleccionada
    // Usar 'Array.from' para asegurarse de que se está trabajando con un array en lugar de un objeto
    const sortedData = Array.from(datos.values()).sort((a, b) => {

        // Obtener la clave (campo) que corresponde a la columna seleccionada usando 'index'
        // Esto permite ordenar dinámicamente según cualquier columna
        const key = Object.keys(a)[index];
        // Si el valor en 'a' es menor que en 'b', se necesita invertir el orden según la dirección
        if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;  // Ascendente: -1 coloca 'a' antes que 'b'
        // Si el valor en 'a' es mayor que en 'b', se necesita invertir el orden según la dirección
        if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;  // Ascendente: 1 coloca 'b' antes que 'a'
        // Si los valores son iguales, no se hace nada para cambiarlos
        return 0;  // Si 'a' y 'b' son iguales, no se cambia su orden
    });

    // Mostrar los datos ordenados llamando a la función 'colocarTabla'
    colocarTabla(sortedData);
}

// Datos aleatorios
const nombresHombres = ["Juan", "Pedro", "Luis", "Carlos", "Jorge", "Miguel", "Fernando", "David", "Jose", "Manuel", "Antonio", "Francisco", "Javier", "Rafael", "Alberto", "Sergio", "Alejandro", "Enrique", "Pablo", "Ricardo", "Andres", "Victor", "Adrian", "Mario", "Hugo"];
const nombresMujeres = ["Ana", "Maria", "Laura", "Carmen", "Isabel", "Marta", "Sara", "Elena", "Patricia", "Lucia", "Cristina", "Sofia", "Paula", "Raquel", "Beatriz", "Silvia", "Teresa", "Rosa", "Eva", "Alicia", "Clara", "Irene", "Angela", "Monica", "Julia"];
const apellidos = ["Gomez", "Lopez", "Fernandez", "Martinez", "Sanchez", "Perez", "Garcia", "Rodriguez", "Hernandez", "Diaz", "Moreno", "Alvarez", "Romero", "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez", "Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Molina"];
const localidades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Malaga", "Zaragoza", "Murcia", "Palma", "Las Palmas", "Alicante", "Cordoba", "Valladolid", "Vigo", "Gijon", "Granada", "Elche", "Tarragona", "Lleida", "Marbella", "Badajoz", "Salamanca", "Logroño", "Huelva", "Almeria"];

function cargarDatosAleatorios() {
    // Se selecciona un nombre aleatorio de las listas de nombres masculinos o femeninos
    // Se utiliza Math.random() para generar un número aleatorio entre 0 y 1 y decidir si el nombre es masculino o femenino
    // Luego, se selecciona un nombre aleatorio de la lista correspondiente
    const nombre = Math.random() < 0.5 ? nombresHombres[Math.floor(Math.random() * nombresHombres.length)] : nombresMujeres[Math.floor(Math.random() * nombresMujeres.length)];

    // Se selecciona un primer apellido aleatorio de la lista de apellidos
    // Math.random() se usa para obtener un índice aleatorio en el array de apellidos
    const apellido1 = apellidos[Math.floor(Math.random() * apellidos.length)];

    // Se selecciona un segundo apellido aleatorio de la lista de apellidos, igual que el primer apellido
    const apellido2 = apellidos[Math.floor(Math.random() * apellidos.length)];

    // Se genera una fecha de nacimiento aleatoria entre el 1 de enero de 1950 y la fecha actual
    // Math.random() genera un número aleatorio entre 0 y 1, que luego se ajusta para obtener un valor de fecha dentro del rango deseado
    const fechaNacimiento = new Date(Math.random() * (new Date().getTime() - new Date(1950, 0, 1).getTime()) + new Date(1950, 0, 1).getTime());

    // Se selecciona una localidad aleatoria de la lista de localidades
    const localidad = localidades[Math.floor(Math.random() * localidades.length)];

    // Se genera un código postal aleatorio entre 10000 y 99999
    // Math.random() genera un número entre 0 y 1, que luego se multiplica por 90000 y se suma 10000 para obtener un valor dentro del rango de códigos postales
    const codigoPostal = Math.floor(10000 + Math.random() * 90000).toString();

    // Se asigna "Madrid" como provincia y comunidad, aunque se puede hacer aleatorio si se desea
    const provincia = "Madrid"; // Se podría agregar lógica para seleccionar la provincia aleatoriamente si se desea
    const comunidad = "Madrid"; // Igualmente, se puede cambiar para que sea aleatorio

    // Se asignan los valores generados a los campos del formulario correspondientes utilizando 'getElementById'
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido1').value = apellido1;
    document.getElementById('apellido2').value = apellido2;

    // Convertir la fecha a formato ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ) y obtener solo la parte de la fecha (YYYY-MM-DD)
    // Se usa 'T' como separador entre la fecha y la hora, siguiendo el estándar ISO 8601
    document.getElementById('fechaNacimiento').value = fechaNacimiento.toISOString().split('T')[0];
    document.getElementById('fechaNacimiento').value = fechaNacimiento.toISOString().split('T')[0];

    // Se asignan las localidades, códigos postales, provincia y comunidad al formulario
    document.getElementById('localidad').value = localidad;
    document.getElementById('codigoPostal').value = codigoPostal;
    document.getElementById('provincia').value = provincia;
    document.getElementById('comunidad').value = comunidad;
}


function generarDatosAleatorios(cantidad) {
    // Iterar tantas veces como la cantidad indicada
    for (let i = 0; i < cantidad; i++) {
        // Seleccionar un nombre aleatorio, dependiendo de si es masculino o femenino
        const nombre = Math.random() < 0.5 ? nombresHombres[Math.floor(Math.random() * nombresHombres.length)] : nombresMujeres[Math.floor(Math.random() * nombresMujeres.length)];
        // Seleccionar un primer apellido aleatorio de la lista de apellidos
        const apellido1 = apellidos[Math.floor(Math.random() * apellidos.length)];
        // Seleccionar un segundo apellido aleatorio de la lista de apellidos
        const apellido2 = apellidos[Math.floor(Math.random() * apellidos.length)];
        // Generar una fecha de nacimiento aleatoria entre 1950 y la fecha actual
        const fechaNacimiento = new Date(Math.random() * (new Date().getTime() - new Date(1950, 0, 1).getTime()) + new Date(1950, 0, 1).getTime());
        // Seleccionar una localidad aleatoria de la lista de localidades
        const localidad = localidades[Math.floor(Math.random() * localidades.length)];
        // Generar un código postal aleatorio entre 10000 y 99999
        const codigoPostal = Math.floor(10000 + Math.random() * 90000).toString();
        // Asignar la provincia y comunidad como "Madrid"
        const provincia = "Madrid"; // Se podría hacer aleatorio si se desea
        const comunidad = "Madrid"; // Igualmente, se puede cambiar para que sea aleatorio
        // Calcular la edad a partir de la fecha de nacimiento generada
        const edad = calcularEdad(fechaNacimiento);
        // Crear un nuevo objeto de tipo Persona con los datos generados
        const persona = new Persona(identificador++, nombre, apellido1, apellido2, fechaNacimiento, edad, localidad, codigoPostal, provincia, comunidad);
        // Almacenar la persona en el mapa 'datos' con su ID como clave
        datos.set(persona.getId, persona);
    }

    // Llamar a la función para mostrar los datos en una tabla
    colocarTabla();
}


function generar5DatosAleatorios() {
    // Generar 5 datos aleatorios llamando a la funcion padre
    generarDatosAleatorios(5);
}

function generar10DatosAleatorios() {
    // Generar 10 datos aleatorios llamando a la funcion padre
    generarDatosAleatorios(10);
}

function generar15DatosAleatorios() {
    // Generar 15 datos aleatorios llamando a la funcion padre
    generarDatosAleatorios(15);
}

function editarDatos(id) {
    // Obtener los datos de la persona correspondiente al ID proporcionado
    const data = datos.get(id);
    // Si se encuentra la persona en el mapa 'datos'
    if (data) {
        // Asignar los valores del objeto 'data' a los campos del formulario
        document.getElementById('nombre').value = data.getNombre; // Establece el nombre
        document.getElementById('apellido1').value = data.getApellido1; // Establece el primer apellido
        document.getElementById('apellido2').value = data.getApellido2; // Establece el segundo apellido
        document.getElementById('fechaNacimiento').value = data.getFechaNacimiento.toISOString().split('T')[0]; // Establece la fecha de nacimiento (formato 'YYYY-MM-DD')
        document.getElementById('localidad').value = data.getLocalidad; // Establece la localidad
        document.getElementById('codigoPostal').value = data.getCodigoPostal; // Establece el código postal
        document.getElementById('provincia').value = data.getProvincia; // Establece la provincia
        document.getElementById('comunidad').value = data.getComunidad; // Establece la comunidad autónoma
        // Cambiar el texto del botón de 'Agregar' a 'Modificar' para reflejar la acción
        const submitButton = document.querySelector('#dataForm button[type="submit"]');
        submitButton.textContent = 'Modificar';
        // Cambiar la acción del botón para que llame a la función 'modificarDatos' con el ID correspondiente al hacer clic
        submitButton.onclick = function () {
            modificarDatos(id);
        };
    }
}


function modificarDatos(id) {
    // Validar que el formulario esté correctamente completo antes de proceder
    if (!validarFormulario()) {
        return; // Si el formulario no es válido, no se continúa con la modificación
    }
    // Obtener los datos de la persona con el ID proporcionado
    const data = datos.get(id);
    // Si los datos existen
    if (data) {
        // Actualizar los valores de los campos de la persona con los datos del formulario
        data.setNombre = mayusculas(document.getElementById('nombre').value.trim()); // Establece el nombre en mayúsculas
        data.setApellido1 = mayusculas(document.getElementById('apellido1').value.trim()); // Establece el primer apellido en mayúsculas
        data.setApellido2 = mayusculas(document.getElementById('apellido2').value.trim()); // Establece el segundo apellido en mayúsculas
        data.setFechaNacimiento = new Date(document.getElementById('fechaNacimiento').value); // Establece la fecha de nacimiento desde el formulario
        data.setEdad = calcularEdad(data.getFechaNacimiento); // Calcula la nueva edad con la fecha de nacimiento actualizada
        data.setLocalidad = mayusculas(document.getElementById('localidad').value.trim()); // Establece la localidad en mayúsculas
        data.setCodigoPostal = document.getElementById('codigoPostal').value.trim(); // Establece el código postal del formulario
        data.setProvincia = obtenerProvincia(data.getCodigoPostal); // Actualiza la provincia con la función obtenerProvincia
        data.setComunidad = obtenerComunidad(data.getProvincia); // Actualiza la comunidad con la función obtenerComunidad
        // Actualiza los datos en el objeto 'datos' usando el ID como clave
        datos.set(id, data);
        // Actualiza la tabla para mostrar los datos modificados
        colocarTabla();
        // Resetear el formulario a su estado inicial
        document.getElementById('dataForm').reset();
        // Cambiar el texto del botón de 'Modificar' a 'Agregar' y asignar la función de agregar
        const submitButton = document.querySelector('#dataForm button[type="submit"]');
        submitButton.textContent = 'Agregar'; // Cambiar el texto del botón
        submitButton.onclick = function (e) {
            e.preventDefault(); // Evitar el comportamiento predeterminado del botón (enviar el formulario)
            agregarDatos(); // Llamar a la función de agregar nuevos datos
        };
    }
}
