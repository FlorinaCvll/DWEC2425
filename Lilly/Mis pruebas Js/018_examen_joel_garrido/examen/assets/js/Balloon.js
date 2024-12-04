class Balloon {
    id
    time
    color

    static currentId = 0

    constructor(time, color) {
        this.id = ++Balloon.currentId
        this.time = time
        this.color = color
    }

}

export {Balloon}