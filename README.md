# Signal Design System Lab

One fictional design system and three connected portfolio experiences: adherence experiment, prototype studio, and contribution simulator.

## Run locally

```sh
npm install
npm run dev
```

Storybook: `npm run storybook`  
Production build: `npm run build`  
Visitor journeys and accessibility checks: `npm test`

## Structure

- `src/components` — shared design system components and Storybook examples
- `src/content` — briefs, rubric, prompts, and editorial annotations
- `src/screens` — the shared task preview used across experiences
- `docs` — exploration, prompt record, review notes, and portfolio case study copy

## Publishing

Connect this repository to Cloudflare Pages. Use `npm run build` as the build command and `dist` as the output directory. The application uses hash routes, so every experience is reachable without server-side routing. Storybook can remain local.

The example outputs and scores are curated design-study material. There is no live AI call, account, database, or saved contribution state.

The Figma specification and three portfolio case-study drafts are in `docs/`. The Figma file and external portfolio pages are not part of this repository.
