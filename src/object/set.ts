export function set(obj: any, path: string | string[], value: any): any {
  if (obj == null) throw new Error("Target object cannot be null");

  const parts = Array.isArray(path)
    ? path
    : path.replace(/\[(\w+)\]/g, ".$1").split(".").filter(Boolean);

  let cur = obj;

  for (let i = 0; i < parts.length; i++) {
    const key = parts[i];
    if (i === parts.length - 1) {
      cur[key] = value;
    } else {
      const next = parts[i + 1];
      if (cur[key] == null || typeof cur[key] !== "object") {
        cur[key] = /^\d+$/.test(next) ? [] : {};
      }
      cur = cur[key];
    }
  }
  return obj;
}
