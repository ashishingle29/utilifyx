import { toCamelCase, toSnakeCase, toKebabCase } from "../src/string/case";

test('case conversions', () => {
  expect(toCamelCase('hello_world')).toBe('helloWorld');
  expect(toSnakeCase('helloWorld')).toBe('hello_world');
  expect(toKebabCase('Hello World')).toBe('hello-world');
});
