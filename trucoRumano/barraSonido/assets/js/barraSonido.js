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
                if (i < newRandom) {
                    const aux = 1 - i / newRandom;
                    const color = `rgba(0, 0, 255, ${aux})`;
                    celda.style.backgroundColor = color;
                } else {
                    celda.style.backgroundColor = 'rgba(0, 0, 255, 0)';
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