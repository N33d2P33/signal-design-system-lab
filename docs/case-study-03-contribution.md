# Case study 03 — A reviewable path for agent-proposed design system changes

## Overview

The contribution simulator presents a proposed invitation feedback pattern with pending, success, and error states. Visitors try the states, inspect the tradeoffs, and choose to accept, revise, or reject the proposal.

## The challenge

Agent-assisted product work can surface new patterns faster than a design system team can safely adopt them. A clear contribution process needs to show the problem, the system impact, and the decision that a person must make.

## My approach

I made the proposal concrete: it affects the invitation flow, Button, Alert, and the usage guidance. The review panel calls out strengths and unresolved questions. A visitor's decision updates the page for that browser session, making the workflow tangible without implying that the design system has changed for everyone.

## Working with Codex

Codex built the interactive states and decision flow. I reviewed the language and added an explicit note about session-only decisions. Browser checks covered the three states, decision interaction, and automated accessibility issues.

## Outcome and next step

The experience demonstrates a human governance role in an agent-assisted system. A later version could save proposals, attach Figma and code evidence, and open a GitHub review after approval.

**Portfolio links:** live experience `/#contribution`; repository; selected Figma frames.
