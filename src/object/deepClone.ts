type Primitive = null | undefined | string | number | boolean | symbol | bigint;

function isPrimitive(value: unknown): value is Primitive {
  return value === null || (typeof value !== "object" && typeof value !== "function");
}

export function deepClone<T>(value: T, weakMap = new WeakMap()): T {
  if (isPrimitive(value)) return value;
  if (value instanceof Date) return new Date(value.getTime()) as any;
  if (value instanceof RegExp) return new RegExp(value.source, value.flags) as any;
  if (value instanceof Map) {
    const m = new Map();
    value.forEach((v, k) => m.set(deepClone(k, weakMap), deepClone(v, weakMap)));
    return m as any;
  }
  if (value instanceof Set) {
    const s = new Set();
    value.forEach((v) => s.add(deepClone(v, weakMap)));
    return s as any;
  }
  if (weakMap.has(value as object)) {
    return weakMap.get(value as object);
  }

  if (Array.isArray(value)) {
    const arr: any[] = [];
    weakMap.set(value as object, arr);
    value.forEach((v, i) => (arr[i] = deepClone(v, weakMap)));
    return arr as any;
  }

  if (typeof value === "object") {
    const out: any = {};
    weakMap.set(value as object, out);
    for (const key of Object.keys(value as object)) {
      out[key] = deepClone((value as any)[key], weakMap);
    }
    return out;
  }

  return value;
}
