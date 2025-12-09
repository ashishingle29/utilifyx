import { cloneObject, cloneArray } from "../src/object/shallowClone";
import { removeEmptyValues } from "../src/object/removeEmptyValues";

test('shallow clone object and array', () => {
  const o = { a:1 };
  const o2 = cloneObject(o);
  expect(o2).toEqual(o);

  const a = [1,2];
  const a2 = cloneArray(a);
  expect(a2).toEqual(a);
});

test('remove empty values recurses', () => {
  const o: any = { a: null, b: '', c: { d: '' , e: 2 }, f: [null,'',3] };
  const cleaned = removeEmptyValues(o, true);
  expect(cleaned).toEqual({ c: { e: 2 }, f: [3] });
});
