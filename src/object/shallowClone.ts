export function cloneObject<T extends object>(obj: T): T {
  return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
}

export function cloneArray<T>(arr: T[]): T[] {
  return arr.slice();
}
