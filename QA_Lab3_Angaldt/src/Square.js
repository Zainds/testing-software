import { Shape } from './Shape.js';

/**
 * @class Square
 * @extends Shape
 * @classdesc Класс, представляющий квадрат.
 */
export class Square extends Shape {
    /**
     * Создает квадрат с заданной длиной стороны.
     * @param {number} sideLength Длина стороны квадрата.
     */
    constructor(sideLength) {
        super();
        this.sideLength = sideLength;
    }

    /**
     * Вычисляет площадь квадрата.
     * Формула: `S = sideLength²`
     * @returns {number} Площадь квадрата.
     */
    area() {
        return this.sideLength ** 2;
    }
}
