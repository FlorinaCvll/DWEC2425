//8.1
function acontecimientos() {
    const acontecimientosH = [
        "Caida del Muro de Berlin",
        "Primera Guerra Mundial",
        "Segunda Guerra Mundial",
        "Descubrimiento de America",
        "Revolucion Industrial",
        "Revolucion Francesa",
        "Guerra Civil Americana",
        "Revolucion Rusa",
        "Gran Depresion",
        "Holocausto",
        "Guerra Fría",
        "Reconquista",
        "Reinado de los Reyes Catolicos",
        "La Ilustracion",
        "Guerra de Independencia",
        "Reinado de Isabel II",
        "Guerra Civil Española",
        "Transición Española",
        "Franquismo",
        "Juegos Olimpicos de Barcelona"
    ];

    function pedirAcon() {
        const usuario = [];
        for (let i = 0; i < 5; i++) {
            const evento = prompt("Introduzca un acontecimiento");
            usuario.push(evento);
        }
        return usuario;
    }

    function ordenar(acontecimiento) {
        return [...acontecimientosH, ...acontecimiento].sort();
    }

    const usuario = pedirAcon();
    const ordenacion = ordenar(usuario);
    console.log("Estos son los acontecimientos historicos ordenados:");
    console.log(ordenacion);
}

//8.2
function foreach() {
    const anios = [1978, , 2000, , 2004, , 2005, , 1999, 1857, , 1679, 2009];
    const mascotas = ["Perro", , "Gato", , "Tortuga", , "Canario", "Loro"];
    anios.forEach(function (anios, j) {
        console.log(`Años número ${j} es ${anios}`);
    });
    console.log("*******************************");
    mascotas.forEach(function (mascotas, i) {
        console.log(`Mascotas número ${i} es ${mascotas}`);
    });
}

//8.3
function juego() {
    const array = [1, 2, 3, 4, 5];

    alert(array);
    const mod = array.map((valor, indice) => {
        if (indice === 1 || indice === 3) {
            const nuevo = prompt("Mofica el valor:");
            return parseInt(nuevo) * 2;
        }
        return valor;
    });
    console.log("Turno del Jugador 2");

    const adiv = mod.map((valor, indice) => {
        const int = prompt("Intenta adivinar");
        return parseInt(int);
    });

    console.log("Resultados");
    console.log("Array original", array);
    console.log("Array Modidicado", mod);
    console.log("Adivinacion jugador 2 ", adiv);
    const acieryos = mod.filter((valor, indice) => valor === adiv[indice]);
    console.log("Aciertos ", acieryos.length);
}

// 8.4
function factorial() {
    const a = parseInt(prompt("Intrduce un numero:"));
    const num = Array.from({length: a}, (_, index) => index + 1);
    const res = num.reduce((acu, actual) => acu * actual, 1);

    console.log(`El factorial de ${a} es ${res}`);
}

// 8.5
function fibonacci() {
    function a(acc, _, index) {
        acc.push(acc[index] + acc[index - 1]);
        return acc;
    }

    const n = parseInt(prompt("Introduce un numero:"));

    if (isNaN(n) || n < 2) {
        alert("Introduce un numero mayor que 2");
    }

    const fib = [0, 1];

    if (n > 2) {
        const res = [...Array(n - 2).reduce(a, fib)];
        console.log("La serie de Fibonacci es:" + res);
    } else {
        console.log("La serie de Fibonacci es:" + fib);
    }
}

//8.6
function menu() {
    const num = Array.from({length: 100}, (_, index) => index + 1);

    const po = prompt(
        "Elige una opción:\n" +
        "1. Números primos\n" +
        "2. Números pares\n" +
        "3. Números impares\n" +
        "4. Números divisibles entre 3\n" +
        "5. Números divisibles entre 4\n" +
        "6. Números cuya suma sea par"
    );
    let numeros;

    switch (po) {
        case "1":
            numeros = num.filter(esPrimo);
            break;
        case "2":
            numeros = num.filter(numero => numero % 2 === 0);
            break;
        case "3":
            numeros = num.filter(numero => numero % 2 !== 0);
            break;
        case "4":
            numeros = num.filter(numero => numero % 3 === 0);
            break;
        case "5":
            numeros = num.filter(numero => numero % 4 === 0);
            break;
        case "6":
            numeros = num.filter(esSumaPar);
            break;
        default:
            console.log("Error");
    }
    console.log("Numero filtrado:" + numeros);

    function esPrimo(num) {
        if (num < 2) {
            return false;
        }
        for (let i = 0; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
            return true;
        }
    }

    function esSumaPar(nun) {
        const dig = nun.toString().split('').reduce((acu, suma) => acu + parseInt(suma), 0);
        return dig % 2 === 0;
    }
}

window.onload = function () {
    document.getElementById("acontecimientos").addEventListener("click", acontecimientos);
    document.getElementById("foreach").addEventListener("click", foreach);
    document.getElementById("juego").addEventListener("click", juego);
    document.getElementById("factorial").addEventListener("click", factorial);
    document.getElementById("fibonacci").addEventListener("click", fibonacci);
    document.getElementById("menu").addEventListener("click", menu);

}
