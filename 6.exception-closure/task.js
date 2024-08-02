function parseCount(number) {
    if (!Number.parseFloat(number)) {
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(number);
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(triangleA, triangleB, triangleC) {
        if ((triangleA + triangleB < triangleC) || (triangleC + triangleB < triangleA) ||
            (triangleA + triangleC < triangleB)) {
            throw new Error("Треугольник с такими сторонами не существует")
        }

        this.triangleA = triangleA;
        this.triangleB = triangleB;
        this.triangleC = triangleC;
    }

    get perimeter() {
        return this.triangleA + this.triangleB + this.triangleC;
    }

    get area() {
        let halfPerimeter = this.perimeter / 2
        let s = Math.sqrt(halfPerimeter * (halfPerimeter - this.triangleA) *
            (halfPerimeter - this.triangleB) * (halfPerimeter - this.triangleC));
        return +s.toFixed(3);
    }
}

function getTriangle(triangleA, triangleB, triangleC) {
    try {
        return new Triangle(triangleA, triangleB, triangleC);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует'
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }
}