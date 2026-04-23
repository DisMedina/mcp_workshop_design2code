# Project: MCP Workshop — Design to Code Demo

## Stack
- Vite + React 18 + TypeScript
- Tailwind CSS v4 (via @tailwindcss/vite plugin)
- Single-page app, no routing

## File layout
- `src/main.tsx` — Vite entry point (do not modify)
- `src/index.css` — Tailwind v4 import (do not modify)
- `src/App.tsx` — root component, renders the imported mockup component only
- `src/components/` — all UI components, one file per component
- `src/components/<ComponentName>.tsx` — PascalCase filename matching the export

## Coding conventions
- Functional components only, no classes
- Tailwind utility classes; use arbitrary values for exact design matches (e.g., `w-[724px]`, `bg-[#3700FF]/48`)
- No custom CSS unless Tailwind genuinely cannot express the style
- Use semantic HTML (`<main>`, `<section>`, `<header>`) where appropriate
- TypeScript strict mode; explicit prop types via `type` (not `interface`)

## Git workflow
- All new work on a feature branch off `main`
- Branch naming: `feature/<short-kebab-case-description>`
- Pull requests target `main`
- Commit messages: imperative mood ("Add X" not "Added X")

## When asked to implement a Figma design
1. Use the framelink-figma MCP to read the design data first
2. Use the structural data (positions, sizes, rgba fills, fonts) — do not guess from the visual
3. Match design tokens exactly; use Tailwind arbitrary values for pixel-perfect reproduction
4. Render the result as a single-page view at the root of `App.tsx`
