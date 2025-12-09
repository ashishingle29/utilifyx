import { uniqueBy } from "../src/array/uniqueBy";
import { groupBy } from "../src/array/groupBy";
import { sortBy } from "../src/array/sortBy";
import { flatten } from "../src/array/flatten";
import { arrayToMap } from "../src/array/arrayToMap";

test('uniqueBy works', () => {
  const items = [{id:1},{id:2},{id:1}];
  expect(uniqueBy(items, 'id').length).toBe(2);
});

test('groupBy works', () => {
  const items = [{t:'a'},{t:'b'},{t:'a'}];
  expect(Object.keys(groupBy(items,'t')).sort()).toEqual(['a','b']);
});

test('sortBy works', () => {
  const items = [{v:2},{v:1}];
  expect(sortBy(items,'v')[0].v).toBe(1);
});

test('flatten works', () => {
  expect(flatten([1,[2,[3]]],2)).toEqual([1,2,3]);
});

test('arrayToMap works', () => {
  const arr = [{id: 'x', v:1}, {id: 'y', v:2}];
  const map = arrayToMap(arr, (i) => i.id);
  expect(map.x.v).toBe(1);
});
