import { validateEmail, validatePhone, isEmpty, isNumeric } from "../src/validation/validators";

test('validateEmail and phone', () => {
  expect(validateEmail('a@b.com')).toBe(true);
  expect(validateEmail('bad')).toBe(false);
  expect(validatePhone('+1 234-567-890')).toBe(true);
});

test('isEmpty and isNumeric', () => {
  expect(isEmpty('')).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isNumeric('123')).toBe(true);
  expect(isNumeric('12a')).toBe(false);
});
