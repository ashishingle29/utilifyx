export function sortBy<T>(
  array: T[],
  key: ((item: T) => any) | keyof T,
  direction: "asc" | "desc" = "asc"
): T[] {
  const getter = typeof key === "function" ? key : ((it: any) => it[key as string]);
  return array.slice().sort((a, b) => {
    const va = getter(a);
    const vb = getter(b);

    if (va < vb) return direction === "asc" ? -1 : 1;
    if (va > vb) return direction === "asc" ? 1 : -1;
    return 0;
  });
}
