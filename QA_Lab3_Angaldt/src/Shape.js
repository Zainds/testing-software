/**
 * @class Shape
 * @classdesc Абстрактный класс для всех геометрических фигур.
 *
 * ![Геометрические фигуры](../assets/shapes.png)
 *
 * Формула площади для каждой фигуры определяется в дочерних классах.
 * `S = ?`
 *
 * @mermaid
 * graph TD;
 *    Shape --> Square;
 *    Shape --> Circle;
 */
export class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Нельзя создать экземпляр абстрактного класса Shape.");
        }
    }

    /**
     * Вычисляет площадь фигуры.
     * @returns {number} Площадь фигуры.
     * @throws {Error} Если метод не переопределён.
     */
    area() {
        throw new Error("Метод 'area' должен быть переопределён в дочернем классе.");
    }
}
