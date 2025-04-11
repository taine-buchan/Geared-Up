// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderRoute } from './setup.tsx'

import nock from 'nock'

describe('Visiting the great walks page', () => {
  it('shows a loading indicator', async () => {
    const screen = renderRoute('/great-walks')
    const indicator = screen.getByLabelText('Animation of hiker walking')
    expect(indicator).toBeVisible()
  })

  it('shows an error message when server failed', async () => {
    nock('http://localhost').get('/api/v1/great-walks').reply(500, 'Error!')
    const screen = renderRoute('/great-walks')
    const errorMessage = await screen.findByText(/Something went wrong.../)
    expect(errorMessage).toBeVisible()
  })

  it('shows a list of great walks', async () => {
    const testList = [
      {
        id: 1,
        name: 'test-name',
        difficulty: 'Intermediate',
        elevation: 'test-elevation',
        duration: '3-4 days',
        distance: '46 km one way',
        location: 'test-location',
        description: 'test-description',
        seasonal: 'All year',
        trackImageUrl: 'test-url',
        docLink: 'test-doclink',
        requiredEquipment: '',
      },
      {
        id: 2,
        name: 'test-name',
        difficulty: 'Intermediate',
        elevation: 'test-elevation',
        duration: '3-4 days',
        distance: '46 km one way',
        location: 'test-location',
        description: 'test-description',
        seasonal: 'All year',
        trackImageUrl: 'test-url',
        docLink: 'test-doclink',
        requiredEquipment: '',
      },
    ]
    nock('http://localhost').get('/api/v1/great-walks').reply(200, testList)
    const screen = renderRoute('/great-walks')

    const listHeading = await screen.findByRole('heading', {
      name: 'Great Walks',
    })

    expect(listHeading).toBeVisible()
  })
})
