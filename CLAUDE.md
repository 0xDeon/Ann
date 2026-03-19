# Project Rules

## Git
- NEVER add Co-Authored-By tags to any commits
- Do not co-author yourself in any commits

## Pre-Push Checks
- Always run `npx next build` and `npx eslint .` before pushing code
- Both must pass with zero errors before any push
- Fix all TypeScript and lint errors before committing
