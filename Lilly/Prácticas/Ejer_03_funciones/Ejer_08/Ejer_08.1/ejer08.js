var acontecimientosFijos = [
    "Invención de la rueda",
    "Construcción de las pirámides de Egipto",
    "Guerras Médicas entre Grecia y Persia",
    "Conquista de Alejandro Magno",
    "Caída del Imperio Romano de Occidente",
    "Inicio de la Edad Media",
    "Batalla de Hastings",
    "Cruzadas",
    "Renacimiento",
    "Descubrimiento de América por Cristóbal Colón",
    "Revolución Científica",
    "Revolución Industrial",
    "Independencia de Estados Unidos",
    "Revolución Francesa",
    "Napoleón Bonaparte en Europa",
    "Guerras Mundiales",
    "Revolución Rusa",
    "Descolonización de África y Asia",
    "Caída del Muro de Berlín",
    "Era de la Información"
];

function ordenarAcontecimientos() {
    const inputEvents = document.getElementById("valor2");
    const eventosUsuario = inputEvents.value.split(',');
    if (eventosUsuario.length !== 5) {
        alert("Introduce exactamente 5 acontecimientos históricos.");
        return;
    }
    let sortedEventosUsuario = [...eventosUsuario].sort((a, b) => {
        let indexOfA = acontecimientosFijos.indexOf(a);
        let indexOfB = acontecimientosFijos.indexOf(b);
        return indexOfA - indexOfB;
    });

    document.getElementById("resultado2").textContent = sortedEventosUsuario;

}

window.onload = function () {
    document.getElementById("start").addEventListener("click", ordenarAcontecimientos);
}