var valores = [];

function enviarNumeros(event) {
    const numero = (document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    const numeroInput = document.getElementById("numero");

    console.log(valores);
    event.preventDefault();
    if (parseFloat(numero) > 0 && numero !== 'n') {
        valores.push(parseFloat(numero));
        numeroInput.value = '';
        console.log(valores);
    } else if (numero == 'n') {
        media();
    } else {
        resultado.textContent = "Introduzca valores numéricos válidos o 'n' para calcular la media.";

    }

    function media() {
        const resultado = document.getElementById("resultado");
        if (numero == 'n') {
            let suma = 0;
            let contador = 0;
            let mediaa = 0;
            for (let index = 0; index < valores.length; index++) {
                suma += valores[index];
                contador++;
            }
            mediaa = suma / contador;
            resultado.textContent = "La media es: " + mediaa;
        }
    }

}