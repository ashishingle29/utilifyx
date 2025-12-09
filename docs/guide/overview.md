# Overview

Welcome to **utilifyx**, a lightweight, modern utility toolkit for JavaScript and TypeScript.

## Why utilifyx?
- Smaller + faster than Lodash  
- Pure ESM  
- Tree-shakable  
- TS-first  
- Zero dependencies  

---

## Quick Example
\`\`\`ts
import { deepClone, groupBy, toCamelCase } from "utilifyx";

console.log(deepClone({ a: { b: 2 } }));
console.log(groupBy([{ type: "a" }, { type: "b" }], "type"));
console.log(toCamelCase("hello_world"));
\`\`\`
