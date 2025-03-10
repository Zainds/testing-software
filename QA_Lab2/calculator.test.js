const Calculator = require('./calculator');

describe('Calculator Tests', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('Addition: 2 + 3 = 5', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('Subtraction: 7 - 4 = 3', () => {
        expect(calculator.subtract(7, 4)).toBe(3);
    });

    test('Multiplication: 5 * 6 = 30', () => {
        expect(calculator.multiply(5, 6)).toBe(30);
    });

    test('Division: 10 / 2 = 5', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('Division by zero throws error', () => {
        expect(() => calculator.divide(10, 0)).toThrow("Division by zero is not allowed");
    });

    test('Power: 2^3 = 8', () => {
        expect(calculator.power(2, 3)).toBe(8);
    });

    test('Square root of 16 = 4', () => {
        expect(calculator.squareRoot(16)).toBe(4);
    });

    test('Square root of negative number throws error', () => {
        expect(() => calculator.squareRoot(-9)).toThrow("Square root of a negative number is not allowed");
    });

    test('Modulus: 10 % 3 = 1', () => {
        expect(calculator.modulus(10, 3)).toBe(1);
    });

    test('Check if number is even', () => {
        expect(calculator.isEven(4)).toBe(true);
        expect(calculator.isEven(7)).toBe(false);
    });

    test('Check if number is odd', () => {
        expect(calculator.isOdd(3)).toBe(true);
        expect(calculator.isOdd(8)).toBe(false);
    });
});
