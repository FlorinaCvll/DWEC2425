document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dataForm').addEventListener('submit', function (e) {
        e.preventDefault();
        agregarDatos();
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
    return str.replace(/\b\w/g, char => char.toUpperCase()).toLowerCase();
}

function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido1 = document.getElementById('apellido1').value.trim();
    const apellido2 = document.getElementById('apellido2').value.trim();
    const localidad = document.getElementById('localidad').value.trim();
    const codigoPostal = document.getElementById('codigoPostal').value.trim();
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;

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
    const provincias = {
        '28': 'Madrid',
        '08': 'Barcelona',
        '46': 'Valencia'
    };

    return provincias[codigo] || 'Provincia no encontrada';  // Retorna la provincia o un mensaje de error
}


function obtenerComunidad(provincia) {
    const comunidades = {
        'Madrid': 'Madrid',
        'Barcelona': 'Cataluña',
        'Valencia': 'Comunidad Valenciana',
        // Agregar más provincias y comunidades
    };
    return comunidades[provincia] || 'Desconocida';
}

function agregarDatos() {
    if (!validarFormulario()) {
        return;
    }

    const nombre = mayusculas(document.getElementById('nombre').value.trim());
    const apellido1 = mayusculas(document.getElementById('apellido1').value.trim());
    const apellido2 = mayusculas(document.getElementById('apellido2').value.trim());
    const fechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
    const edad = calcularEdad(fechaNacimiento);
    const localidad = mayusculas(document.getElementById('localidad').value.trim());
    const codigoPostal = document.getElementById('codigoPostal').value.trim();
    const provincia = obtenerProvincia(codigoPostal);
    const comunidad = obtenerComunidad(provincia);

    const persona = new Persona(identificador++, nombre, apellido1, apellido2, fechaNacimiento, edad, localidad, codigoPostal, provincia, comunidad);
    datos.set(persona.getId, persona);
    colocarTabla();
    document.getElementById('dataForm').reset();
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const m = hoy.getMonth() - fechaNacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function eliminarDatos(id) {
    datos.delete(id);
    colocarTabla();
}

function colocarTabla(filteredData = Array.from(datos.values())) {
    const tableBody = document.getElementById('dataBody');
    tableBody.innerHTML = '';
    filteredData.forEach(item => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${item.getId}</td>
            <td>${item.getNombre}</td>
            <td>${item.getApellido1}</td>
            <td>${item.getApellido2}</td>
            <td>${item.getFechaNacimiento.toLocaleDateString()}</td>
            <td>${item.getEdad}</td>
            <td>${item.getLocalidad}</td>
            <td>${item.getCodigoPostal}</td>
            <td>${item.getProvincia}</td>
            <td>
                <button onclick="editarDatos(${item.getId})">Editar</button>
                <button onclick="eliminarDatos(${item.getId})">Eliminar</button>
            </td>
        `;
    });
}

function rellenarComunidad() {
    const provincia = document.getElementById('provincia').value;
    const comunidades = {
        "Madrid": "Madrid",
        "Barcelona": "Cataluña",
        "Valencia": "Comunidad Valenciana",
        // Agregar más provincias y comunidades
    };
    document.getElementById('comunidad').value = comunidades[provincia] || '';
}

function buscarDatos() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = Array.from(datos.values()).filter(item =>
        item.getNombre.toLowerCase().includes(input) ||
        item.getApellido1.toLowerCase().includes(input) ||
        item.getApellido2.toLowerCase().includes(input) ||
        item.getLocalidad.toLowerCase().includes(input) ||
        item.getCodigoPostal.toLowerCase().includes(input) ||
        item.getProvincia.toLowerCase().includes(input) ||
        item.getComunidad.toLowerCase().includes(input)
    );
    colocarTabla(filteredData);
}

function ordenarTabla(index) {
    const direction = document.querySelectorAll('th')[index].getAttribute('data-order') === 'asc' ? 'desc' : 'asc';
    document.querySelectorAll('th')[index].setAttribute('data-order', direction);
    const sortedData = Array.from(datos.values()).sort((a, b) => {
        if (a[Object.keys(a)[index]] < b[Object.keys(b)[index]]) return direction === 'asc' ? -1 : 1;
        if (a[Object.keys(a)[index]] > b[Object.keys(b)[index]]) return direction === 'asc' ? 1 : -1;
        return 0;
    });
    colocarTabla(sortedData);
}

const nombresHombres = ["Juan", "Pedro", "Luis", "Carlos", "Jorge", "Miguel", "Fernando", "David", "Jose", "Manuel", "Antonio", "Francisco", "Javier", "Rafael", "Alberto", "Sergio", "Alejandro", "Enrique", "Pablo", "Ricardo", "Andres", "Victor", "Adrian", "Mario", "Hugo"];
const nombresMujeres = ["Ana", "Maria", "Laura", "Carmen", "Isabel", "Marta", "Sara", "Elena", "Patricia", "Lucia", "Cristina", "Sofia", "Paula", "Raquel", "Beatriz", "Silvia", "Teresa", "Rosa", "Eva", "Alicia", "Clara", "Irene", "Angela", "Monica", "Julia"];
const apellidos = ["Gomez", "Lopez", "Fernandez", "Martinez", "Sanchez", "Perez", "Garcia", "Rodriguez", "Hernandez", "Diaz", "Moreno", "Alvarez", "Romero", "Alonso", "Gutierrez", "Navarro", "Torres", "Dominguez", "Vazquez", "Ramos", "Gil", "Ramirez", "Serrano", "Blanco", "Molina"];
const localidades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Malaga", "Zaragoza", "Murcia", "Palma", "Las Palmas", "Alicante", "Cordoba", "Valladolid", "Vigo", "Gijon", "Granada", "Elche", "Tarragona", "Lleida", "Marbella", "Badajoz", "Salamanca", "Logroño", "Huelva", "Almeria"];

function cargarDatosAleatorios() {
    const nombre = Math.random() < 0.5 ? nombresHombres[Math.floor(Math.random() * nombresHombres.length)] : nombresMujeres[Math.floor(Math.random() * nombresMujeres.length)];
    const apellido1 = apellidos[Math.floor(Math.random() * apellidos.length)];
    const apellido2 = apellidos[Math.floor(Math.random() * apellidos.length)];
    const fechaNacimiento = new Date(Math.random() * (new Date().getTime() - new Date(1950, 0, 1).getTime()) + new Date(1950, 0, 1).getTime());
    const localidad = localidades[Math.floor(Math.random() * localidades.length)];
    const codigoPostal = Math.floor(10000 + Math.random() * 90000).toString();
    const provincia = "Madrid"; // Puedes cambiar esto para que sea aleatorio también
    const comunidad = "Madrid"; // Puedes cambiar esto para que sea aleatorio también

    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido1').value = apellido1;
    document.getElementById('apellido2').value = apellido2;
    document.getElementById('fechaNacimiento').value = fechaNacimiento.toISOString().split('T')[0];
    document.getElementById('localidad').value = localidad;
    document.getElementById('codigoPostal').value = codigoPostal;
    document.getElementById('provincia').value = provincia;
    document.getElementById('comunidad').value = comunidad;
}

function generarDatosAleatorios(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        const nombre = Math.random() < 0.5 ? nombresHombres[Math.floor(Math.random() * nombresHombres.length)] : nombresMujeres[Math.floor(Math.random() * nombresMujeres.length)];
        const apellido1 = apellidos[Math.floor(Math.random() * apellidos.length)];
        const apellido2 = apellidos[Math.floor(Math.random() * apellidos.length)];
        const fechaNacimiento = new Date(Math.random() * (new Date().getTime() - new Date(1950, 0, 1).getTime()) + new Date(1950, 0, 1).getTime());
        const localidad = localidades[Math.floor(Math.random() * localidades.length)];
        const codigoPostal = Math.floor(10000 + Math.random() * 90000).toString();
        const provincia = "Madrid";
        const comunidad = "Madrid";
        const edad = calcularEdad(fechaNacimiento);

        const persona = new Persona(identificador++, nombre, apellido1, apellido2, fechaNacimiento, edad, localidad, codigoPostal, provincia, comunidad);
        datos.set(persona.getId, persona);
    }
    colocarTabla();
}

function generar5DatosAleatorios() {
    generarDatosAleatorios(5);
}

function generar10DatosAleatorios() {
    generarDatosAleatorios(10);
}

function generar15DatosAleatorios() {
    generarDatosAleatorios(15);
}

function editarDatos(id) {
    const data = datos.get(id);
    if (data) {
        document.getElementById('nombre').value = data.getNombre;
        document.getElementById('apellido1').value = data.getApellido1;
        document.getElementById('apellido2').value = data.getApellido2;
        document.getElementById('fechaNacimiento').value = data.getFechaNacimiento.toISOString().split('T')[0];
        document.getElementById('localidad').value = data.getLocalidad;
        document.getElementById('codigoPostal').value = data.getCodigoPostal;
        document.getElementById('provincia').value = data.getProvincia;
        document.getElementById('comunidad').value = data.getComunidad;

        // Cambiar el botón de agregar a modificar
        const submitButton = document.querySelector('#dataForm button[type="submit"]');
        submitButton.textContent = 'Modificar';
        submitButton.onclick = function () {
            modificarDatos(id);
        };
    }
}

function modificarDatos(id) {
    if (!validarFormulario()) {
        return;
    }

    const data = datos.get(id);
    if (data) {
        data.setNombre = mayusculas(document.getElementById('nombre').value.trim());
        data.setApellido1 = mayusculas(document.getElementById('apellido1').value.trim());
        data.setApellido2 = mayusculas(document.getElementById('apellido2').value.trim());
        data.setFechaNacimiento = new Date(document.getElementById('fechaNacimiento').value);
        data.setEdad = calcularEdad(data.getFechaNacimiento);
        data.setLocalidad = mayusculas(document.getElementById('localidad').value.trim());
        data.setCodigoPostal = document.getElementById('codigoPostal').value.trim();
        data.setProvincia = obtenerProvincia(data.getCodigoPostal);
        data.setComunidad = obtenerComunidad(data.getProvincia);

        datos.set(id, data);
        colocarTabla();

        // Resetear el formulario y el botón
        document.getElementById('dataForm').reset();
        const submitButton = document.querySelector('#dataForm button[type="submit"]');
        submitButton.textContent = 'Agregar';
        submitButton.onclick = function (e) {
            e.preventDefault();
            agregarDatos();
        };
    }
}