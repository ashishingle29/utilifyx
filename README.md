<p align="center">
  <img src="https://img.shields.io/npm/v/utilifyx?color=blue&label=npm%20version" />
  <img src="https://img.shields.io/npm/dm/utilifyx?color=blueviolet&label=downloads" />
  <img src="https://img.shields.io/badge/license-MIT-green" />
  <img src="https://img.shields.io/bundlephobia/minzip/utilifyx?label=bundle%20size" />
</p>

---

# 📦 utilifyx
### A modern, lightweight utility toolkit for JavaScript & TypeScript

`utilifyx` is a compact, dependency-free utility library offering powerful helpers for:

- Objects  
- Arrays  
- Strings  
- Async utilities  
- Date utilities  
- Validation  

It is designed to be:

- Lightweight (~4 KB gzipped)  
- Tree-shakable  
- Fully typed (TypeScript)  
- ESM-native  
- Faster and smaller than Lodash  

---

# 🚀 Why utilifyx?

| Feature | utilifyx | lodash |
|--------|----------|--------|
| Install size | **7.6 kB** | ~1.4 MB |
| Bundle size (gzipped) | **~4 KB** | ~72 KB |
| Tree-shaking | ✔ Yes | ❌ No |
| Zero dependencies | ✔ Yes | ❌ No |
| TypeScript types | ✔ Built-in | ✔ Yes |
| ESM support | ✔ Native | ❌ Legacy |

---

# 📥 Installation

```bash
npm install utilifyx
````

or:

```bash
yarn add utilifyx
```

---

# 🔧 Quick Start Example

```ts
import { deepClone, groupBy, toCamelCase, debounce } from "utilifyx";

const obj = { a: { b: 1 } };
console.log(deepClone(obj));

const items = [
  { category: "fruit", name: "Apple" },
  { category: "fruit", name: "Banana" },
  { category: "veg", name: "Carrot" }
];

console.log(groupBy(items, "category")); 
console.log(toCamelCase("hello_world")); // helloWorld

const fn = debounce(() => console.log("Run!"), 300);
fn();
```

---

# 📚 API Reference

Below is the full API with practical, real-world examples.

---

# 🟦 OBJECT UTILITIES

## 1️⃣ deepClone

```ts
import { deepClone } from "utilifyx";

const user = { name: "Alex", address: { city: "NY", zip: 12345 } };
const cloned = deepClone(user);

cloned.address.city = "LA";

console.log(user.address.city);  // NY
```

## 2️⃣ deepMerge

```ts
import { deepMerge } from "utilifyx";

const a = { user: { name: "Alex" }, roles: ["admin"] };
const b = { user: { age: 25 }, roles: ["editor"] };

console.log(deepMerge(a, b));
// { user: { name: "Alex", age: 25 }, roles: ["admin", "editor"] }
```

## 3️⃣ get

```ts
import { get } from "utilifyx";

const obj = { user: { profile: { age: 30 } } };

console.log(get(obj, "user.profile.age")); // 30
console.log(get(obj, "user.address.city", "unknown")); // "unknown"
```

## 4️⃣ set

```ts
import { set } from "utilifyx";

const obj = {};

set(obj, "user.profile.age", 30);

console.log(obj);
// { user: { profile: { age: 30 } } }
```

## 5️⃣ isEqual

```ts
import { isEqual } from "utilifyx";

console.log(isEqual({ a: 1 }, { a: 1 })); // true
console.log(isEqual({ a: 1 }, { a: 2 })); // false
```

## 6️⃣ omit

```ts
import { omit } from "utilifyx";

const user = { id: 1, name: "Alex", password: "secret" };

console.log(omit(user, ["password"]));
// { id: 1, name: "Alex" }
```

## 7️⃣ pick

```ts
import { pick } from "utilifyx";

const user = { id: 1, name: "Alex", email: "a@mail.com" };

console.log(pick(user, ["name", "email"]));
// { name: "Alex", email: "a@mail.com" }
```

## 8️⃣ removeEmptyValues

```ts
import { removeEmptyValues } from "utilifyx";

const data = { name: "Alex", age: null, city: undefined };

console.log(removeEmptyValues(data));
// { name: "Alex" }
```

## 9️⃣ shallowClone

```ts
import { shallowClone } from "utilifyx";

const obj = { a: 1, b: 2 };
console.log(shallowClone(obj));
// { a: 1, b: 2 }
```

---

# 🟩 ARRAY UTILITIES

## 1️⃣ uniqueBy

```ts
import { uniqueBy } from "utilifyx";

const items = [
  { id: 1, name: "A" },
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

console.log(uniqueBy(items, "id"));
// [{ id: 1, name: "A" }, { id: 2, name: "B" }]
````

## 2️⃣ groupBy

```ts
import { groupBy } from "utilifyx";

const items = [
  { category: "fruit", name: "Apple" },
  { category: "veg", name: "Carrot" },
  { category: "fruit", name: "Banana" }
];

console.log(groupBy(items, "category"));
// { fruit: [...], veg: [...] }
```

## 3️⃣ sortBy

```ts
import { sortBy } from "utilifyx";

const users = [
  { name: "Alex", age: 30 },
  { name: "Ben", age: 20 }
];

console.log(sortBy(users, "age"));
// [ { name: "Ben", age: 20 }, { name: "Alex", age: 30 } ]
```

## 4️⃣ flatten

```ts
import { flatten } from "utilifyx";

console.log(flatten([1, [2, [3, 4]]])); 
// [1, 2, 3, 4]
```

## 5️⃣ arrayToMap

```ts
import { arrayToMap } from "utilifyx";

const list = [
  { id: 1, name: "A" },
  { id: 2, name: "B" }
];

console.log(arrayToMap(list, "id"));
// { 1: {...}, 2: {...} }
```

---

# 🟧 STRING UTILITIES

## 1️⃣ toCamelCase

```ts
import { toCamelCase } from "utilifyx";

console.log(toCamelCase("hello_world")); // helloWorld
console.log(toCamelCase("my-name-is"));  // myNameIs
```

## 2️⃣ toSnakeCase

```ts
import { toSnakeCase } from "utilifyx";

console.log(toSnakeCase("HelloWorld")); // hello_world
console.log(toSnakeCase("myNameIs"));   // my_name_is
```

## 3️⃣ toKebabCase

```ts
import { toKebabCase } from "utilifyx";

console.log(toKebabCase("HelloWorld")); // hello-world
```

---

# 🟨 ASYNC UTILITIES

## 1️⃣ debounce

```ts
import { debounce } from "utilifyx";

const log = debounce(() => console.log("Run!"), 500);

log();
log();
// Only runs once after 500ms
```

## 2️⃣ throttle

```ts
import { throttle } from "utilifyx";

const run = throttle(() => console.log("Fired!"), 1000);

run();
run();
// Only fires once per second
```

## 3️⃣ memoize

```ts
import { memoize } from "utilifyx";

const slowAdd = (a, b) => a + b;
const fastAdd = memoize(slowAdd);

console.log(fastAdd(2, 3)); // calculated
console.log(fastAdd(2, 3)); // cached
```

---

# 🟫 DATE UTILITIES

## 1️⃣ formatDate

```ts
import { formatDate } from "utilifyx";

console.log(formatDate(new Date(), "en-US"));
// e.g., "12/10/2025"
```

## 2️⃣ parseDate

```ts
import { parseDate } from "utilifyx";

console.log(parseDate("2025-12-10"));
// returns Date object
```

## 3️⃣ addDays

```ts
import { addDays } from "utilifyx";

console.log(addDays(new Date("2025-01-01"), 10));
// Jan 11, 2025
```

## 4️⃣ diffDays

```ts
import { diffDays } from "utilifyx";

console.log(diffDays("2025-01-10", "2025-01-01"));
// 9
```

---

# 🟪 VALIDATION UTILITIES

## 1️⃣ validateEmail

```ts
import { validateEmail } from "utilifyx";

console.log(validateEmail("test@gmail.com")); // true
console.log(validateEmail("x@y")); // false
```

## 2️⃣ validatePhone

```ts
import { validatePhone } from "utilifyx";

console.log(validatePhone("9876543210")); // true
console.log(validatePhone("12345")); // false
```

## 3️⃣ isEmpty

```ts
import { isEmpty } from "utilifyx";

console.log(isEmpty(""));      // true
console.log(isEmpty([]));      // true
console.log(isEmpty({}));      // true
console.log(isEmpty("text"));  // false
```

## 4️⃣ isNumeric

```ts
import { isNumeric } from "utilifyx";

console.log(isNumeric("123")); // true
console.log(isNumeric("A12")); // false
```

---

# 🧪 Running Tests

```bash
npm test
````

This runs all Jest test suites with coverage.

---

# 🏗 Building the Package

```bash
npm run build
```

Output files will be generated inside:

```
dist/
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Add your changes + tests
4. Submit a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ⭐ Support the Project

If utilifyx helps you, please:

* ⭐ Star the GitHub repository
* ⭐ Star the package on npm
* Share it with your developer community

Your support helps the project grow!
