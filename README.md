# dotAI

Personal AI configuration and skills for Claude Code, Cursor, and Windsurf.

## Installation

In your project, install dotAI as a dev dependency from GitHub:

```bash
bun add -D github:pixelcutter-io/dotai
# or
npm install -D github:pixelcutter-io/dotai
# or
yarn add -D github:pixelcutter-io/dotai
```

## Usage

Run the configurator from your project root:

```bash
bunx dotai
# or
npx dotai
# or
yarn dotai
```

The installer will:
1. Ask which AI tool you're using (Claude Code, Cursor, Windsurf)
2. Let you select your framework (Next.js, React, None)
3. Let you select skills (TypeScript, SCSS, CSS Modules)
4. Install selected skills in the appropriate directory (`.claude/skills/`, `.cursor/rules/`, `.windsurf/rules/`)

**Note:** Official dotAI skills are prefixed with `dotai-` (e.g., `dotai-react`, `dotai-typescript`). This allows you to create custom skills without name conflicts. When you update dotAI, only `dotai-*` skills are overwritten—your custom skills remain untouched.

## Updating dotAI

To update to the latest version:

```bash
bun update dotai
```

Or install a specific version:

```bash
bun add -D github:pixelcutter-io/dotai#v1.0.1
```

## Updating Skills

To update a skill while working on a project, tell your AI assistant:

> "update the dotai-react skill in ~/dotai with this pattern"

The AI will:
1. Edit the skill file in `~/dotai/skills/dotai-[skill-name]/SKILL.md`
2. Commit changes locally
3. Ask you to review with `git diff HEAD~1`
4. You push manually when satisfied

After pushing, run `bun update dotai` in your projects to get the changes.

## Available Skills

| Skill | Description |
|---|---|
| `dotai-typescript` | TypeScript conventions: interfaces vs types, naming, strict mode |
| `dotai-react` | React component conventions: file structure, props, hooks |
| `dotai-next-js` | Next.js conventions: Server/Client components, routing, metadata |
| `dotai-scss` | SCSS conventions: variables, mixins, nesting, imports |
| `dotai-css-modules` | CSS Modules conventions: naming, imports, class access |
| `_dotai-update` | Meta-skill: teaches AI how to update skills in ~/dotai (auto-installed) |

## Development

### Setup

Clone and install dependencies:

```bash
git clone git@github.com:pixelcutter-io/dotai.git
cd dotai
bun install
```

### Adding/Editing Skills

1. Edit skill files in `skills/` directory
2. Each skill must have a `SKILL.md` with frontmatter:

```md
---
name: skill-name
description: >
  Description of when to use this skill
---

# Skill content...
```

### Release New Version

```bash
bun run release
```

This will:
1. Prompt for version bump (patch/minor/major)
2. Update `package.json`
3. Create commit and tag
4. Push to GitHub

## Project Structure

```
dotai/
├── install.ts              # Interactive installer
├── release.ts              # Release automation
├── package.json            # Package config
├── tsconfig.json           # TypeScript config
├── bun.lockb               # Bun lockfile
└── skills/
    ├── _dotai-update/      # Meta-skill (auto-installed)
    │   └── SKILL.md
    ├── dotai-typescript/
    │   └── SKILL.md
    ├── dotai-react/
    │   └── SKILL.md
    ├── dotai-next-js/
    │   └── SKILL.md
    ├── dotai-scss/
    │   └── SKILL.md
    └── dotai-css-modules/
        └── SKILL.md
```
