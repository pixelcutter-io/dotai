---
name: react-components
description: >
  React .tsx component conventions. Use when creating, editing,
  refactoring, or reviewing React components: arrow functions, props
  interface, render methods, folder structure.
---

# React component conventions

## File structure
1. Create PascalCase ComponentName `.tsx`
2. Create PascalCase ComponentName `.module.scss`
3. Create `index.ts`

## File rules
- If UI component create always in `/components`
- Component name is always in PascalCase
- In `index.ts` always import component and export default separately on two distinct lines

## Structure
1. Import CSS Module as `s` from the component's own `.module.scss`
2. If necessary define a `type` for union props (e.g. variants, sizes)
3. Define an `interface` named `I` + component name for all props
4. Arrow function component, props destructured inside the body
5. Internal sections in order: hooks → handlers → render functions
6. Single `export default` at the bottom

## Rules
- Use `interface` for props and `type` only for unions/primitives — see typescript-conventions skill
- Mark optional props with `?`; provide default values via destructuring
- Import CSS Module as `s`, see css-modules skill
- Always import `Fragment` from react and use it only when returning multiple sibling elements, never use `<>` shorthand
- Name event handlers with the `handle` prefix
- Extract complex JSX into internal render functions, keep the main `return` clean
- Do not use `useCallback` or `useMemo` without a concrete measurable need
- No obvious comments in code
- Use path aliases (e.g. `@/`) for imports outside the component's own folder, use relative paths only for files within the same folder
- Never use `React.` prefix, always import named exports directly from `'react'`
