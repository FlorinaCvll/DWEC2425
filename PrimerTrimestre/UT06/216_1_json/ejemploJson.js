function jsonAJavaScript() {
    const estructuraJson =
        "{" +
        '   "titulo":" Manual de UFOLOGIA",            ' +
        '   "nserie": "187C2",                         ' +
        '   "autores":["Pedro Martinez", "Ana León"],  ' +
        '   "editorial":{                              ' +
        '   "nombre":"inexistente S.A.",               ' +
        '   "pais": "España"                           ' +
        "   }," +
        '   "edicion":2,                               ' +
        '   "ensayo": true                             ' +
        "}";

    alert(estructuraJson);
    console.log(estructuraJson);
    console.log("••••••••••••••••••••••••••••••");
    const obj = JSON.parse(estructuraJson);
    console.log(obj.titulo);
    console.log(obj.nserie);
    console.log(obj.autores);
    console.log(obj.editorial.nombre);
    console.log(obj.editorial.pais);
    console.log(obj.edicion);
    console.log(obj.ensayo);
}

function JavaScriptAJson() {
    const musico1 = {
        nombre: "Bob",
        apellido: "Dylan",
        fecha_nacimiento: {
            dia: 24,
            mes: 4,
            anio: 1941,
        },
        disco: ["Highway 61 Revisited", "Bonlde on Blonde", "Self Portrait"]
    }
    console.log(JSON.stringify(musico1, 'false', 10));
    console.log(JSON.stringify(musico1, ["nombre", "apellido"], 3));
}


window.onload = function () {
    document
        .getElementById("jsonAJS")
        .addEventListener("click", jsonAJavaScript);
    document
        .getElementById("JSaJson")
        .addEventListener("click", JavaScriptAJson);
};
