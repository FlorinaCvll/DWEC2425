function mapa() {
    let lista = new Map();

    lista.set(1, "Patata").set(2, "Tomate").set(3, "Cebolla").set(4, "Berenjena").set(5, "Pimiento");

    console.log(lista);
    console.log("Busco valor 3: " + lista.get(3));
    console.log("Borro valor 2: " + lista.delete(2));
    console.log(lista);
    console.log("Busco valor 4 has: " + lista.has(4));
    console.log("Total elementos: " + lista.size);


    for (let elem of lista) {
        console.log(elem.join(" "));
    }
}

function set() {

    let lista = new Set();

    lista.add("Patata").add("Tomate").add("Cebolla").add("Berenjena").add("Pimiento").add("Zanahoria");

    console.log(lista);
    console.log("Busco valor : " + lista.has("Cebolla"));
    console.log("Borro valor 2: " + lista.delete("Patata"));
    console.log(lista);
    console.log("Busco valor 4 has: " + lista.has("Berenjena"));
    console.log("Total elementos: " + lista.size);


    for (let elem of lista) {
        console.log(elem);
    }
}

window.onload = function () {
    document.getElementById("mapas").addEventListener("click", mapa);
    document.getElementById("set").addEventListener("click", set);

}