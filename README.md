# 📦 utilifyx  
### A modern, lightweight utility toolkit for JavaScript & TypeScript

<p>
  <a href="https://www.npmjs.com/package/utilifyx">
    <img src="https://img.shields.io/npm/v/utilifyx.svg?color=blue&style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/utilifyx">
    <img src="https://img.shields.io/npm/dm/utilifyx.svg?style=flat-square" />
  </a>
  <img src="https://img.shields.io/bundlephobia/min/utilifyx?style=flat-square" />
  <img src="https://img.shields.io/badge/types-TypeScript-blue?style=flat-square" />
</p>

---

## 🧰 What is utilifyx?

`utilifyx` is a clean and efficient utility library designed to make everyday development easier.  
It includes powerful helpers for:

- **Objects**
- **Arrays**
- **Strings**
- **Async operations**
- **Date manipulation**
- **Validation**

Built using **TypeScript** and shipped as clean **ESM**, ideal for both frontend and backend.

---

## 🚀 Installation

```bash
npm install utilifyx
````

or

```bash
yarn add utilifyx
```

---

## 🔧 Usage Example

```ts
import { deepClone, groupBy, toCamelCase, debounce } from "utilifyx";

const obj = { a: { b: 1 } };
const cloned = deepClone(obj);
console.log(cloned);

const items = [
  { category: "fruit", name: "Apple" },
  { category: "fruit", name: "Banana" },
  { category: "veg", name: "Carrot" }
];

console.log(groupBy(items, "category"));

console.log(toCamelCase("hello_world")); // helloWorld

const debounced = debounce(() => console.log("run"), 300);
debounced();
```

---

# 📚 API Overview

---

## 🟦 Object Utilities

| Function            | Description                            |
| ------------------- | -------------------------------------- |
| `deepClone`         | Deep clone objects, arrays, sets, maps |
| `deepMerge`         | Recursively merge objects              |
| `get`               | Safely access nested values            |
| `set`               | Safely set nested values               |
| `isEqual`           | Deep equality check                    |
| `omit`              | Remove keys from objects               |
| `pick`              | Extract selected keys                  |
| `removeEmptyValues` | Remove null/undefined/empty entries    |
| `shallowClone`      | Create shallow copies                  |

---

## 🟩 Array Utilities

| Function     | Description                          |
| ------------ | ------------------------------------ |
| `uniqueBy`   | Remove duplicates by key or function |
| `groupBy`    | Group items by a key                 |
| `sortBy`     | Sort arrays by key                   |
| `flatten`    | Flatten nested arrays                |
| `arrayToMap` | Convert arrays to object maps        |

---

## 🟧 String Utilities

| Function      | Description                |
| ------------- | -------------------------- |
| `toCamelCase` | Convert text to camelCase  |
| `toSnakeCase` | Convert text to snake_case |
| `toKebabCase` | Convert text to kebab-case |

---

## 🟨 Async Utilities

| Function   | Description                     |
| ---------- | ------------------------------- |
| `debounce` | Delay function execution        |
| `throttle` | Limit execution rate            |
| `memoize`  | Cache results of pure functions |

---

## 🟫 Date Utilities

| Function     | Description                          |
| ------------ | ------------------------------------ |
| `formatDate` | Format a Date object                 |
| `parseDate`  | Convert input into Date              |
| `addDays`    | Add days to a date                   |
| `diffDays`   | Get difference in days between dates |

---

## 🟪 Validation Utilities

| Function        | Description                |
| --------------- | -------------------------- |
| `validateEmail` | Validate email format      |
| `validatePhone` | Validate phone numbers     |
| `isEmpty`       | Check if a value is empty  |
| `isNumeric`     | Check if string is numeric |

---

# 🧪 Running Tests

```bash
npm test
```

---

# 🏗 Build

```bash
npm run build
```

Outputs compiled files in:

```
/dist
```

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Add your changes & tests
4. Submit a pull request

---

# 📄 License

MIT License.

---

# ⭐ Support

If you find `utilifyx` helpful:

* ⭐ Star it on npm
* ⭐ Star the GitHub repo
* Share it with other developers

Thank you for using utilifyx!