import { get } from "../src/object/get";
import { set } from "../src/object/set";

test('get retrieves nested', () => {
  const o = { a: { b: { c: 5 } } };
  expect(get(o, 'a.b.c')).toBe(5);
  expect(get(o, 'a.b.x', 'def')).toBe('def');
});

test('set creates nested', () => {
  const o: any = {};
  set(o, 'x.0.y', 10);
  expect(o.x[0].y).toBe(10);
});
