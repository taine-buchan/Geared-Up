/* eslint-disable @typescript-eslint/no-explicit-any */
//@vitest-environment jsdom

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { JustUserEquipment } from '../../models/user'
import UserEquipmentChecklist from '../components/UserEquipmentChecklist'

// Mock useAuth0
vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    isAuthenticated: true,
    loginWithRedirect: vi.fn(),
  }),
}))

describe('UserEquipmentChecklist', () => {
  const defaultProps = {
    requiredEquipmentDisplay: [
      ['backpack', false],
      ['tent', false],
    ] as [keyof JustUserEquipment, false][],
    userEquipment: { backpack: false, tent: false },
    setUserEquipment: vi.fn(),
    handleSubmit: vi.fn(),
    isDisabled: false,
  }

  it('renders checkboxes for equipment', () => {
    render(<UserEquipmentChecklist {...defaultProps} />)
    expect(screen.getByText('Tent')).toBeVisible()
    expect(screen.getByText('Backpack')).toBeInTheDocument()
    expect(screen.getByTestId('equipment-button')).toBeInTheDocument()
  })

  it('calls setUserEquipment when checkbox is clicked', () => {
    const setUserEquipmentMock = vi.fn()
    render(
      <UserEquipmentChecklist
        {...defaultProps}
        setUserEquipment={setUserEquipmentMock}
      />,
    )

    const checkbox = screen.getAllByRole('checkbox')[0]
    fireEvent.click(checkbox)
    expect(setUserEquipmentMock).toHaveBeenCalled()
  })

  it('disables checkbox and button when isDisabled is true', () => {
    render(<UserEquipmentChecklist {...defaultProps} isDisabled={true} />)

    screen.getAllByRole('checkbox').forEach((checkbox) => {
      expect(checkbox).toBeDisabled()
    })

    expect(screen.getByTestId('equipment-button')).toBeDisabled()
  })

  it('calls handleSubmit when update button is clicked', () => {
    render(<UserEquipmentChecklist {...defaultProps} />)

    const button = screen.getByTestId('equipment-button')
    fireEvent.click(button)
    expect(defaultProps.handleSubmit).toHaveBeenCalled()
  })
})
