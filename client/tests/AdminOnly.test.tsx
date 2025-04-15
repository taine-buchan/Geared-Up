import nock from 'nock'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { renderRoute } from './setup' // same helper you used in AddProfile test

vi.mock('@auth0/auth0-react', () => ({
  useAuth0: () => ({
    user: {
      // sub: 'auth0|67fc3e8358b53e94bf0b4c29',
      // email: 'harakeke2025@gmail.com',
      email: 'harakeke2025@gmail.com',
      email_verified: false,
      name: 'harakeke2025@gmail.com',
      nickname: 'harakeke2025',
      picture:
        'https://s.gravatar.com/avatar/5c885aa44f38d5a41a8ce23d93a0ac3f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fha.png',
      sub: 'auth0|67fc3e8358b53e94bf0b4c29',
      updated_at: '2025-04-14T01:22:58.645Z',
    },
    isAuthenticated: true,
    getAccessTokenSilently: vi.fn().mockResolvedValue('token'),
  }),
}))

describe('great walk page', () => {
  afterEach(() => {
    vi.clearAllMocks()
    nock.cleanAll()
  })

  it('should show loading first', async () => {
    nock('http://localhost').get('/api/v1/')

    nock('http://localhost')
      .get('/api/v1/user')
      .reply(200, {
        id: 'auth0|67fc3e8358b53e94bf0b4c29',
        username: 'harakeke2025444',
        name: 'admin harakeke25',
        email: 'harakeke2025@gmail.com',
        phone: '+64 2121486803',
        role: 'admin',
        result: '',
        myEquipment: {
          backpack: true,
          waterproofPackLiner: true,
          sleepingBag: false,
          firstAidKit: false,
          survivalKit: false,
          safetyEquipment: false,
          torchFlashlight: false,
          rubbishBag: false,
          bookingConfirmationAndId: false,
          earplugsForBunkrooms: false,
          drinkBottle: false,
          eatingAndCookingUtensils: false,
          gasCookerAndFuel: false,
          matchesOrLighter: false,
          generalToiletries: false,
          backupToiletOption: false,
          tent: false,
          sleepingMat: false,
          groundSheet: false,
          walkingClothes: false,
          hikingBoots: false,
          socks: false,
          shorts: false,
          shirt: false,
          underLayers: false,
          midLayers: false,
          raincoat: false,
          overtrousers: false,
          warmHatAndGloves: false,
          sunhatAndSunglasses: false,
          extraSocksUnderwearAndShirt: false,
          gaiters: false,
          lightweightShoesForHuts: false,
          carryFood: false,
          lightweightFood: false,
          emergencyFood: false,
          foodStorage: false,
          emergencyShelter: false,
          distressBeacon: false,
          cookingFacilities: false,
          sanitaryBins: false,
          gasCooker: false,
          fireStarters: false,
          lifeJacket: false,
          kayakOrCanoe: true,
          paddles: false,
          plasticDrumsOrEquivalent: false,
          dryBags: false,
          swimwear: false,
          sandalsOrAquaShoes: false,
          portableStoveAndFuel: false,
          candles: false,
          docConfirmationLetter: false,
        },
      })

    // const { getByText, queryByText } = renderWithQuery(
    // const container = renderWithQuery(
    //   <AdminOnly>
    //     <p>Secret content</p>
    //   </AdminOnly>,
    // )
    // console.log('user', user)
    const screen = renderRoute('/great-walks/1')

    screen.debug()

    // Loading initially

    const loading = screen.getByAltText('Animation of a Hiker walking')
    expect(loading).toBeInTheDocument()

    // Wait for the mocked request to complete
    // expect(scope.isDone()).toBeTruthy()

    // Then the admin content should appear
    // await waitFor(() => {
    //   // expect(queryByText('Secret content')).toBeInTheDocument()
    //   // expect(queryByText('Loading...')).not.toBeInTheDocument()
    // })
    // container.debug()
  })

  // it.skip('should deny access if user is not admin', async () => {
  //   nock('http://localhost').get('/api/v1/user').reply(200, {
  //     name: 'Regular User',
  //     username: 'user123',
  //     email: 'user@example.com',
  //     role: 'user',
  //     phone: '111-111-1111',
  //   })

  //   const { getByText, queryByText } = renderWithQuery(
  //     <AdminOnly>
  //       <p>Secret content</p>
  //     </AdminOnly>,
  //   )

  //   expect(getByText('Loading...')).toBeInTheDocument()

  //   // await waitFor(() => expect(scope.isDone()).toBeTruthy())

  //   await waitFor(() => {
  //     expect(getByText('Access denied')).toBeInTheDocument()
  //     expect(queryByText('Secret content')).not.toBeInTheDocument()
  //   })
  // })
})
