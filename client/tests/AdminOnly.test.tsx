// import { waitFor } from '@testing-library/react'
// import nock from 'nock'
// import { describe, expect, it, vi, afterEach } from 'vitest'

// import { AdminOnly } from '../components/AdminOnly'
// import { renderWithQuery } from './setup' // same helper you used in AddProfile test

// vi.mock('@auth0/auth0-react', () => ({
//   useAuth0: () => ({
//     user: {
//       sub: 'auth0|admin-user',
//       email: 'admin@example.com',
//     },
//     isAuthenticated: true,
//     getAccessTokenSilently: vi.fn().mockResolvedValue('token'),
//   }),
// }))

// describe('<AdminOnly /> Integration', () => {
//   afterEach(() => {
//     vi.clearAllMocks()
//     nock.cleanAll()
//   })

//   it('should show loading first, then allow access if user is admin', async () => {
//     nock('http://localhost')
//       .get('/api/v1/user')
//       .reply(200, {
//         id: 'auth0|67fc3e8358b53e94bf0b4c29',
//         username: 'harakeke2025444',
//         name: 'admin harakeke25',
//         email: 'harakeke2025@gmail.com',
//         phone: '+64 2121486803',
//         role: 'admin',
//         result: '',
//         myEquipment: {
//           backpack: true,
//           waterproofPackLiner: true,
//           sleepingBag: false,
//           firstAidKit: false,
//           survivalKit: false,
//           safetyEquipment: false,
//           torchFlashlight: false,
//           rubbishBag: false,
//           bookingConfirmationAndId: false,
//           earplugsForBunkrooms: false,
//           drinkBottle: false,
//           eatingAndCookingUtensils: false,
//           gasCookerAndFuel: false,
//           matchesOrLighter: false,
//           generalToiletries: false,
//           backupToiletOption: false,
//           tent: false,
//           sleepingMat: false,
//           groundSheet: false,
//           walkingClothes: false,
//           hikingBoots: false,
//           socks: false,
//           shorts: false,
//           shirt: false,
//           underLayers: false,
//           midLayers: false,
//           raincoat: false,
//           overtrousers: false,
//           warmHatAndGloves: false,
//           sunhatAndSunglasses: false,
//           extraSocksUnderwearAndShirt: false,
//           gaiters: false,
//           lightweightShoesForHuts: false,
//           carryFood: false,
//           lightweightFood: false,
//           emergencyFood: false,
//           foodStorage: false,
//           emergencyShelter: false,
//           distressBeacon: false,
//           cookingFacilities: false,
//           sanitaryBins: false,
//           gasCooker: false,
//           fireStarters: false,
//           lifeJacket: false,
//           kayakOrCanoe: true,
//           paddles: false,
//           plasticDrumsOrEquivalent: false,
//           dryBags: false,
//           swimwear: false,
//           sandalsOrAquaShoes: false,
//           portableStoveAndFuel: false,
//           candles: false,
//           docConfirmationLetter: false,
//         },
//       })

//     // const { getByText, queryByText } = renderWithQuery(
//     const container = renderWithQuery(
//       <AdminOnly>
//         <p>Secret content</p>
//       </AdminOnly>,
//     )
//     // console.log('user', user)

//     container.debug()

//     // Loading initially

//     const loading = container.getByAltText('Mountain landscape for hiking')
//     expect(loading).toBeInTheDocument()

//     // Wait for the mocked request to complete
//     // expect(scope.isDone()).toBeTruthy()

//     // Then the admin content should appear
//     // await waitFor(() => {
//     //   // expect(queryByText('Secret content')).toBeInTheDocument()
//     //   // expect(queryByText('Loading...')).not.toBeInTheDocument()
//     // })
//     // container.debug()
//   })

//   it('should deny access if user is not admin', async () => {
//     const scope = nock('http://localhost').get('/api/v1/user').reply(200, {
//       name: 'Regular User',
//       username: 'user123',
//       email: 'user@example.com',
//       role: 'user',
//       phone: '111-111-1111',
//     })

//     const { getByText, queryByText } = renderWithQuery(
//       <AdminOnly>
//         <p>Secret content</p>
//       </AdminOnly>,
//     )

//     expect(getByText('Loading...')).toBeInTheDocument()

//     await waitFor(() => expect(scope.isDone()).toBeTruthy())

//     await waitFor(() => {
//       expect(getByText('Access denied')).toBeInTheDocument()
//       expect(queryByText('Secret content')).not.toBeInTheDocument()
//     })
//   })
// })
