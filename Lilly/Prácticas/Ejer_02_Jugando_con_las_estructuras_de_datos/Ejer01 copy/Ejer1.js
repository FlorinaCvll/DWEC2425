window.onload = function () {
    function numeroRandom() {
        let numerosAleatorios = [];
        let tamanio = 16;
        let sinRepetir = [];

//Este bucle nos permite generar numeros aleatorios y comprobar si se 
//encuentran dentro del array, en esa caso lo evalua y vuelve a generar otro 
//numero
        while (numerosAleatorios.length < tamanio) {
            let aleatorio = Math.floor(Math.random() * 16);
            if (!numerosAleatorios.includes(aleatorio)) {
                numerosAleatorios.push(aleatorio);
            }
        }
        /*Con este bucle, generamos un nuevo array donde le pasamos las condiciones
        deseadas respecto a las letras modificando el array anterior en una "Copia" */
        for (let index = 0; index < numerosAleatorios.length; index++) {
            let numeroLetras = numerosAleatorios[index];
            //console.log(aleatorio);
            if (numerosAleatorios[index] == 10) {
                numeroLetras = "A";
            } else if (numerosAleatorios[index] == 11) {
                numeroLetras = "B";
            } else if (numerosAleatorios[index] == 12) {
                numeroLetras = "C";
            } else if (numerosAleatorios[index] == 13) {
                numeroLetras = "D";
            } else if (numerosAleatorios[index] == 14) {
                numeroLetras = "E";
            } else if (numerosAleatorios[index] == 15) {
                numeroLetras = "F";
            } else {
                numeroLetras = numeroLetras;
            }
            sinRepetir.push(numeroLetras);
        }
        /*Aqui solo recorremos el array creado anteriormente y asignamos cada valor
        a un div de nuestro html al que llamamos numeroHexa* */
        for (let index = 0; index < sinRepetir.length; index++) {
            document.getElementById("numeroHexa" + index).textContent =
                sinRepetir[index];
            console.log(sinRepetir);
        }
    }

    numeroRandom();
};
