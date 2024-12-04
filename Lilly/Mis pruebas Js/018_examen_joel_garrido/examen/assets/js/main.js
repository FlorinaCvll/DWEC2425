import {Balloon} from "./Balloon.js";

let balloons = []

window.onload = () => {
    document.getElementById("add-balloon").addEventListener("click", () => {
        if (balloons.length < 3) {
            let time = parseInt(document.getElementById("balloon-time").value)
            let color = document.getElementById("balloon-color").value

            balloons.push(new Balloon(time, color))

            clearFormFields()
            renderBalloonList()
            alert("Globo añadido correctamente")
        } else {
            alert("No se pueden añadir más globos")
        }
    })

    document.getElementById("inflate-balloons").addEventListener("click", () => {
        if (balloons.length === 3) {

            let balloon1Promise = new Promise(resolve => {
                inflateBalloon(resolve)
            })

            balloon1Promise.then(() => {
                if (balloons.length > 0) {
                    endBalloons()
                    setTimeout(() => {
                        let balloon2Promise = new Promise(resolve => {
                            inflateBalloon(resolve)
                        })
                        balloon2Promise.then(() => {
                            if (balloons.length > 0) {
                                endBalloons()
                                setTimeout(() => {
                                    let balloon3Promise = new Promise(resolve => {
                                        inflateBalloon(resolve)
                                    })
                                    balloon3Promise.then(() => {
                                        endBalloons()
                                    })
                                }, 500)
                            }
                        })
                    }, 500);
                }
            })
        } else {
            alert("Se necesitan los tres globos para empezar a inflar")
        }
    })
}

function clearFormFields() {
    document.getElementById("balloon-time").value = ""
    document.getElementById("balloon-color").value = ""
}

function renderBalloonList() {
    if (balloons.length > 0) {
        balloons.forEach((e) => {
            document.querySelectorAll(`.balloon-table:nth-child(${e.id + 1}) .balloon-table-cell`)?.forEach((el, i) => {
                switch (i) {
                    case 0:
                        el.textContent = e.id;
                        break;
                    case 1:
                        el.textContent = e.time;
                        break;
                    case 2:
                        el.textContent = e.color;
                        break;
                }
            })
        })
    }
}

function endBalloons() {
    document.querySelectorAll("#current-balloon-data .balloon-data")?.forEach((el, i) => {
        switch (i) {
            case 0:
                el.textContent = "-";
                break;
            case 1:
                el.textContent = "--";
                break;
            case 2:
                el.textContent = "---";
                break;
        }
    })
    document.getElementById("balloon-image").src = ""
    document.getElementById("balloon-image").style.scale = 1
}

let inflateBalloon = resolve => {

    let balloon = balloons.shift()

    document.getElementById("balloon-image").src = `./assets/images/globo-${balloon.color}.svg`
    document.getElementById("balloon-image").style.scale = 1

    document.querySelectorAll("#current-balloon-data .balloon-data")?.forEach((el, i) => {
        switch (i) {
            case 0:
                el.textContent = balloon.id;
                break;
            case 1:
                el.textContent = balloon.time;
                break;
            case 2:
                el.textContent = balloon.color;
                break;
        }
    })

    let c = 0
    let b1 = setInterval(() => {
        if (c < balloon.time) {
            c++
            document.getElementById("balloon-image").style.scale = 1 + c * 2
        } else {
            clearInterval(b1)
            resolve()
        }
    }, 1000)

}