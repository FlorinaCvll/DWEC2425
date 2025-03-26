window.onload = function () {
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function pintarColumna(columnPrefix, prevRandom, newRandom) {
        const baseId = parseInt(columnPrefix + "0", 10);

        for (let i = 0; i < 9; i++) {
            const celdaId = "celda" + (baseId + 8 - i);
            const celda = document.getElementById(celdaId);

            if (celda) {
                const delay = 1000 / (i + 1);
                if (i < newRandom) {
                    setTimeout(() => {
                        celda.classList.add('celda-lila');
                        celda.classList.remove('celda-transparente');
                    }, delay);
                } else {
                    setTimeout(() => {
                        celda.classList.add('celda-transparente');
                        celda.classList.remove('celda-lila');
                    }, delay);
                }
            }
        }
    }

    function updateColumns() {
        for (let i = 1; i <= 10; i++) {
            const newRandom = random(1, 9);
            pintarColumna(i.toString(), 0, newRandom);
        }
    }

    setInterval(updateColumns, 1000);
};