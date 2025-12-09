import { deepClone } from "../src/object/deepClone";

test('deepClone basic', () => {
  const obj = { a: 1, b: { c: 2 } };
  const c = deepClone(obj);
  expect(c).toEqual(obj);
  expect(c).not.toBe(obj);
  expect(c.b).not.toBe(obj.b);
});

test('deepClone with array and date', () => {
  const d = new Date();
  const input: any = { arr: [1, { x: d }], d };
  const out = deepClone(input);
  expect(out).toEqual(input);
  expect(out.arr[1].x).toEqual(d);
  expect(out.arr[1].x).not.toBe(input.arr[1].x);
});
