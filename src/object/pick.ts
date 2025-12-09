export function pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: (K | string)[]): Partial<T> {
  const out: Partial<T> = {};
  for (const key of keys) {
    if ((key as string) in obj) (out as any)[key] = obj[key as K];
  }
  return out;
}
