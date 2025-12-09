export function groupBy<T>(array: T[], iteratee: ((item: T) => any) | keyof T): Record<string, T[]> {
  const result: Record<string, T[]> = {};
  const getter = typeof iteratee === "function"
    ? iteratee
    : ((it: any) => it[iteratee as string]);

  for (const item of array) {
    const key = String(getter(item));
    result[key] = result[key] || [];
    result[key].push(item);
  }
  return result;
}
