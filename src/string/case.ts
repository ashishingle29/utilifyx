function splitWords(str: string): string[] {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_\-]+/g, " ")
    .trim()
    .split(/\s+/);
}

export function toCamelCase(str: string): string {
  const parts = splitWords(str);
  return parts
    .map((p, i) => (i === 0 ? p.toLowerCase() : p[0].toUpperCase() + p.slice(1).toLowerCase()))
    .join("");
}

export function toSnakeCase(str: string): string {
  return splitWords(str).map((p) => p.toLowerCase()).join("_");
}

export function toKebabCase(str: string): string {
  return splitWords(str).map((p) => p.toLowerCase()).join("-");
}
