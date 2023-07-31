class Cell {
    constructor() {
        this.mark = "z"
    }

    isEmpty() {
        return this.mark == "Z"
    }


    markCell(symbol) {
        if (this.isEmpty()) {
            this.mark = symbol
            return true
        }
        return false

    }
}

module.exports = Cell