const fibonacci = require('./fibonacci');

test('fibonacci of 0 is 0', () => {
  expect(fibonacci(0)).toBe(0);
});

test('fibonacci of 1 is 1', () => {
  expect(fibonacci(1)).toBe(1);
});

test('fibonacci of 5 is 5', () => {
  expect(fibonacci(5)).toBe(5);
});

test('fibonacci of 10 is 55', () => {
  expect(fibonacci(10)).toBe(55);
});
