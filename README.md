# dotai

Personal AI configuration and skills for Claude Code and other AI tools.

## Installation

In your project, install dotai as a dev dependency:

```bash
bun add -D github:mauriziomambrini/dotai
# or
npm install -D github:mauriziomambrini/dotai
# or
yarn add -D github:mauriziomambrini/dotai
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

Installs only the skills relevant to the project into the appropriate directory based on your AI tool (`.claude/skills/`, `.cursor/rules/`, etc.).

## Update a skill

While working on a project, tell Claude Code:

> "update the react-components skill in ~/dotai with this pattern"

Claude will edit the file, commit and push.

## Skills

### Common (always installed)

| Skill | Description |
|---|---|
| `typescript` | Strict mode, interface vs type, generics, narrowing |
| `imports` | `@/` alias, relative scss, React named imports |

### Common (optional)

| Skill | Description |
|---|---|
| `tooling/bun` | Bun as package manager |
| `tooling/biome` | Biome for linting and formatting |
| `tooling/stylelint` | Stylelint for `.module.scss` |
| `styling` | Sass Modules, class naming, `@use`, global variables |

### Framework

| Skill | Description |
|---|---|
| `react/components` | Arrow functions, props interface, render methods, Server vs Client |
| `astro/components` | Coming soon |
| `vue/components` | Coming soon |

## Structure

```
dotai/
├── install.sh
├── README.md
└── skills/
    ├── common/
    │   ├── typescript/
    │   ├── imports/
    │   ├── styling/
    │   └── tooling/
    │       ├── bun/
    │       ├── biome/
    │       └── stylelint/
    ├── react/
    │   └── components/
    ├── astro/
    └── vue/
```
