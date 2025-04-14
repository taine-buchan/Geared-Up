/* eslint-disable @typescript-eslint/no-explicit-any */
//@vitest-environment jsdom

import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
  beforeAll,
} from 'vitest'
import { renderApp } from '../tests/setup'
import { useAuth0 } from '@auth0/auth0-react'
import nock from 'nock'

// Mock out auth0
vi.mock('@auth0/auth0-react')

const ACCESS_TOKEN = 'mock-access-token'

// incase home pages makes api request this mock user will be used in the nock
// const mockUser = [] as User[]

beforeAll(() => {
  nock.disableNetConnect()

  // Add to remove errors in test output
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

beforeEach(() => {
  vi.mocked(useAuth0).mockReturnValue({
    isAuthenticated: true,
    user: { sub: 'user.harakeke25@gmail.com', name: 'user harakeke25' },
    getAccessTokenSilently: vi.fn().mockReturnValue(ACCESS_TOKEN),
    loginWithRedirect: vi.fn(),
    logout: vi.fn(),
  } as any)
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('<LoginButton>', () => {
  it.only('should add a username', async () => {
    // in the future if this home page makes an api react query we can use this nock
    // const scope = nock('http://localhost')
    //   .get('/api/v1/geared-up')
    //   .reply(200, mockUser)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { user, ...screen } = renderApp('/')
    screen.debug()
    // const username = await screen.findByText('Get Started')
    // expect(scope.isDone()).toBe(true)
    // expect(username.textContent).toBe('Get Started')
  })
})
