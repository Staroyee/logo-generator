class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorChoice) {
    this.color = colorChoice;
}
}

class Triangle extends Shape {
    render() {
        return ``;
    }
}

class Circle extends Shape {
    render() {
        return ``
    }
}

class Square extends Shape {
    render() {
        return ``
    }
}

module.exports = { Triangle, Circle, Square};