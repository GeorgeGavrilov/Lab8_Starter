// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Test if phone number is proper', () => {
    expect(functions.isPhoneNumber("(888)888-8888")).toBe(true);
});

test('Test if phone number is proper', () => {
    expect(functions.isPhoneNumber("(559)321-9325")).toBe(true);
});

test('Test if phone number is proper', () => {
    expect(functions.isPhoneNumber("123-123-123")).toBe(false);
});

test('Test if phone number is proper', () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
});

test('Test if email is proper', () => {
    expect(functions.isEmail("kappa@gmail.com")).toBe(true);
});

test('Test if email is proper', () => {
    expect(functions.isEmail("hello123@hotmail.com")).toBe(true);
});

test('Test if email is proper', () => {
    expect(functions.isEmail("hello123")).toBe(false);
});

test('Test if email is proper', () => {
    expect(functions.isEmail("hello123@hotmailcom")).toBe(false);
});

test('Test if password is strong enough', () => {
    expect(functions.isStrongPassword("J123k")).toBe(true);
});

test('Test if password is strong enough', () => {
    expect(functions.isStrongPassword("K462KxK__")).toBe(true);
});

test('Test if password is strong enough', () => {
    expect(functions.isStrongPassword("j**j")).toBe(false);
});

test('Test if password is strong enough', () => {
    expect(functions.isStrongPassword("JJJJjjjjJJjjjjjjjjjjJJJJJjjjjJj")).toBe(false);
});

test('Test if the date is correct', () => {
    expect(functions.isDate("1/12/2024")).toBe(true);
});

test('Test if the date is correct', () => {
    expect(functions.isDate("11/6/2024")).toBe(true);
});

test('Test if the date is correct', () => {
    expect(functions.isDate("11/111/2024")).toBe(false);
});

test('Test if the date is correct', () => {
    expect(functions.isDate("11062024")).toBe(false);
});

test('Test if the HEX color is correct', () => {
    expect(functions.isHexColor("FFF")).toBe(true);
});

test('Test if the HEX color is correct', () => {
    expect(functions.isHexColor("FAFAFA")).toBe(true);
});

test('Test if the HEX color is correct', () => {
    expect(functions.isHexColor("FAFAFAFF")).toBe(false);
});

test('Test if the HEX color is correct', () => {
    expect(functions.isHexColor("VVVV")).toBe(false);
});