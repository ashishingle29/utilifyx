export function throttle<T extends (...args: any[]) => any>(fn: T, limit = 200) {
  let last = 0;
  let pending: ReturnType<typeof setTimeout> | null = null;

  return function throttled(this: any, ...args: Parameters<T>) {
    const now = Date.now();
    const remaining = limit - (now - last);

    if (remaining <= 0) {
      if (pending) {
        clearTimeout(pending);
        pending = null;
      }
      last = Date.now();
      fn.apply(this, args);
    } else if (!pending) {
      pending = setTimeout(() => {
        pending = null;
        last = Date.now();
        fn.apply(this, args);
      }, remaining);
    }
  };
}
