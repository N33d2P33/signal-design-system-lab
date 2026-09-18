# Exploration and decisions

Date: 18 September 2026

## Reference review

- [Meta Astryx](https://github.com/facebook/astryx) demonstrates discoverable component guidance and tooling for both people and agents. Signal tests the smaller question of whether guidance changes one task outcome.
- [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) can pass design context between Figma and coding agents. Signal keeps that connection as a later extension because the first release can demonstrate the workflow with local guidance.
- [Storybook](https://storybook.js.org/docs/writing-docs/autodocs) supplies browsable component states. Signal uses it as a development workspace, with the public experiences designed separately.

## Visitor journey sketches

1. **Evaluate:** choose a team operations task → compare two curated outputs → inspect the rubric and designer corrections.
2. **Create:** choose a task and requirements → interact with a working prototype → inspect the system rules behind it.
3. **Govern:** try a proposed invitation feedback pattern → inspect strengths and gaps → record a session decision.

## Scope decision

Northstar is a fictional team operations product. Inviting a teammate and changing notification preferences both need familiar form controls and clear action feedback, allowing five small components to support all three experiences. There is no live AI or saved account data. This keeps each journey dependable for a portfolio visitor.
