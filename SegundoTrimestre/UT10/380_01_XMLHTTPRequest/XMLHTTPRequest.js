function cargarXMLDoc() {
    let xhttp = new XMLHttpRequest();
    document.getElementById("demo").innerHTML = "Texto cargado de forma asincrona<br>";
    xhttp.onreadystatechange = function () {
        alert("-Hola mundo --> " + xhttp.readyState);
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                document.getElementById("demo").innerHTML += "<br>" + xhttp.responseText.replace(/\n/g, "<br>");
            }
        }
    };
    xhttp.open("GET", "Hello.txt", true);
    xhttp.send();
}

window.onload = function () {
    document.getElementById("pulsaDemo").addEventListener("click", cargarXMLDoc, true);
}