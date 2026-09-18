# Case study 01 — Can design system guidance improve an agent's starting point?

## Overview

I designed a small experiment around two everyday team operations tasks: inviting a teammate and changing notification preferences. Visitors can compare a brief-only example with a system-guided example, inspect the differences, and see where designer review was still needed.

## The challenge

An agent can produce a plausible screen quickly, but a plausible screen can miss the system's component choices, feedback states, and accessibility rules. I wanted to make those design decisions visible and easy to discuss.

## My approach

I defined five reusable components and a four-part assessment rubric. The interactive comparison presents two curated variants for each task and explains the rule behind each annotation. I kept the same task brief in view so the visitor can judge the design response in context.

## Working with Codex

Codex helped build the shared React implementation and the comparison interface. I reviewed the output, corrected the feedback and modal behaviour, and changed low-contrast text found in browser checks. The first-release variants are illustrative; the prompt recipes are documented for a later controlled agent comparison.

## Outcome and next step

The published experience makes system guidance tangible and gives viewers a way to question the rubric. A next iteration would run the two prompts independently in clean branches and compare their unedited outputs before human correction.

**Links to add in Framer:** live experience `/#experiment`; repository; selected Figma frames.
