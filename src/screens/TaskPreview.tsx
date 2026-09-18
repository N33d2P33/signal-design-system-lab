import { useState } from 'react'
import { Alert, Button, Checkbox, TextField } from '../components/System'
import type { TaskId } from '../content/scenarios'

export type Feedback = 'inline' | 'banner'
export function TaskPreview({ task, guided = true, editable = false, feedback = 'inline', clarity = true, recovery = true }: { task: TaskId; guided?: boolean; editable?: boolean; feedback?: Feedback; clarity?: boolean; recovery?: boolean }) {
  const [email, setEmail] = useState('alex@northstar.co')
  const [updates, setUpdates] = useState(true)
  const [mentions, setMentions] = useState(true)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [emailError, setEmailError] = useState('')
  const [attempt, setAttempt] = useState(0)
  const submit = () => { if (task === 'invite' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setEmailError('Enter a valid email address.'); setStatus('idle'); return } setEmailError(''); if (editable && attempt % 3 === 2) setStatus('error'); else setStatus('success'); setAttempt(attempt + 1) }
  const message = status === 'success' ? (task === 'invite' ? 'Invitation sent' : 'Preferences saved') : 'Something went wrong'
  const detail = status === 'success' ? (task === 'invite' ? `${email || 'Your teammate'} can now join the workspace.` : 'Your notification choices are up to date.') : recovery ? 'Your changes were not saved. Please try again.' : 'Your changes were not saved.'

  return <div className={`task-preview ${guided ? '' : 'task-preview--baseline'}`}>
    <div className="preview-top"><span className="preview-brand"><span className="brand-spark">✳</span> northstar</span><span className="preview-meta">Workspace / Settings</span></div>
    <div className="preview-content">
      {task === 'invite' ? <>
        <div className="preview-eyebrow">TEAM MANAGEMENT</div><h3>Invite a teammate</h3><p className="preview-intro">{clarity ? 'Give someone access to your workspace. They’ll receive an email with a link to join.' : 'Invite someone to your workspace.'}</p>
        <div className="preview-form"><TextField label="Email address" type="email" value={email} onChange={event => { setEmail(event.target.value); setEmailError('') }} readOnly={!editable} hint={guided && clarity ? 'We’ll send an invitation to this address.' : undefined} error={emailError} /><div className="field"><label htmlFor="role-select">Workspace role</label><select id="role-select" disabled={!editable}><option>Member — can work on projects</option><option>Admin — can manage the workspace</option></select></div><div className="preview-actions"><Button type="button" onClick={submit} disabled={!editable}>Send invitation</Button>{guided && clarity && <span>Invitation expires in 7 days</span>}</div></div>
      </> : <>
        <div className="preview-eyebrow">PERSONAL SETTINGS</div><h3>Notification preferences</h3><p className="preview-intro">{clarity ? 'Choose which workspace updates reach your inbox.' : 'Manage your notifications.'}</p>
        <div className="preview-form"><Checkbox label="Project updates" description={guided && clarity ? 'Changes and milestones on projects you follow.' : undefined} checked={updates} onChange={event => setUpdates(event.target.checked)} disabled={!editable} /><Checkbox label="Mentions and replies" description={guided && clarity ? 'When someone mentions you or replies to your comment.' : undefined} checked={mentions} onChange={event => setMentions(event.target.checked)} disabled={!editable} /><div className="preview-actions"><Button type="button" onClick={submit} disabled={!editable}>Save preferences</Button>{guided && clarity && <span>You can change these any time</span>}</div></div>
      </>}
      {status !== 'idle' && (feedback === 'inline' || !guided) && <div className="preview-feedback"><Alert tone={status === 'success' ? 'success' : 'error'} title={message}>{detail}</Alert></div>}
      {editable && <p className="simulation-note">Interactive simulation — no email is sent and no settings are saved.</p>}
    </div>
    {status !== 'idle' && feedback === 'banner' && guided && <div className="preview-banner"><Alert tone={status === 'success' ? 'success' : 'error'} title={message}>{detail}</Alert></div>}
  </div>
}
