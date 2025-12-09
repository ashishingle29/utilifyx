export function parseDate(input: string | number | Date): Date | null {
  if (input instanceof Date) return input;
  const d = new Date(input as any);
  return isNaN(d.getTime()) ? null : d;
}

export function formatDate(
  date: Date | string | number,
  options?: Intl.DateTimeFormatOptions,
  locale = "en-US"
): string {
  const d = parseDate(date);
  if (!d) return "";
  return new Intl.DateTimeFormat(locale, options).format(d);
}

export function addDays(date: Date | string | number, days: number): Date {
  const d = parseDate(date);
  if (!d) throw new Error("Invalid date");
  const result = new Date(d);
  result.setDate(result.getDate() + days);
  return result;
}

export function diffDays(a: Date | string | number, b: Date | string | number): number {
  const da = parseDate(a);
  const db = parseDate(b);
  if (!da || !db) throw new Error("Invalid date");
  return Math.round((da.getTime() - db.getTime()) / (1000 * 60 * 60 * 24));
}
