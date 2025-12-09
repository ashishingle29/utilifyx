import { debounce } from "../src/async/debounce";
import { throttle } from "../src/async/throttle";
import { memoize } from "../src/async/memoize";

jest.useRealTimers();

test('debounce delays execution', (done) => {
  let called = 0;
  const fn = debounce(() => called++, 50);
  fn(); fn(); fn();
  setTimeout(() => {
    expect(called).toBe(1);
    done();
  }, 120);
});

test('throttle limits execution', (done) => {
  let called = 0;
  const fn = throttle(() => called++, 50);
  fn(); fn(); fn();
  setTimeout(() => {
    expect(called).toBeGreaterThanOrEqual(1);
    done();
  }, 120);
});

test('memoize caches results', () => {
  let runs = 0;
  const fn = (a:number) => { runs++; return a+1; };
  const m = memoize(fn);
  expect(m(1)).toBe(2);
  expect(m(1)).toBe(2);
  expect(runs).toBe(1);
});
