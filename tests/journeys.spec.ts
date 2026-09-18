import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('visitor can compare outputs and view the rubric', async ({ page }) => {
  await page.goto('/#experiment')
  await expect(page.getByRole('heading', { name: /what changes when the agent/i })).toBeVisible()
  await page.getByRole('button', { name: 'Brief only' }).click()
  await expect(page.getByText('BRIEF-ONLY EXAMPLE')).toBeVisible()
  await page.getByRole('button', { name: 'With system guidance' }).click()
  await expect(page.getByText('SYSTEM-GUIDED EXAMPLE')).toBeVisible()
  await page.getByRole('button', { name: 'Change notification preferences' }).click()
  await expect(page.getByText('Choose which workspace updates reach your inbox.')).toBeVisible()
})

test('visitor can explore prototype states', async ({ page }) => {
  await page.goto('/#studio')
  await page.getByRole('button', { name: 'Send invitation' }).click()
  await expect(page.getByText('Invitation sent')).toBeVisible()
  await page.getByRole('button', { name: 'Page banner' }).click()
  await page.getByRole('button', { name: 'Send invitation' }).click()
  await expect(page.getByText('Invitation sent')).toBeVisible()
})

test('visitor can decide on a contribution', async ({ page }) => {
  await page.goto('/#contribution')
  await page.getByRole('button', { name: 'error', exact: true }).click()
  await expect(page.getByText('Invitation not sent')).toBeVisible()
  await page.getByRole('button', { name: 'Request revision' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.getByRole('button', { name: 'Continue review' }).click()
  await expect(page.getByText('Returned for revision')).toBeVisible()
})

test('main experiences have no detectable accessibility violations', async ({ page }) => {
  for (const route of ['home', 'experiment', 'studio', 'contribution', 'system']) {
    await page.goto(`/#${route}`)
    const results = await new AxeBuilder({ page }).analyze()
    expect(results.violations.map(v => ({ id: v.id, targets: v.nodes.map(node => node.target.join(' ')) })), route).toEqual([])
  }
})
