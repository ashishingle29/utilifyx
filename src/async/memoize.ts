export function memoize<F extends (...args: any[]) => any>(
  fn: F,
  resolver?: (...args: Parameters<F>) => string
) {
  const cache = new Map<string, ReturnType<F>>();

  return function memoized(...args: Parameters<F>): ReturnType<F> {
    const key = resolver ? resolver(...args) : JSON.stringify(args);
    if (cache.has(key)) return cache.get(key) as ReturnType<F>;

    const res = fn(...args);
    cache.set(key, res);
    return res;
  };
}
