# dotAI

Personal AI configuration and skills for Claude Code, Cursor, and Windsurf.

## Installation

In your project, install dotAI as a dev dependency from GitHub:

```bash
bun add -D github:pixelcutter-io/dotai#v1.0.0
# or
npm install -D github:pixelcutter-io/dotai#v1.0.0
# or
yarn add -D github:pixelcutter-io/dotai#v1.0.0
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

> "update the react skill in ~/dotai with this pattern"

The AI will:
1. Edit the skill file in `~/dotai/skills/[skill-name]/SKILL.md`
2. Commit changes locally
3. Ask you to review with `git diff HEAD~1`
4. You push manually when satisfied

After pushing, run `bun update dotai` in your projects to get the changes.

## Available Skills

| Skill | Description |
|---|---|
| `typescript` | TypeScript conventions: interfaces vs types, naming, strict mode |
| `react` | React component conventions: file structure, props, hooks |
| `next-js` | Next.js conventions: Server/Client components, routing, metadata |
| `scss` | SCSS conventions: variables, mixins, nesting, imports |
| `css-modules` | CSS Modules conventions: naming, imports, class access |
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
    ├── typescript/
    │   └── SKILL.md
    ├── react/
    │   └── SKILL.md
    ├── next-js/
    │   └── SKILL.md
    ├── scss/
    │   └── SKILL.md
    └── css-modules/
        └── SKILL.md
```
