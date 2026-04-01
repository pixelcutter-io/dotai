---
name: css-modules
description: >
  CSS Module conventions. Use when creating, editing, or reviewing
  .module.scss or .module.css files, or when applying styles inside
  any component or page.
---

# CSS Module conventions

## Import
- Always import the CSS Module as `s` from the component's own `.module.scss`

## Class access
- Access single classes as `s.className`
- Use `clsx` for conditional or multiple classes

## Naming
- Class names in camelCase
- No global styles inside a module file
- Keep class names semantic, not presentational
