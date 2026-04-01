---
name: scss-conventions
description: >
  SCSS conventions. Use when creating, editing, or reviewing .scss
  or .module.scss files: variables, mixins, nesting, structure, imports.
---

# SCSS conventions

## Global config structure
- Global variables in `src/styles/config/` split by concern: colors, layout, reset, typography
- Mixins in `src/styles/mixins/`

## Imports
- Always use `@use` with a named namespace, never `@import`
- Import global variables and mixins with `@/` alias
- Import the component's own `.module.scss` with a relative path

## Variables
- Use CSS custom properties (`--var`) for runtime values (theming, dynamic)
- Use SCSS variables (`$var`) for compile-time values (breakpoints, spacing scales)
- Name variables in kebab-case

## Nesting
- Maximum 3 levels of nesting
- Nest only when the relationship is semantic, not just for scoping
- Place `&` modifiers and states before nested children

## Mixins
- Use mixins only for repeated patterns with parameters
- No mixins that only wrap a single property

## Rules
- Class names always in camelCase, never kebab-case or snake_case
- No inline styles, except dynamic values from JS or CMS
- No hardcoded colors, always use CSS custom properties
- No `!important`
- No vendor prefixes manually, use autoprefixer
