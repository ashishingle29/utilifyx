export function uniqueBy<T>(array: T[], iteratee: ((item: T) => any) | keyof T): T[] {
  const seen = new Set<any>();
  const out: T[] = [];
  const getter = typeof iteratee === "function"
    ? iteratee
    : ((it: any) => it[iteratee as string]);

  for (const item of array) {
    const key = getter(item);
    if (!seen.has(key)) {
      seen.add(key);
      out.push(item);
    }
  }
  return out;
}
