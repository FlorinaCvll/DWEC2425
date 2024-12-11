//  5.1

function calcular() {
    function media(...numeros) {
        let num = 0;
        for (let n of numeros) {
            num += n;
        }
        return num / numeros.length;
    }

    console.log(media(40, 20));
}

// 5.2
function visualizarVehiculos() {
    function vehiculos(cilindrada, peso, pasajeros, climatizador, radar, automatico) {
        alert(`Cilindrada: ${cilindrada}`);
        alert(`Peso : ${peso}`);
        alert(`Numero de pasajeros: ${pasajeros || 'N/A'}`);
        alert(`Climatizador: ${climatizador || 'SI/NO'}`);
        alert(`Radar: ${radar || 'SI/NO'}`);
        alert(`Piloto automatico: ${automatico || 'SI/NO'}`);
    }

    const tipoVeh = prompt("Tipo vehiculo(Coche, Sidecar, Moto, Barco, Avión):");

    switch (tipoVeh) {
        case "Moto":
            const cilindradaM = prompt("Cilindrada:");
            const pesoM = prompt("Peso:");
            vehiculos(cilindradaM, pesoM, null, false, false, false);
            break;
        case "Sidecar":
            const cilindradaS = prompt("Cilindrada:");
            const pesoS = prompt("Peso:");
            const pasajerosS = prompt("Pasajeros:");
            vehiculos(cilindradaS, pesoS, pasajerosS, false, false, false);
            break;
        case "Coche":
            const cilindradaC = prompt("Cilindrada:");
            const pesoC = prompt("Peso:");
            const pasajerosC = prompt("Pasajeros:");
            const climatizadorC = prompt("Climatizador: ");
            vehiculos(cilindradaC, pesoC, pasajerosC, climatizadorC, false, false);
            break;
        case "Barco":
            const cilindradaB = prompt("Cilindrada:");
            const pesoB = prompt("Peso:");
            const pasajerosB = prompt("Pasajeros:");
            const climatizadorB = prompt("Climatizador: ");
            const radarB = prompt("Radar:");
            vehiculos(cilindradaB, pesoB, pasajerosB, climatizadorB, radarB, false);
            break;
        case "Avión":
            const cilindradaA = prompt("Cilindrada:");
            const pesoA = prompt("Peso:");
            const pasajerosA = prompt("Pasajeros:");
            const climatizadorA = prompt("Climatizador: ");
            const radarA = prompt("Radar:");
            const automaticoA = prompt("Automatico:");
            vehiculos(cilindradaA, pesoA, pasajerosA, climatizadorA, radarA, automaticoA);
            break;
        default:
            alert("ERROR");
            break;
    }
}

// 5.3// 5.4
function visualizarVehiculosSoloUnaRespuesta() {
    function vehiculos(cilindrada, peso, pasajeros, climatizador, radar, automatico) {
        alert(`Cilindrada: ${cilindrada}`);
        alert(`Peso : ${peso}`);
        alert(`Numero de pasajeros: ${pasajeros || 'N/A'}`);
        alert(`Climatizador: ${climatizador || 'SI/NO'}`);
        alert(`Radar: ${radar || 'SI/NO'}`);
        alert(`Piloto automatico: ${automatico || 'SI/NO'}`);
    }

    const tipoVeh = prompt("Ingrese las respuestas separadas con espacios y el nombre del vehiculo:");

    const respuesta = tipoVeh.split(' ');
    const vehiculo = respuesta[0];

    switch (vehiculo) {
        case "Moto":
            vehiculos(...respuesta.slice(1, 4), null, false, false, false);
            break;
        case "Sidecar":
            vehiculos(...respuesta.slice(1, 5), false, false, false);

            break;
        case "Coche":
            vehiculos(...respuesta.slice(1, 6), false);

            break;
        case "Barco":
            vehiculos(...respuesta.slice(1, 7));

            break;
        case "Avión":
            vehiculos(...respuesta.slice(1, 8));
            break;
        default:
            alert("ERROR");
            break;
    }
}


window.onload = function () {
    document.getElementById("media").addEventListener("click", calcular);
    document.getElementById("visualizarVehiculos").addEventListener("click", visualizarVehiculos);
    document.getElementById("visualizarVehiculosSoloUnaRespuesta").addEventListener("click", visualizarVehiculosSoloUnaRespuesta);

}
