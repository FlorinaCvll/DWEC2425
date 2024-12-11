window.onload = function () {
    function numeroRandom() {
        let numerosAleatorios = [];
        let tamanio = 16;
        let sinRepetir = [];

//Este bucle nos permite generar numeros aleatorios y comprobar si se 
//encuentran dentro del array, en esa caso lo evalua y vuelve a generar otro 
//numero
        let cadena = "0123456789ABCDEF";
        $contador = 0;
        while (numerosAleatorios.length < tamanio) {
            let aleatorio = Math.floor(Math.random() * 16);
            if (!numerosAleatorios.includes(aleatorio)) {
                numerosAleatorios.push(aleatorio);
            }
        }
        console.log(numerosAleatorios);


        /*Aqui solo recorremos el array creado anteriormente y asignamos cada valor
        a un div de nuestro html al que llamamos numeroHexa* */
        for (let index = 0; index < numerosAleatorios.length; index++) {
            document.getElementById("numeroHexa" + index).textContent =
                cadena.charAt(numerosAleatorios[index]);
            console.log(cadena.charAt(numerosAleatorios[index]));
        }
    }

    numeroRandom();
}
;
