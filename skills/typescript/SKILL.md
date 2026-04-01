---
name: typescript-conventions
description: >
  TypeScript conventions. Use when creating, editing, or reviewing
  any .ts or .tsx file: type definitions, interfaces, generics, utility types.
---

# TypeScript conventions

## Types vs interfaces
- Use `interface` for object shapes and props
- Use `type` for unions, intersections, and primitives aliases

## Props and optionality
- Mark optional props with `?`
- Provide default values via destructuring, not inside the interface

## Naming
- Prefix interfaces with `I` followed by PascalCase name
- Prefix type aliases with `T` followed by PascalCase name
- Prefix enums with `E` followed by PascalCase name

## Rules
- No `any`, use `unknown` and narrow the type explicitly
- Prefer explicit return types on functions exposed as module exports
- Do not use non-null assertion (`!`) without a justified comment
- Prefer `.then().catch()` over `try/catch` for promise handling
