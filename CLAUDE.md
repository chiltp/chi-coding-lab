# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

A personal JavaScript learning lab following the freeCodeCamp v9 curriculum. Contains standalone coding exercises (no build system, no dependencies, no package.json). Each `.js` file is a self-contained solution with comments explaining the approach and `console.log` test cases at the bottom.

## Running Code

```bash
node "JavaScript/Functions/build-a-leap-year-calculator.js"
```

Folder names contain spaces — always quote paths. There is no test framework — exercises are verified by running them directly with Node and checking console output against expected values in comments.

## Repository Structure

- `JavaScript/` — Exercise solutions organized by topic:
  - `Arrays/`, `Functions/`, `Objects/` — Core curriculum exercises
  - `Higher Order Functions/` — HOF utilities (map/filter/reduce patterns, recursion)
  - `JavaScript Fundamentals Review/` — Revisited/refactored fundamentals
  - `Daily Code Challenge/` — Date-prefixed files (`YYYY-MM-DD-name.js`) for daily practice
- `coding-notes/` — Auto-generated daily markdown logs (created by GitHub Actions, not manually edited)
- `.github/workflows/daily-streak.yml` — GitHub Actions workflow that commits a daily coding note at 6 PM Vietnam time (UTC+7)

## Code Style

- Solutions use detailed inline comments with real-world analogies (e.g., "pastries in a box" for array flattening) to reinforce understanding
- Test cases are `console.log` calls with expected output in comments
- File names are descriptive: `build-a-{thing}.js`, `implement-a-{algorithm}.js`, `create-a-{tool}.js`
