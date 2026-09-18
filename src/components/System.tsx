import { useEffect, useRef, type ButtonHTMLAttributes, type InputHTMLAttributes, type PropsWithChildren } from 'react'

export function Button({ variant = 'primary', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' }) {
  return <button {...props} className={`button button--${variant} ${props.className ?? ''}`} />
}

export function TextField({ label, hint, error, id, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string }) {
  const fieldId = id ?? label.toLowerCase().replace(/\W+/g, '-')
  return <div className="field"><label htmlFor={fieldId}>{label}</label><input {...props} id={fieldId} aria-invalid={!!error} aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined} />{hint && !error && <small id={`${fieldId}-hint`}>{hint}</small>}{error && <small className="field-error" id={`${fieldId}-error`}>{error}</small>}</div>
}

export function Checkbox({ label, description, id, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; description?: string }) {
  const fieldId = id ?? label.toLowerCase().replace(/\W+/g, '-')
  return <label className="check-row" htmlFor={fieldId}><input {...props} id={fieldId} type="checkbox" /><span><strong>{label}</strong>{description && <small>{description}</small>}</span></label>
}

export function Alert({ tone = 'info', title, children }: PropsWithChildren<{ tone?: 'info' | 'success' | 'error'; title: string }>) {
  return <div className={`alert alert--${tone}`} role={tone === 'error' ? 'alert' : 'status'}><span className="alert-mark" aria-hidden="true">{tone === 'success' ? '✓' : tone === 'error' ? '!' : 'i'}</span><div><strong>{title}</strong><p>{children}</p></div></div>
}

export function Dialog({ open, title, children, onClose }: PropsWithChildren<{ open: boolean; title: string; onClose: () => void }>) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => { const dialog = ref.current; if (!dialog) return; if (open && !dialog.open) dialog.showModal(); if (!open && dialog.open) dialog.close() }, [open])
  return <dialog ref={ref} className="dialog" aria-labelledby="dialog-title" onCancel={onClose}><div className="dialog-heading"><h2 id="dialog-title">{title}</h2><button className="icon-button" type="button" aria-label="Close dialog" onClick={onClose}>×</button></div>{children}</dialog>
}
