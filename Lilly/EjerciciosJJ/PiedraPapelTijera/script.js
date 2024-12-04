function jugar(eleccionUsuario) {
    const opciones = ["piedra", "papel", "tijera"];
    const eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];

    // Determinar el resultado
    let resultado = "";
    if (eleccionUsuario === eleccionMaquina) {
        resultado = "Empate. Habéis elegido " + eleccionUsuario + ".";
    } else if (
        (eleccionUsuario === "piedra" && eleccionMaquina === "tijera") ||
        (eleccionUsuario === "papel" && eleccionMaquina === "piedra") ||
        (eleccionUsuario === "tijera" && eleccionMaquina === "papel")
    ) {
        resultado = "Has ganado! Elegiste " + eleccionUsuario + " y la máquina eligió " + eleccionMaquina + ".";
    } else {
        resultado = "Has perdido... Elegiste " + eleccionUsuario + " y la máquina eligió " + eleccionMaquina + ".";
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = resultado;
}
