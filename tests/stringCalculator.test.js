const add = require('../src/stringCalculator');

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
    expect(add("1")).toBe(1);
});
  
test('should return the sum of two numbers', () => {
    expect(add("1,2")).toBe(3);
});
  
test('should return the sum of multiple numbers', () => {
    expect(add("1,2,3")).toBe(6);
});
  
test('should handle new lines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('should throw an exception for negative numbers', () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
});

test('should ignore numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
});

test('should include numbers less than or equal to 1000', () => {
    expect(add("2,1000")).toBe(1002);
});