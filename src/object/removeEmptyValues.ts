export function removeEmptyValues<T extends Record<string, any>>(obj: T, removeEmptyArrays = false): T {
  const out: any = Array.isArray(obj) ? [] : {};
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (val === null || val === undefined || val === "") continue;

    if (Array.isArray(val)) {
      const arr = val
        .map((v) => (typeof v === "object" && v !== null ? removeEmptyValues(v, removeEmptyArrays) : v))
        .filter((v) => !(v === "" || v == null));

      if (removeEmptyArrays && arr.length === 0) continue;
      out[key] = arr;
      continue;
    }

    if (typeof val === "object") {
      const nested = removeEmptyValues(val, removeEmptyArrays);
      if (Object.keys(nested).length === 0) continue;
      out[key] = nested;
      continue;
    }

    out[key] = val;
  }
  return out;
}
