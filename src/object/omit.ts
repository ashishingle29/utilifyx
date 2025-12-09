export function omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: (K | string)[]): Omit<T, K> {
  const out: any = {};
  const exclude = new Set(keys.map(String));
  for (const key of Object.keys(obj)) {
    if (!exclude.has(key)) out[key] = obj[key];
  }
  return out;
}
