export function arrayToMap<T, K extends PropertyKey>(
  array: T[],
  keySelector: (item: T) => K
): Record<string, T> {
  const map: Record<string, T> = {};
  for (const item of array) {
    map[String(keySelector(item))] = item;
  }
  return map;
}
