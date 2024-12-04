function dale() {
    let hola = "Mariposa";
    let hola2 = "mariposa";
    console.log(hola);
    console.log("La palabra mariposa tiene: " + hola.length);
    console.log("Busca el valor 5:" + hola.charAt(5));
    console.log("Pasa a minusculas:  " + hola.toLowerCase());
    console.log("Pasa a mayusculas:  " + hola.toUpperCase());
    console.log("Busca el valor p: " + hola2.indexOf("p"));
    console.log("Busca el valor i: " + hola2.lastIndexOf("i"));

    let remplaza = hola.replace("po", "sa");

    console.log("Palabra remplazada: " + remplaza);

    let palabra = "    hola   ";
    console.log(palabra);
    console.log("-" + palabra + "-");
    console.log("-" + palabra.trim() + "-");

    console.log("Extrae la palabra substr: " + hola.substr(2, 6));
    console.log("Extrae la palabra slice: " + hola.slice(2, 6));
    console.log("Palabra: " + String.fromCharCode(52, 69, 66));


}

window.onload = function () {
    document.getElementById("dale").addEventListener("click", dale);
}