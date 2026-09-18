# Signal Figma foundation handoff

This is the exact design specification for a Figma library. It is also reflected in `src/styles.css` and the shared React components.

An [importable visual board](signal-foundation-board.svg) accompanies this specification. It has also been placed in the [Signal Design System Lab — Foundations Figma file](https://www.figma.com/design/2MtZ9vwaEgSbSNhtFcbtWE/Signal-Design-System-Lab-%E2%80%94-Foundations) as editable vector and text layers. Native Figma components and variants still need to be created from these examples.

## File structure

1. **Foundations:** colour, typography, spacing, radius, and focus examples.
2. **Components:** Button, Text Field, Checkbox, Alert, Dialog, each with the states below.
3. **Task patterns:** teammate invitation and notification preferences at desktop and mobile widths.

## Foundations

| Token | Value | Use |
|---|---|---|
| Canvas | `#F5F2EC` | Site background |
| Ink | `#16253B` | Primary text |
| Action | `#2450C8` | Interactive blue with readable contrast |
| Muted text | `#455468` | Secondary text |
| Success surface | `#EAF6ED` | Positive feedback |
| Error surface | `#FFF0EF` | Error feedback |
| Focus ring | `3px solid #F39C54`, 3px offset | Keyboard focus |
| Control radius | `7–9px` | Inputs and buttons |
| Card radius | `12–18px` | Panels and larger surfaces |

Typography: Manrope for headings, DM Sans for interface copy; use system fallbacks when those fonts are unavailable. Base body copy is 13–16px depending on context, with 1.5–1.65 line height. Spacing follows a practical 4px base scale: 4, 8, 12, 16, 24, 32, 48.

## Component variants

| Component | First-release variants and states | Design rule |
|---|---|---|
| Button | Primary, secondary, ghost, disabled, focus | One primary action per task surface |
| Text Field | Default, hint, error, focus | Always include a visible label |
| Checkbox | Checked, unchecked, disabled, focus | Describe the effect of a preference |
| Alert | Information, success, error | Put status near the relevant action |
| Dialog | Open, closed, focus | Use for a decision that interrupts the current task |

## Example frames

- Invite a teammate: 720px desktop task panel, 360px mobile task panel.
- Notification preferences: the same widths and shared components.
- Contribution feedback: pending, success, and error states side by side.

The Figma file is saved in the user's Drafts. The imported board and local site are the source material for creating reusable native Figma components and variants.
