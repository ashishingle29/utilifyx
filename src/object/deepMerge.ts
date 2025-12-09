export function deepMerge<T extends Record<string, any>, U extends Record<string, any>>(target: T, source: U): T & U {
  if (!source) return target as T & U;
  Object.keys(source).forEach((key) => {
    const srcVal = source[key];
    const tgtVal = (target as any)[key];

    if (Array.isArray(srcVal)) {
      (target as any)[key] = srcVal.slice();
    } else if (srcVal && typeof srcVal === "object" && !(srcVal instanceof Date)) {
      if (!tgtVal || typeof tgtVal !== "object" || Array.isArray(tgtVal)) {
        (target as any)[key] = {};
      }
      deepMerge((target as any)[key], srcVal);
    } else {
      (target as any)[key] = srcVal;
    }
  });
  return target as T & U;
}
