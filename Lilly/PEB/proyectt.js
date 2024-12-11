//Hola Flor te voy a explicar como he resuelto el examen de jj,
//seguro que hay mejores formas peo es la más sencilla que se me ocurre

//Primero inicializamos las variables en dos arrays, uno de preguntas y otro de respuestas
//Como puedes ver, cada pregunta y respuesta correcta tienen la misma posicion del array
//Ej: correctoA[2] que correponde con Redes... tiene la misma posicion que 802.11 en correctoB...
//Es cutre? si, funciona? también
var correctoA = ["Sistema Operativo", "Programacion", "Redes", "Hardware"];
var correctoB = ["futchisa", "Dart", "802.11", "M.2"];
//Estas son variables globales que nos servirán de apoyo más adelante...
//NO tengas miedo de lo que puedas almacenar en una variable global, son muy socorridas y JJ es Subrnomal
var seleccionadas = [];
var pregunta = -1;
var respuesta = -1;
var posicionA = -1;
var posicionB = -1;
const ganaste = 4;
var contadorPreguntas = 0;
var opccionPrimerSelec0 = -1;
var vueltas = 0;

function versionFlor(elemento) {
    let variable = document.getElementById(elemento).textContent;
    let cadena = elemento.slice(0, elemento.length - 1);
    let opcionCorrecta = "";
    if (cadena == "pregunta") {
        pregunta = 1;
        switch (variable) {
            case "Sistema Operativo":
                opcionCorrecta = 0;
                break;
            case "Programacion":
                opcionCorrecta = 1;
                break;
            case "Redes":
                opcionCorrecta = 2;
                break;
            case "Hardware":
                opcionCorrecta = 3;
                break;
        }
    } else {
        respuesta = 1;
        switch (variable) {
            case "futchisa":
                opcionCorrecta = 0;
                break;
            case "Dart":
                opcionCorrecta = 1;
                break;
            case "802.11":
                opcionCorrecta = 2;
                break;
            case "M.2":
                opcionCorrecta = 3;

                break;
        }
    }
    if (vueltas == 0) {
        opccionPrimerSelec0 = opcionCorrecta;
    }
    if (vueltas != 0) {
        if (pregunta != -1 || respuesta != -1) {
            console.log("Esta es la opcion que hemos seleccionado" + opccionPrimerSelec0);
            console.log("Esta es la opcion" + opcionCorrecta);

            if (opccionPrimerSelec0 == opcionCorrecta) {

                ComeOnBaby(elemento, opccionPrimerSelec0, "yes");
                opccionPrimerSelec0 = -1;
                vueltas = 0;
            } else {
                SorryBaby();
            }
        }
    } else {
        console.log("disitinto de 0");

        ComeOnBaby(elemento, opcionCorrecta);
        vueltas++;
        console.log(opccionPrimerSelec0);

    }
}

//Vamos a crear los elementos: en ets punto recorreremos los arrays anteriores y asociaremos cada uno
// al html
function crearElementos() {
    //lo primero que hacemos al pulsar el botón de start es obicamente ocultar el botón
    let boton = document.getElementById("start");
    boton.style.display = "none";
    //creamos dos arrays de apoyo y los asociamos con los correcctos
    let desordenadoA = [];
    let desordenadoB = [];
    desordenadoA = correctoA;
    desordenadoB = correctoB;

    //muy importante, aveces sort se vuelve loco y también te desordena los arrays originales, por
    //temas de direcciones de memoria. Si alguna vez te pasa (seguo que jj os pide algo desordenado)
    //si no quieres perder la referencia de tu array original, haz una copia del mismo con [...AquiTuArray]
    //Y de esta forma solo te desordenaria desordenadoA y desordenadoB
    desordenadoA = [...correctoA].sort(() => Math.random() - 0.5);
    desordenadoB = [...correctoB].sort(() => Math.random() - 0.5);

    //Una vez desordenados recorremos uno de ellos y asociamos cada uno a la posición del html div con ese id
    //respuesta0, respuuesta1... pregunta2, pregunta3.... etc
    for (let i = 0; i < desordenadoA.length; i++) {
        let pregunta = document.getElementById("pregunta" + i);
        pregunta.textContent = desordenadoA[i];
        pregunta.setAttribute("data-value", desordenadoA[i]);

        let respuesta = document.getElementById("respuesta" + i);
        respuesta.textContent = desordenadoB[i];
        respuesta.setAttribute("data-value", desordenadoB[i]);
    }
}

//Aquí viene la chica, cada vez que pulsas en un elemento llamamos a esta función
function comprobarPreguntas(elemento) {
    // variable la igualamos al texto que leemos del div ej: Redes con TEXTCONTENT!!!!!!
    let variable = document.getElementById(elemento).textContent;
    console.log(variable);

    //En mi caso quiero conocer si el elemento que hemos pinchado es pregunta o respuesta
    //Para ello uso slice que me sirve para cadenas y le resto una posicion
    //Por lo tanto ej:: respuesta0 que daria solamente como respuesta
    let cadena = elemento.slice(0, elemento.length - 1);
    console.log(cadena);

    let colorPara = "";
    //Para no tener problemas, es normal en js comparar todo con trim y tolowercase o touppercase lo que prefieras
    //trim ssi no te acuerdas nos sirve para quiar espacios, saltos de lineas y cosas raras
    variable = variable.trim().toLowerCase();
    //Es aqui donde empezamos a usar las variables globales: si es la primera vez que ves este codigo, dirigie
    //al else que corresponde a este if... :)
    if (pregunta != -1 || respuesta != -1) {
        //Me alegra saber que me haces caso... palabra clave PEPINO DE MAR
        //Solamene entraremos por aqui si ya hemos pinchado en una pregunta o en una respuesta...
        //ejemplificando con respuesta en cuanto enccuentre que la que hass seeleccionado se corresponde
        // con la posicion que ya teniamoss almacenada no iremos al siguiente iff
        if (cadena == "pregunta") {
            for (let i = 0; i < correctoA.length; i++) {
                if (correctoA[i].trim().toLowerCase() == variable) {
                    posicionA = i;
                    colorPara = posicionA;
                }
            }
        } else {
            for (let j = 0; j < correctoB.length; j++) {
                if (correctoB[j].trim().toLowerCase() == variable) {
                    posicionB = j;
                    colorPara = posicionB;
                }
            }
        }
        //Si eto se cumple CHACHI ERES GENIAL has acertado, devolvemos los valores a su valor original
        // y nos vamos a ComeOnBaby Parte2
        if (posicionA == posicionB) {
            ComeOnBaby(elemento, colorPara, "yes");
            posicionA = -1;
            posicionB = -1;
            pregunta = -1;
            respuesta = -1;
        } else {
            SorryBaby();
        }

        //Así me gusta :)
        //aquí determinamos si se ha pulsado en una pregunta o en una respuesta
        //si es pregunta la variable global pregunta la ponemos como 1, lo mismo si pincha en respuesta
        //ponemos respuesta como1
        //para ejemplificar con respuestas (es lo miso en pregunta)
        //recorremos el array de correctoA que corresponde con las reguntas
        //Y comparamos en el if si correectoA es igual que variable (acuerdate que ej seria Redes)
        //cuando encuentre que son iguales guadamos la posicion del bucle que seria la i en posicionA
        //Y al ser la primera vez que pinchamos nos vamos a la funcion ComeOnBaby... te veo alli :) (leer parte1)
    } else {
        if (cadena == "pregunta") {
            pregunta = 1;
            for (let i = 0; i < correctoA.length; i++) {
                if (variable == correctoA[i].trim().toLowerCase()) {
                    posicionA = i;
                }
            }
            ComeOnBaby(elemento, posicionA);
        } else {
            respuesta = 1;

            for (let i = 0; i < correctoB.length; i++) {
                if (variable == correctoB[i].trim().toLowerCase()) {
                    posicionB = i;
                }
            }
            ComeOnBaby(elemento, posicionB);
        }
    }
}

//parte1
//Hola de nnuevo, aui simplemente cogemos el elemento y su posicion del array para cambiarlo de color y volvemos
//a comprobarPreguntas pero en la parte del if que no vimos antes Palabra Clave PEPINO DE MAR
function ComeOnBaby(elemento, posicionColor, nice = "no") {
    let color = "white";
    switch (posicionColor) {
        case 0:
            color = "red";
            break;
        case 1:
            color = "orange";

            break;
        case 2:
            color = "lightblue";

            break;
        case 3:
            color = "lightpink";
            break;
    }

    let elementohtml = document.getElementById(elemento);

    elementohtml.style.backgroundColor = color;
    //parte2 wowow como molas hass acertado,
    //cabiamos el color como vimos antes y te felicitamos con un alert y aumentamos el contador de preguuntas
    //que ya has acertado
    //cuando las preguntas acertadas sean igual que la constante...  te felicitamos te ganarás el juego
    //Y nos vmos a playAgain... Te veo alli
    if (nice == "yes") {
        alert("Eres un Flecha Colega");
        contadorPreguntas++;
        if (contadorPreguntas == ganaste) {
            alert("GANASTE WACHO!!!!!!!!");
            playAgain();
        }
    }
}

//Holi pa mi coli.... wow como molas eres un flecha,
//creamos un botón de manera dinamica al que llamaremos Play again y lo colocaremos en el div con id padre
//crearemos un addeventlistener cuando se clicke que irá a sorryBaby y volvera a ocultar el boton que acabamos de crear
//Pobrecillo, qué poquito duró...
//Te veo en SorryBaby
function playAgain() {
    let boton = document.createElement("button");

    boton.textContent = "Play Again";

    boton.className = "mi-boton";

    boton.id = "restart";
    let padre = document.getElementById("padre");
    padre.appendChild(boton);
    boton.addEventListener("click", function () {
        SorryBaby(1);
        let boton = document.getElementById("restart");
        boton.style.display = "none";
    });
}

//SorryBaby lo viste más arriba en la funcion de coprobarPreguntas...
//La reutilizo para restablecer el juego cuando han terrminado satisfactoriamente
//Y cuando no aciertan un par de preuntas...
//En cualquier manera lo unico que varía es el mensaje.
//Si fallan nos reimos, pero en cualquiera de los dos casos, devolvemos todos los valores a sus valores originales
//(me refiero a ls variables globales)
//Y volvemos a crear los elementos de maneraa aleatoria(MUHAHAHAHAHAH Risa malvada)
function SorryBaby(again = 0) {
    let color = "white";
    for (let i = 0; i < correctoA.length; i++) {
        let pregunta = document.getElementById("pregunta" + i);
        pregunta.style.backgroundColor = color;

        let respuesta = document.getElementById("respuesta" + i);
        respuesta.style.backgroundColor = color;
    }
    pregunta = -1;
    respuesta = -1;
    posicionA = -1;
    posicionB = -1;
    if (again == 0) {
        alert("La inteligencia te persigue, pero tú eres más rápdio");
    }
    crearElementos();
}

//YA LO SE ESTO ES CUTRE, PERO ES EFICIENTE Y ES LO QUE BUSCO PARA TU EXAMEN, DARTE IDEAS SIMPLES
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start").addEventListener("click", crearElementos);
    document.getElementById("pregunta0").addEventListener("click", function () {
        versionFlor("pregunta0");
    });
    document.getElementById("pregunta1").addEventListener("click", function () {
        versionFlor("pregunta1");
    });
    document.getElementById("pregunta2").addEventListener("click", function () {
        versionFlor("pregunta2");
    });
    document.getElementById("pregunta3").addEventListener("click", function () {
        versionFlor("pregunta3");
    });
    document.getElementById("respuesta0").addEventListener("click", function () {
        versionFlor("respuesta0");
    });
    document.getElementById("respuesta1").addEventListener("click", function () {
        versionFlor("respuesta1");
    });
    document.getElementById("respuesta2").addEventListener("click", function () {
        versionFlor("respuesta2");
    });
    document.getElementById("respuesta3").addEventListener("click", function () {
        versionFlor("respuesta3");
    });
});
