const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./functions');

test('First character capitalized', () => {
    expect(capitalize("random Text")).toMatch("Random Text");
});

test('Reversed string', () => {
    expect(reverseString("random Text")).toMatch("txeT modnar");
});

test('Basic operations', () => {
    expect(calculator.add(1, -5)).toBe(-4);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calculator.add(-0.1, 5)).toBe(4.9);

    expect(calculator.subtract(1, -5)).toBe(6);
    expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
    expect(calculator.subtract(-0.1, 5)).toBe(-5.1);

    expect(calculator.divide(3, 1)).toBe(3);
    expect(calculator.divide(2, 0.1)).toBe(20);
    expect(calculator.divide(-0.1, 5)).toBe(-0.02);
    expect(calculator.divide(0.2, 0.1)).toBe(2);
    expect(() => calculator.divide(3, 0)).toThrow("Cannot divide by 0");

    expect(calculator.multiply(1, -5)).toBe(-5);
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
    expect(calculator.multiply(-0.1, 5)).toBe(-0.5);
});

test('Caesar Cipher', () => {
    expect(caesarCipher("xyz", 3)).toMatch("abc");
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
    expect(caesarCipher("Hot Dog", 1)).toMatch("Ipu Eph");
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
    expect(caesarCipher("Hello World!", 25)).toMatch("Gdkkn Vnqkc!");
    expect(caesarCipher("Hello World!", 26)).toMatch("Hello World!");
});

test('Object with properties', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
