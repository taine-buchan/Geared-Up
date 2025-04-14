// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render } from '@testing-library/react'
import { AdminOnly } from '../components/AdminOnly' // update path as needed
import { useUserRole } from '../hooks/useUserRole'

// Mock the custom hook
vi.mock('../hooks/useUserRole')

describe('<AdminOnly>', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders loading state when isLoading is true', () => {
    vi.mocked(useUserRole).mockReturnValue({
      isLoading: true,
      role: undefined,
    })

    const { getByText } = render(
      <AdminOnly>
        <p>Secret content</p>
      </AdminOnly>,
    )

    expect(getByText('Loading...')).toBeInTheDocument()
  })

  it('renders access denied when role is not admin', () => {
    vi.mocked(useUserRole).mockReturnValue({
      isLoading: false,
      role: 'user',
    })

    const { getByText } = render(
      <AdminOnly>
        <p>Secret content</p>
      </AdminOnly>,
    )

    expect(getByText('Access denied')).toBeInTheDocument()
  })

  it('renders children when role is admin', () => {
    vi.mocked(useUserRole).mockReturnValue({
      isLoading: false,
      role: 'admin',
    })

    const { getByText } = render(
      <AdminOnly>
        <p>Secret content</p>
      </AdminOnly>,
    )

    expect(getByText('Secret content')).toBeInTheDocument()
  })
})
