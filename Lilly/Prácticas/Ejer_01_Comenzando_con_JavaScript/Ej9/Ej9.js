function modificarCadena() {
    let cadenaEntrada = document.getElementById("texto").value;
    const resultado = document.getElementById("resultadoCadenaTexto");

    let palabras = cadenaEntrada.split(" ");

    if (palabras.length >= 2) {
        let nombre = palabras[0].charAt(0).toUpperCase() + palabras[0].slice(1);
        let apellido1 = palabras[1].charAt(0).toUpperCase() + palabras[1].slice(1);
        let apellido2 = "";

        if (palabras.length > 2) {
            apellido2 = palabras[2].charAt(0).toUpperCase() + palabras[2].slice(1);
        }

        resultado.textContent = `${nombre} ${apellido1} ${apellido2}`;
    } else {
        resultado.textContent = "Por favor, ingrese un nombre y al menos un apellido.";
    }
}