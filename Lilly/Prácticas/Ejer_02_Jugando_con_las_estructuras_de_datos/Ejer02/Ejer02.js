window.onload = function () {
    function numerosRandom() {
        let maximo = 100;
        let casillas = 26;
        let minimo = 1;
        let arrayAleatorios = [];
        let contador = 0;
        let incremento = 9;
        let incrementoDe3 = 3;
        let minimoDe3 = 1;
        let numeroVariables = 0;
        let arrayColumna = [];

        //Este array me sirve para crear un array de 1 a 99
        for (let index = 1; index < maximo; index++) {
            arrayAleatorios.push(index);
        }

        for (let index = 0; index <= casillas; index++) {
            numeroVariables = Math.floor(Math.random() * 2) + 1;
            let posicionArrayRandom;
            do {
                posicionArrayRandom = Math.floor(
                    Math.random() * (incremento - minimo) + minimo
                );
            } while (arrayColumna.includes(arrayAleatorios[posicionArrayRandom]));
            let valor = arrayAleatorios[posicionArrayRandom];
            arrayColumna.push(valor);
            contador++;
            let posicionArrayRandom2 = Math.floor(
                Math.random() * (incrementoDe3 - minimoDe3) + minimoDe3
            );
            if (contador == 3 && numeroVariables == 1) {
                contador = 0;
                incremento += 10;
                minimo += 10;
                arrayColumna[posicionArrayRandom2] = null;
                incrementoDe3 += 3;
                minimoDe3 += 3;
            } else if (contador == 3 && numeroVariables == 2) {
                contador = 0;
                incremento += 10;
                minimo += 10;
                let posicion = posicionArrayRandom2 - 1;
                arrayColumna[posicion] = null;
                arrayColumna[posicionArrayRandom2] = null;
                incrementoDe3 += 3;
                minimoDe3 += 3;
            }
        }
        for (let index = 0; index < arrayColumna.length; index++) {
            let casilla = arrayColumna[index];

            document.getElementById("hijoColumnas" + index).textContent = casilla;
        }
        console.log(arrayColumna);
    }

    numerosRandom();
};
