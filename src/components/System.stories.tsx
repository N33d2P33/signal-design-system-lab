import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Alert, Button, Checkbox, Dialog, TextField } from './System'

const meta = { title: 'Signal / Components', component: Button, tags: ['autodocs'], parameters: { docs: { description: { component: 'Five deliberately small building blocks. Use one primary action per surface, clear labels, and feedback near its action.' } } } } satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>
export const PrimaryButton: Story = { args: { children: 'Send invitation', variant: 'primary' } }
export const SecondaryButton: Story = { args: { children: 'Cancel', variant: 'secondary' } }
export const DisabledButton: Story = { args: { children: 'Sending…', disabled: true } }
export const TextFieldDefault: Story = { render: () => <div style={{ maxWidth: 360 }}><TextField label="Email address" type="email" hint="We’ll send an invitation to this address." placeholder="name@example.com" /></div> }
export const TextFieldError: Story = { render: () => <div style={{ maxWidth: 360 }}><TextField label="Email address" type="email" error="Enter a valid email address." defaultValue="not-an-email" /></div> }
export const CheckboxDefault: Story = { render: () => <Checkbox label="Project updates" description="Changes on projects you follow." defaultChecked /> }
export const CheckboxDisabled: Story = { render: () => <Checkbox label="Project updates" description="Unavailable for this workspace." disabled /> }
export const AlertInfo: Story = { render: () => <Alert title="A useful message">Status appears close to the action it describes.</Alert> }
export const AlertSuccess: Story = { render: () => <Alert tone="success" title="Invitation sent">Alex can now join the workspace.</Alert> }
export const AlertError: Story = { render: () => <Alert tone="error" title="Invitation not sent">Try again. Your form details are still here.</Alert> }
export const DialogInteractive: Story = { render: () => { const [open, setOpen] = useState(false); return <><Button onClick={() => setOpen(true)}>Open dialog</Button><Dialog open={open} title="Confirm invitation" onClose={() => setOpen(false)}><p>Send an invitation to this teammate?</p><Button onClick={() => setOpen(false)}>Confirm</Button></Dialog></> } }
