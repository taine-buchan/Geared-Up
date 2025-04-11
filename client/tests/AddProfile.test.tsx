import { waitFor } from '@testing-library/react'
import nock from 'nock'
import { describe, expect, it, vi } from 'vitest'

import AddProfile from '../components/AddProfile.tsx'
import { renderWithQuery } from './setup.tsx'

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: {
      sub: 'auth0|123',
      email: '',
    },
    isAuthenticated: true,
    getAccessTokenSilently: vi.fn(() => 'token'),
  }),
}))

describe('UserProfilePage', () => {
  it('should render form', async () => {
    const scope = nock('http://localhost').get('/api/v1/user/').reply(201, {
      name: 'test-name',
      username: 'test-username',
      email: 'test@gmail.com',
      phone: '000-0000-0000',
    })

    const container = renderWithQuery(<AddProfile />)
    if (!scope.isDone()) return
    await waitFor(() => expect(scope.isDone()).toBeTruthy())

    const name = container.getByRole('input', { name: /Name */i })
    const username = container.getByRole('input', { name: /Username */i })
    const email = container.getByRole('input', { name: /Email */i })
    const phone = container.getByRole('input', { name: /Phone */i })

    expect(name).toHaveValue('test-name')
    expect(username).toHaveValue('test-username')
    expect(email).toHaveValue('test@gmail.com')
    expect(phone).toHaveValue('000-0000-0000')
  })
})
