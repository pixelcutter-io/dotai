---
name: dotai-update
description: >
  Updating dotai skills repository. Use when the user asks to update,
  improve, or modify a skill in the dotai repository.
---

# Updating dotai skills

When the user asks to update a skill (e.g., "update the react skill with this pattern"):

## Process

1. Navigate to the dotai repository:
   ```bash
   cd ~/dotai
   ```

2. Edit the skill file in `~/dotai/skills/[skill-name]/SKILL.md`

3. Commit changes (DO NOT push automatically):
   ```bash
   git add .
   git commit -m "update: [skill-name] - [brief description]"
   ```

4. Inform the user that:
   - The skill has been updated and committed in `~/dotai`
   - They should review the changes with `git diff HEAD~1`
   - They can push when ready with `git push`

## Important

- All skill files are located in `~/dotai/skills/`
- Each skill has a `SKILL.md` file with YAML frontmatter
- NEVER push automatically - the user must review and push manually
- After push, the user will need to run `bun update dotai` in their projects to get the latest version