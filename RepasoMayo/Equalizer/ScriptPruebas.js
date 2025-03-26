window.onload = function () {

    function numRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function printarColumnas(ColPrefix, prevNumRand, newNumRand) {
        /*columnPrefix: Identificar la columna específica que se va a pintar. Esto se usa para construir los IDs de las celdas dentro de esa columna.
prevRandom: Aunque no se usa en el código actual, podría ser utilizado para comparar el estado anterior de la columna con el nuevo estado.
newRandom: Determinar cuántas celdas en la columna deben ser coloreadas. Este valor se genera aleatoriamente y se usa para aplicar clases CSS a las celdas correspondientes.*/
        const idBase = parseInt(ColPrefix + "0", 10); //parseInt: Convierte un string a un número entero. el 10 es la base numérica en la que se encuentra el número.
        //parseInt("123", 10); // 123
        for (let i = 0; i < 9; i++) { // i < 9 porque hay 9 celdas en cada columna.
            const idCelda = "celda" + (idBase + 8 - i); // idCelda: Identificador de la celda específica que se va a pintar.
            // idBase + 8 - i: Construye el ID de la celda específica que se va a pintar.
            // 8 - i: Se resta i de 8 para recorrer las celdas de arriba a abajo.
            const celda = document.getElementById(idCelda); // celda: Elemento de la celda específica que se va a pintar.
            // Ejemplo: document.getElementById("celda0");

            if (celda) { // Si la celda existe.
                let delay = 1000 / (i + 1); // delay: Tiempo de espera antes de pintar la celda.
                if (i < newNumRand) { // Si i es menor que newNumRand.
                    setTimeout(() => { // setTimeout: Ejecuta una función después de un tiempo determinado.
                        celda.classList.add('celda-lila'); // Añade la clase 'celda-lila' a la celda.
                        celda.classList.remove('celda-transparente'); // Elimina la clase 'celda-transparente' de la celda.
                    }, delay); // delay: Tiempo de espera antes de pintar la celda.
                } else { // Si i no es menor que newNumRand.
                    setTimeout(() => { // setTimeout: Ejecuta una función después de un tiempo determinado.
                        celda.classList.add('celda-transparente'); // Añade la clase 'celda-transparente' a la celda.
                        celda.classList.remove('celda-lila'); // Elimina la clase 'celda-lila' de la celda.
                    }, delay); // delay: Tiempo de espera antes de pintar la celda.
                }
            }
        }

    }


}