export function flatten(array: any[], depth = 1): any[] {
  if (depth < 1) return array.slice();

  const out: any[] = [];
  for (const item of array) {
    if (Array.isArray(item)) {
      out.push(...flatten(item, depth - 1));
    } else {
      out.push(item);
    }
  }
  return out;
}
