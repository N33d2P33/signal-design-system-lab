export type TaskId = 'invite' | 'notifications'
export type Criterion = 'Component use' | 'States and feedback' | 'Accessibility' | 'Task clarity'
export type Assessment = Record<Criterion, number>

export const rubric: { name: Criterion; description: string }[] = [
  { name: 'Component use', description: 'Uses approved components and their documented variants.' },
  { name: 'States and feedback', description: 'Shows progress, success and recoverable errors at the right time.' },
  { name: 'Accessibility', description: 'Labels, focus, keyboard use and status messages support more people.' },
  { name: 'Task clarity', description: 'The next step and result are clear without extra explanation.' },
]

export const scenarios = {
  invite: {
    title: 'Invite a teammate',
    brief: 'A workspace admin needs to invite a teammate by email, assign a role and understand whether the invitation was sent.',
    baseline: { 'Component use': 2, 'States and feedback': 1, Accessibility: 2, 'Task clarity': 2 } as Assessment,
    guided: { 'Component use': 4, 'States and feedback': 3, Accessibility: 4, 'Task clarity': 4 } as Assessment,
    baselineNotes: ['A generic button and input do not explain the system role.', 'No pending state or useful failure recovery.', 'The result is detached from the action.'],
    guidedNotes: ['Uses the documented form and action styles.', 'Labels and feedback sit next to the relevant action.', 'The primary next step remains clear.'],
    correction: 'Human review added an explicit failure path and improved the invitation confirmation copy.',
  },
  notifications: {
    title: 'Change notification preferences',
    brief: 'A teammate needs to choose which updates arrive by email and understand when those preferences are saved.',
    baseline: { 'Component use': 2, 'States and feedback': 1, Accessibility: 2, 'Task clarity': 2 } as Assessment,
    guided: { 'Component use': 4, 'States and feedback': 3, Accessibility: 4, 'Task clarity': 4 } as Assessment,
    baselineNotes: ['Controls are visually similar but not presented as a clear group.', 'Save feedback is missing.', 'Preference descriptions are too vague.'],
    guidedNotes: ['Approved checkboxes form a clear preference group.', 'Save action and confirmation are linked.', 'Descriptions explain the effect of each option.'],
    correction: 'Human review made the default selections and save confirmation more explicit.',
  },
} as const

export const prompts = {
  baseline: 'Using the product brief, build a usable interface for this task. Keep the implementation concise.',
  guided: 'Using the product brief, build a usable interface for this task. Read AGENTS.md and the component stories first. Use only documented components and states. Check labels, keyboard use, pending feedback, success and errors before finishing.',
}
