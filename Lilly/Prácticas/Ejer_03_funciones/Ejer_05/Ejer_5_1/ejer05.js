function media(array) {
    console.log(array);
    let numerosMedia = [];
    numerosMedia = array;
    let suma = 0;
    for (let index = 0; index < numerosMedia.length; index++) {
        suma += numerosMedia[index];
    }
    console.log("La suma" + suma);
    let mediaTotal = suma / numerosMedia.length;
    document.getElementById("resultado2").textContent = "La media es: " + mediaTotal;
    console.log(media);

}

function almacenarNumeros() {
    const numeros = document.getElementById("valor1");
    const resultado = numeros.value;
    let array = resultado.split(',').map(Number);
    console.log(array);
    media(array);
}

window.onload = function () {
    document.getElementById("start").addEventListener("click", almacenarNumeros)
}