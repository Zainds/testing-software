class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }

    power(base, exponent) {
        return Math.pow(base, exponent);
    }

    squareRoot(n) {
        if (n < 0) {
            throw new Error("Square root of a negative number is not allowed");
        }
        return Math.sqrt(n);
    }

    modulus(a, b) {
        return a % b;
    }

    isEven(n) {
        return n % 2 === 0;
    }

    isOdd(n) {
        return n % 2 !== 0;
    }
}

module.exports = Calculator;
