import { omit } from "../src/object/omit";
import { pick } from "../src/object/pick";

test('omit removes keys', () => {
  const o = { a:1, b:2, c:3 };
  expect(omit(o, ['b'])).toEqual({ a:1, c:3 });
});

test('pick selects keys', () => {
  const o = { a:1, b:2, c:3 };
  expect(pick(o, ['a','c'])).toEqual({ a:1, c:3 });
});
