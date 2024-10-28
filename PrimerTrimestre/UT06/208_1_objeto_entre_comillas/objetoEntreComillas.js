function entreComillas() {
    let libro = {
        titulo: "Manual de UFOlogía",
        "n-series": "187C2",
        autores: ["Pedro Martinez", "Ana León"], // array
        editorial: { //objeto
            nombre: "Inexistente S.A.",
            país: "España",
        },
        arrayUno: ["uno", "dos"],
        arrayDos: new Array("hola", "adios"),
        map: new Map([[1, "Jose"], [2, "Maria"], [3, "Elena"]]),
        set: new Set([1, 2, 3, 4, 5])
    };
    console.log(libro.titulo);
    console.log(libro["n-series"]);
    console.log(libro.editorial.nombre);
    console.log(libro.arrayUno);
    console.log(libro.arrayDos);
    console.log(libro.map);
    console.log(libro.set);
}

window.onload = function () {
    document.getElementById("entreComillas").addEventListener("click", entreComillas);
}