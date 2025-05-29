import { Shape } from './Shape.js';

/**
 * @class Circle
 * @extends Shape
 * @classdesc Класс, представляющий круг.
 */
export class Circle extends Shape {
    /**
     * Создает круг с заданным радиусом.
     * @param {number} radius Радиус круга.
     */
    constructor(radius) {
        super();
        this.radius = radius;
    }

    /**
     * Вычисляет площадь круга.
     * Формула: `S = π * radius²`
     * @returns {number} Площадь круга.
     */
    area() {
        return Math.PI * this.radius ** 2;
    }
}
