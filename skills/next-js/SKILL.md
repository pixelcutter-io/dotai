---
name: nextjs-conventions
description: >
  Next.js conventions. Use when creating, editing, or reviewing Next.js
  pages, layouts, routes, server/client components, data fetching, metadata.
---

# Next.js conventions

## Server vs Client components
- Default to Server Components, add `'use client'` only when necessary
- Use Client Components only for: browser APIs, event listeners, hooks, interactive state
- Never fetch data inside a Client Component,  pass data down as props from a Server Component

## Routing
- Use `Link` from `next/link` for all internal navigation, never use `<a>` for internal links
- Use `useRouter` only for programmatic navigation inside Client Components
- Dynamic segments in `[param]` folders; catch-all in `[...param]`

