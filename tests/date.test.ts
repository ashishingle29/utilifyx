import { parseDate, formatDate, addDays, diffDays } from "../src/date/dateUtils";

test('date utils', () => {
  const d = parseDate('2020-01-01');
  expect(d).not.toBeNull();
  expect(formatDate(d!)).toBeTruthy();
  const d2 = addDays(d!, 5);
  expect(diffDays(d2, d!)).toBe(5);
});
