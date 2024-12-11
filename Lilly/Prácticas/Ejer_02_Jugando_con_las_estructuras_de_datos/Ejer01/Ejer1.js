window.onload = function () {
    function numeroRandom() {
        let numerosAleatorios = [];
        let tamanio = 16;
        let sinRepetir = [];


        for (let index = 0; index < tamanio; index++) {
            let aleatorio = parseInt(Math.random() * 16);
            sinRepetir.push(aleatorio);
            do {
                aleatorio = parseInt(Math.random() * 16);

            } while (numerosAleatorios.includes(aleatorio))

            //console.log(aleatorio);
            if (aleatorio == 10) {
                aleatorio = "A";
            } else if (aleatorio == 11) {
                aleatorio = "B";
            } else if (aleatorio == 12) {
                aleatorio = "C";
            } else if (aleatorio == 13) {
                aleatorio = "D";
            } else if (aleatorio == 14) {
                aleatorio = "E";
            } else if (aleatorio == 15) {
                aleatorio = "F";
            } else {
                aleatorio = aleatorio;
            }
            numerosAleatorios.push(aleatorio);
        }
        console.log(sinRepetir);

        for (let index = 0; index < numerosAleatorios.length; index++) {
            document.getElementById("numeroHexa" + index).textContent =
                numerosAleatorios[index];
        }
    }

    numeroRandom();
}

