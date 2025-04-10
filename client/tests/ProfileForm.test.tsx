import { describe, it, expect, vi } from 'vitest'
import { screen } from '@testing-library/react'

import ProfileForm from '../components/ProfileForm'
import { renderComponent } from './setup'
import { UserProfileData } from '../../models/user'

describe('ProfileForm', () => {
  it('handle submit should be called when form is submitted', async () => {
    const handleSubmit = vi.fn((form: UserProfileData) => {
      expect(form).toMatchObject({
        name: 'test-name',
        username: 'test-username',
        phone: 'test-phone',
        email: 'test-email',
      })
    })

    const { user } = renderComponent(
      <ProfileForm handleSubmit={handleSubmit} />
    )

    await user.type(screen.getByLabelText('Name *'), 'test-name')
    await user.type(screen.getByLabelText('User Name *'), 'test-username')
    await user.type(screen.getByLabelText('Email *'), 'test-email')
    await user.type(screen.getByLabelText('Phone Number *'), 'test-phone')

    const form = screen.getByRole('button', { name: 'Submit' })
    await user.click(form)

    expect(handleSubmit).toHaveBeenCalled()
  })
})
