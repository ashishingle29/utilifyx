import { isEqual } from "../src/object/isEqual";

test('isEqual primitives and objects', () => {
  expect(isEqual(1,1)).toBe(true);
  expect(isEqual({a:1}, {a:1})).toBe(true);
  expect(isEqual([1,2], [1,2])).toBe(true);
  expect(isEqual({a:1}, {a:2})).toBe(false);
});
