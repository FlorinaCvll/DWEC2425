window.onload = function () {
    function numerosRandom() {
        let maximo = 100;
        let casillas = 26;
        let minimo = 0;
        let arrayAleatorios = [];
        let columnas = 9;
        let contador = 0;
        let incremento = 9;
        let incrementoDe3 = 3;
        let minimoDe3 = 1;
        let numeroVariables = 0;
        let arrayColumna = [];
        let contador2 = 0;
        let numeroVariables2 = 0;
        //Este array me sirve para crear un array de 1 a 99
        for (let index = 1; index < maximo; index++) {
            arrayAleatorios.push(index);
        }
        console.log(arrayAleatorios);
        //Estos bucles nos permite crear otro array pero con valores
        //aleatorios usando el anterior.   Con un incremento de +10 por interraccion
        //Tenemos un do while que nos evita numeros repetidos en el array
        //Ponemos un contador que nos liimita a 3 numeros aleatorios por incremento de +9
        for (let index = 0; index <= casillas; index++) {
            do {
                posicionArrayRandom = Math.floor(
                    Math.random() * (incremento - minimo) + minimo
                );
            } while (arrayColumna.includes(arrayAleatorios[posicionArrayRandom]));
            let valor = arrayAleatorios[posicionArrayRandom];
            arrayColumna.push(valor);
            contador++;

            if (contador == 3) {
                contador = 0;
                incremento += 10;
                minimo += 10;
            }
        }
        arrayColumna.sort((a, b) => a - b);
        console.log(arrayColumna);
        //Aqui metemos los espacios en otras posiciones aleatorias apra asi conseguir los huecos en el carton
        //Ponemos el límite de las columnas, por que si no se va de madre el array
        for (let index = 0; index < columnas; index++) {
            numeroVariables2 = Math.floor(Math.random() * 2) + 1;
            let posicionArrayRandom2 = Math.floor(
                Math.random() * (incrementoDe3 - minimoDe3) + minimoDe3
            );
            console.log("Valor con incremento" + posicionArrayRandom2);
            if (numeroVariables2 == 1) {
                contador = 0;
                arrayColumna[posicionArrayRandom2] = " ";
                incrementoDe3 += 3;
                minimoDe3 += 3;
            } else if (numeroVariables2 == 2) {
                let posicion = posicionArrayRandom2 - 1;
                arrayColumna[posicion] = " ";
                arrayColumna[posicionArrayRandom2] = " ";
                incrementoDe3 += 3;
                minimoDe3 += 3;
            }
        }
        console.log(arrayColumna);

        for (let index = 0; index < arrayColumna.length; index++) {
            let casilla = arrayColumna[index];

            document.getElementById("hijoColumnas" + index).textContent = casilla;
        }
    }

    numerosRandom();
};
