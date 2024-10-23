function mapaForeach() {
    const provincia = new Map();
    provincia.set("5", "Ávila").set("28", "Madrid").set("34", "Palencia").set("41", "Sevilla");
    provincia.forEach(function (valor, clave) {
        console.log(`clave: ${clave}, Valor: ${valor}`);
    });
}


window.onload = function () {
    document.getElementById("mapaForeach").addEventListener("click", mapaForeach);
}