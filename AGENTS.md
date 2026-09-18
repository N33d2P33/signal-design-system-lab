# Signal design system guidance

Signal is a fictional team operations product. The website is a documented design experiment, not a live AI generator.

Before building or changing an interface:
1. Read `src/components/System.tsx`, its Storybook examples, and `src/content/scenarios.ts`.
2. Reuse Button, TextField, Checkbox, Alert, and Dialog. Use one primary action per task surface.
3. Give form controls visible labels. Keep guidance and feedback close to the action they describe. Preserve user input on an error.
4. Provide pending, success, and recoverable error states for actions that save or send data.
5. Check focus visibility, keyboard interaction, responsive layout, and status announcements.
6. Record assumptions, agent output, and designer corrections in the case study notes. Never present a curated output as live generation or a rubric score as universal evidence.

The public pages share the same components and scenario content. Update those shared sources before changing any one experience's copy or behaviour.
