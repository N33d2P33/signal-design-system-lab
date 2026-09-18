# Agent output and review record

## Provenance

The React screens in this repository were produced during this Codex implementation session and edited after build and accessibility checks. The public comparison panels are **curated illustrative variants**, assembled to make specific system rules inspectable. They were not produced by two independent, repeatable agent runs. The listed prompts are recipes for a future controlled run, not a claim that separate runs have already occurred.

This distinction should remain visible in any portfolio case study. The rubric scores are editorial judgements about these examples, not measured model performance.

## Prompt recipes for a later controlled run

**Brief-only:** “Using the product brief, build a usable interface for this task. Keep the implementation concise.”

**System-guided:** “Using the product brief, build a usable interface for this task. Read AGENTS.md and the component stories first. Use only documented components and states. Check labels, keyboard use, pending feedback, success and errors before finishing.”

For a true future benchmark, run both recipes in clean, separate branches with the same model and task brief, retain their unedited outputs, and record subsequent human corrections separately.

## Designer review of the curated first release

- **Invitation:** Added explicit labels, an invitation expiry note, and a close-to-action outcome message. The first implementation had an improvised modal; changed it to a native dialog to use browser focus behaviour.
- **Preferences:** Kept each choice descriptive, grouped the options, and placed save feedback beside the action.
- **Accessibility:** Browser scans found muted text below contrast targets. Darkened secondary text and action links; reran scans on desktop and mobile.
- **Governance:** The contribution proposal distinguishes pending, success, and error states, and makes the session-only nature of a decision explicit.

## Rubric

Each criterion is scored 1–4: component use, states and feedback, accessibility, and task clarity. Current scores describe the authored examples in `src/content/scenarios.ts`; they are not a comparison across many outputs.
