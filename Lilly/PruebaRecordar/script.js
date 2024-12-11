var pregunta1 = ["Sandia", "Platano", "Fresa"];
var pregunta2 = ["Manzana", "Pera", "Uva"];
var pregunta3 = ["Naranja", "Melocotón", "Cereza"];
var pregunta4 = ["Kiwi", "Mango", "Papaya"];
var pregunta5 = ["Limón", "Lima", "Pomelo"];
var pregunta6 = ["Arándano", "Frambuesa", "Mora"];
var pregunta7 = ["Mandarina", "Guayaba", "Chirimoya"];
var pregunta8 = ["Higo", "Granada", "Ciruela"];
var pregunta9 = ["León", "Tigre", "Pantera"];
var pregunta10 = ["Elefante", "Rinoceronte", "Hipopótamo"];
var pregunta11 = ["Águila", "Halcon", "Buitre"];
var pregunta12 = ["Ballena", "Delfín", "Tiburón"];
var pregunta13 = ["Perro", "Gato", "Conejo"];
var pregunta14 = ["León marino", "Foca", "Morsa"];
var pregunta15 = ["Jirafa", "Cebra", "Antílope"];
var pregunta16 = ["Rojo", "Azul", "Amarillo"];
var pregunta17 = ["Verde", "Naranja", "Morado"];
var pregunta18 = ["Blanco", "Negro", "Gris"];
var pregunta19 = ["Rosa", "Violeta", "Turquesa"];
var pregunta20 = ["Indigo", "Celeste", "Lima"];
var pregunta21 = ["España", "Italia", "Francia"];
var pregunta22 = ["México", "Argentina", "Chile"];
var pregunta23 = ["Estados Unidos", "Canadá", "Brasil"];
var pregunta24 = ["Alemania", "Reino Unido", "Suecia"];
var pregunta25 = ["India", "China", "Japón"];
var pregunta26 = ["Australia", "Nueva Zelanda", "Fiji"];
var pregunta27 = ["Egipto", "Marruecos", "Sudáfrica"];
var pregunta28 = ["Rusia", "Kazajistán", "Ucrania"];
var pregunta29 = ["Italia", "Grecia", "Portugal"];
var pregunta30 = ["Suecia", "Noruega", "Finlandia"];
var pregunta31 = ["Cine", "Teatro", "Musical"];
var pregunta32 = ["Acción", "Comedia", "Drama"];
var pregunta33 = ["Ciencia ficción", "Fantasía", "Terror"];
var pregunta34 = ["Superhéroes", "Anime", "Documentales"];
var pregunta35 = ["Harry Potter", "El Señor de los Anillos", "Star Wars"];
var pregunta36 = ["La Casa de Papel", "Breaking Bad", "Stranger Things"];
var pregunta37 = ["Pizza", "Hamburguesa", "Sushi"];
var pregunta38 = ["Tacos", "Pasta", "Paella"];
var pregunta39 = ["Ensalada", "Sopa", "Sándwich"];
var pregunta40 = ["Helado", "Tarta", "Galletas"];
var pregunta41 = ["Café", "Té", "Chocolate"];
var pregunta42 = ["Agua", "Jugo", "Refresco"];
var pregunta43 = ["Fútbol", "Básquetbol", "Tenis"];
var pregunta44 = ["Ciclismo", "Natación", "Voleibol"];
var pregunta45 = ["Golf", "Rugby", "Fórmula 1"];
var pregunta46 = ["Gimnasia", "Boxeo", "Artes marciales"];
var pregunta47 = ["Ballet", "Hip-hop", "Danza contemporánea"];
var pregunta48 = ["Jazz", "Rock", "Clásica"];
var pregunta49 = ["Pop", "Reguetón", "Electrónica"];
var pregunta50 = ["Rap", "Blues", "Flamenco"];

var contador = 0;
var frutaAnterior = 'Esta es la primera vez y estoy vacio :(';
var elementoAnterior = '';
var tipoAnterior = '';
var contadorDeAcierto = 0;

function elegirArray() {
    return 'pregunta' + Math.floor(Math.random() * 51);
}


function crearElementos() {
    let boton = document.getElementById("start");
    // boton.style.display='none';
    let arrayElegido = elegirArray();
    alert(arrayElegido);

    let desordenadoA = [];
    let desordenadoB = [];
    desordenadoA = window[arrayElegido];
    desordenadoB = window[arrayElegido];
    desordenadoA = [...desordenadoA].sort(() => Math.random() - 0.5);
    desordenadoB = [...desordenadoB].sort(() => Math.random() - 0.5);


    for (let flor = 0; flor < arrayElegido.length; flor++) {
        let divPregunta = document.getElementById("pregunta" + flor);
        divPregunta.style.backgroundColor = 'lightblue';
        divPregunta.style.color = 'lightblue';
        let divRespuesta = document.getElementById("respuesta" + flor);
        divRespuesta.style.backgroundColor = 'orange';
        divRespuesta.style.color = 'orange';
        divPregunta.textContent = desordenadoA[flor];
        divRespuesta.textContent = desordenadoB[flor];
    }

}

function relacionar(elemento) {
    let cadena = elemento.slice(0, elemento.length - 1);
    if (tipoAnterior != cadena) {

        tipoAnterior = cadena;
        alert(elemento);
        let frutita = document.getElementById(elemento).textContent;
        let eleNew = document.getElementById(elemento);
        let eleOld = document.getElementById(elementoAnterior);
        if (contador == 0) {
            frutaAnterior = frutita;
            elementoAnterior = elemento;
            contador++;
        } else {
            if (frutaAnterior == frutita) {
                eleNew.style.color = 'black';
                eleOld.style.color = 'black';
                contador = 0;
                contadorDeAcierto++;
                if (contadorDeAcierto == 3) {
                    ganaste();
                }
            } else {
                eleNew.style.color = 'black';
                eleOld.style.color = 'black';
                contador = 0;
                contadorDeAcierto = 0;
                let y = document.querySelectorAll(".variablles");
                setTimeout(() => {
                    for (let i = 0; i < y.length; i++) {
                        if (i >= 0 && i <= 2) {
                            y[i].style.color = 'lightblue';
                        } else {
                            y[i].style.color = 'orange';
                        }
                    }
                    console.log("Un segundo");

                }, 1000);
            }
        }
    } else {
        alert("Debe seleccionr el contrario");
    }

}

function ganaste() {
    alert("Eres listísimo");
    let boton = document.createElement("button");

    boton.textContent = "Play Again";

    boton.className = "mi-boton";

    boton.id = "restart";
    let padre = document.getElementById("padre");
    padre.appendChild(boton);
    boton.addEventListener("click", function () {
        crearElementos();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start").addEventListener("click", crearElementos);
    document.getElementById("pregunta0").addEventListener("click", () => relacionar("pregunta0"));
    document.getElementById("pregunta1").addEventListener("click", () => relacionar("pregunta1"));
    document.getElementById("pregunta2").addEventListener("click", () => relacionar("pregunta2"));
    document.getElementById("respuesta0").addEventListener("click", () => relacionar("respuesta0"));
    document.getElementById("respuesta1").addEventListener("click", () => relacionar("respuesta1"));
    document.getElementById("respuesta2").addEventListener("click", () => relacionar("respuesta2"));
});