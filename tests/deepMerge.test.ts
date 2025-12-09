import { deepMerge } from "../src/object/deepMerge";

test('deepMerge merges nested', () => {
  const a = { x: 1, nested: { a: 1 } };
  const b = { nested: { b: 2 }, y: 2 };
  const res = deepMerge(a, b);
  expect(res.nested.a).toBe(1);
  expect(res.nested.b).toBe(2);
  expect(res.y).toBe(2);
});
