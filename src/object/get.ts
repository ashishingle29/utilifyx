export function get<T = any>(obj: any, path: string | string[], defaultValue?: T): T | undefined {
  if (obj == null) return defaultValue;
  const parts = Array.isArray(path)
    ? path
    : path.replace(/\[(\w+)\]/g, ".$1").split(".").filter(Boolean);

  let cur = obj;
  for (const p of parts) {
    if (cur == null) return defaultValue;
    cur = cur[p];
  }
  return cur === undefined ? defaultValue : cur;
}
