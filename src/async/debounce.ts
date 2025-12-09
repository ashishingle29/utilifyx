export function debounce<T extends (...args: any[]) => any>(fn: T, wait = 200) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function debounced(this: any, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, wait);
  };
}
