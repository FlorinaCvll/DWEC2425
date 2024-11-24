//const rellenarBarcos = document.getElementById("rellenarBarcos");
//const construirArray = document.getElementById("construirArray");
const tamanioMax = 10;
const barcoDe3 = [];
const barcoDe4 = [];
const barcoDe5 = [];
const vertical = 1;
const horizontal = 2;
let horientacion;
let barquito = "3";
let barquito4 = "4";
let barquito5 = "5";
let arrayBarcos = [];
let posicionesDeLosBarcos2 = [];
let numeroVariables = 0;
let yaEjecutadoConstruirArray = false;
let yaEjecutadoRellenarBarcos = false;

//Esta parte del codigo nos permite ocultar o mostrar el tablero
function mostrarArray() {
    if (yaEjecutadoConstruirArray == true) {
        //almacenamos en columnas todo los nombre que comiencen con el conmbre columnas del html
        const columnas = document.querySelectorAll("[id^='columnas']");
        // Recorre  cada columna y cambia su visibilidad
        columnas.forEach(function (columna) {
            if (columna.style.display === "none") {
                columna.style.display = "block"; // Muestra la columna
            } else {
                columna.style.display = "none"; // Oculta la columna
            }

        });
        console.log("Se muestra el Array");
    }
}

//Crea el array principal del tablero, donde se colocarán más adelante los barcos
function construirArray() {
    if (!yaEjecutadoConstruirArray) {
        yaEjecutadoConstruirArray = true;

        for (let i = 0; i < tamanioMax; i++) {
            let arrayRelleno = []; // Crea un nuevo array en cada iteración
            for (let f = 0; f < tamanioMax; f++) {
                arrayRelleno.push(undefined);
            }
            arrayBarcos.push(arrayRelleno);
        }
        return console.log(arrayBarcos);
    }
};
//Función que genera un barco de tres posiciones con las condiciones especificas
//Convierto el array a ToString y luego separo por cada dos unidades con split y
//lo vuelvo a almacenar en otro array que retorno
//Para compararlo más adelante, es cutre, si, es lo que hay
function generarBarcoDeTresPosiciones() {
    horientacion = Math.floor(Math.random() * 2) + 1;
    let fila = Math.floor(Math.random() * 10);
    let columna = Math.floor(Math.random() * 10);
    barcoDe3.length = 0;
    if (fila > 7 && horientacion == vertical) {
        barcoDe3.push([fila, columna]);
        barcoDe3.push([fila - 1, columna]);
        barcoDe3.push([fila - 2, columna]);
    } else if (fila <= 7 && horientacion == vertical) {
        barcoDe3.push([fila, columna]);
        barcoDe3.push([fila + 1, columna]);
        barcoDe3.push([fila + 2, columna]);
    } else if (columna > 7 && horientacion == horizontal) {
        barcoDe3.push([fila, columna]);
        barcoDe3.push([fila, columna - 1]);
        barcoDe3.push([fila, columna - 2]);
    } else if (columna <= 7 && horientacion == horizontal) {
        barcoDe3.push([fila, columna]);
        barcoDe3.push([fila, columna + 1]);
        barcoDe3.push([fila, columna + 2]);
    }
    string3 = barcoDe3.toString();
    const string3Split = string3.split(",");
    const numerosAgrupadosDe3 = [];
    for (let i = 0; i < string3Split.length; i += 2) {
        if (i + 1 < string3Split.length) {
            const grupo = string3Split[i] + string3Split[i + 1];
            numerosAgrupadosDe3.push(grupo);
        }
    }
    return numerosAgrupadosDe3;
}

//Función que genera un barco de cuatro posiciones con las condiciones especificas
//Convierto el array a ToString y luego separo por cada dos unidades con split
//lo vuelvo a almacenar en otro array que retorno
//y compararlo más adelante, es cutre, si, es lo que hay
function generarBarcoDeCuatroPosiciones() {
    horientacion = Math.floor(Math.random() * 2) + 1;
    let fila = Math.floor(Math.random() * 10);
    let columna = Math.floor(Math.random() * 10);
    barcoDe4.length = 0;
    if (fila > 6 && horientacion == vertical) {
        barcoDe4.push([fila, columna]);
        barcoDe4.push([fila - 1, columna]);
        barcoDe4.push([fila - 2, columna]);
        barcoDe4.push([fila - 3, columna]);
    } else if (fila <= 6 && horientacion == vertical) {
        barcoDe4.push([fila, columna]);
        barcoDe4.push([fila + 1, columna]);
        barcoDe4.push([fila + 2, columna]);
        barcoDe4.push([fila + 3, columna]);
    } else if (columna > 6 && horientacion == horizontal) {
        barcoDe4.push([fila, columna]);
        barcoDe4.push([fila, columna - 1]);
        barcoDe4.push([fila, columna - 2]);
        barcoDe4.push([fila, columna - 3]);
    } else if (columna <= 6 && horientacion == horizontal) {
        barcoDe4.push([fila, columna]);
        barcoDe4.push([fila, columna + 1]);
        barcoDe4.push([fila, columna + 2]);
        barcoDe4.push([fila, columna + 3]);
    }
    string4 = barcoDe4.toString();
    const string4Split = string4.split(",");
    const numerosAgrupadosDe4 = [];
    for (let i = 0; i < string4Split.length; i += 2) {
        if (i + 1 < string4Split.length) {
            const grupo = string4Split[i] + string4Split[i + 1];
            numerosAgrupadosDe4.push(grupo);
        }
    }
    return numerosAgrupadosDe4;
}

//Función que genera un barco de cinco posiciones con las condiciones especificas
//Convierto el array a ToString y luego separo por cada dos unidades con split
//lo vuelvo a almacenar en otro array que retorno
//Para compararlo más adelante, es cutre, si, es lo que hay
function generarBarcoDeCincoPosiciones() {
    horientacion = Math.floor(Math.random() * 2) + 1;
    let fila = Math.floor(Math.random() * 10);
    let columna = Math.floor(Math.random() * 10);
    barcoDe5.length = 0;
    if (fila > 5 && horientacion == vertical) {
        barcoDe5.push([fila, columna]);
        barcoDe5.push([fila - 1, columna]);
        barcoDe5.push([fila - 2, columna]);
        barcoDe5.push([fila - 3, columna]);
        barcoDe5.push([fila - 4, columna]);
    } else if (fila <= 5 && horientacion == vertical) {
        barcoDe5.push([fila, columna]);
        barcoDe5.push([fila + 1, columna]);
        barcoDe5.push([fila + 2, columna]);
        barcoDe5.push([fila + 3, columna]);
        barcoDe5.push([fila + 4, columna]);
    } else if (columna > 5 && horientacion == horizontal) {
        barcoDe5.push([fila, columna]);
        barcoDe5.push([fila, columna - 1]);
        barcoDe5.push([fila, columna - 2]);
        barcoDe5.push([fila, columna - 3]);
        barcoDe5.push([fila, columna - 4]);
    } else if (columna <= 5 && horientacion == horizontal) {
        barcoDe5.push([fila, columna]);
        barcoDe5.push([fila, columna + 1]);
        barcoDe5.push([fila, columna + 2]);
        barcoDe5.push([fila, columna + 3]);
        barcoDe5.push([fila, columna + 4]);
    }
    string5 = barcoDe5.toString();
    const string5Split = string5.split(",");
    const numerosAgrupadosDe5 = [];

    for (let i = 0; i < string5Split.length; i += 2) {
        if (i + 1 < string5Split.length) {
            const grupo = string5Split[i] + string5Split[i + 1];
            numerosAgrupadosDe5.push(grupo);
        }
    }
    return numerosAgrupadosDe5;
}

//Funcion que nos permite comprobar mediante some si los barcos chocan en el talbero
//Generando un nuevo barco en caso de que asi sea. El barco de 5 no se genera más que una vez
//lo vuelvo a almacenar en otro array que retorno
//Ya que al ser el más grande decidí que el resto se organizaran en base a el
function comprobarBarcos2() {
    if (!yaEjecutadoRellenarBarcos && yaEjecutadoConstruirArray == true) {
        yaEjecutadoRellenarBarcos = true;
        generarBarcoDeCincoPosiciones();
        generarBarcoDeCuatroPosiciones();
        generarBarcoDeTresPosiciones();
        let barcoDeCinco = generarBarcoDeCincoPosiciones();
        let barcoDeCuatro = generarBarcoDeCuatroPosiciones();
        let barcoDeTres;

        do {
            barcoDeCuatro = generarBarcoDeCuatroPosiciones();
        } while (barcoDeCinco.some((elemento) => barcoDeCuatro.includes(elemento)));
        do {
            barcoDeTres = generarBarcoDeTresPosiciones();
        } while (
            barcoDeCuatro.some((elemento) => barcoDeTres.includes(elemento)) ||
            barcoDeCinco.some((elemento) => barcoDeTres.includes(elemento))
            );
        console.log(barcoDe5);
        console.log(barcoDe4);
        console.log(barcoDe3);
        for (let i = 0; i < barcoDe5.length; i++) {
            const [fila, columna] = barcoDe5[i];
            arrayBarcos[fila][columna] = barquito5;
        }
        for (let i = 0; i < barcoDe4.length; i++) {
            const [fila, columna] = barcoDe4[i];
            arrayBarcos[fila][columna] = barquito4;
        }
        for (let i = 0; i < barcoDe3.length; i++) {
            const [fila, columna] = barcoDe3[i];
            arrayBarcos[fila][columna] = barquito;
        }
        console.log(arrayBarcos);
    }
}

function rellenarBarcos() {
    comprobarBarcos2();
    for (let i = 0; i < arrayBarcos.length; i++) {
        for (let f = 0; f < arrayBarcos.length; f++) {
            let casilla = arrayBarcos[i][f];
            let casillaElemento = document.getElementById("hijoColumnas" + i + "-" + f);
            casillaElemento.addEventListener("click", function () {
                if (casilla === barquito5) {
                    casillaElemento.classList.add("barco5");
                } else if (casilla === barquito4) {
                    casillaElemento.classList.add("barco4");

                } else if (casilla === barquito) {
                    casillaElemento.classList.add("barco3");

                } else {
                    casillaElemento.classList.add("agua");
                }
                casillaElemento.style.pointerEvents = "none";
            });
        }
    }
}

window.onload = function () {
    document.getElementById("construirArray").addEventListener("click", construirArray);
    document.getElementById("mostrarArray").addEventListener("click", mostrarArray);
    document.getElementById("rellenarBarcos").addEventListener("click", rellenarBarcos);
}
  
  
  