import { vi, describe, it, expect } from 'vitest'
import request from 'supertest'
import server from '../server'
import * as db from '../db/user'
import { getMockToken } from './mockToken'
import { User } from '../../models/user'

vi.mock('../db/user')
vi.mock('../logger.ts')

describe('POST /api/v1/user', () => {
  it('should return 201 when creating a new profile', async () => {
    const equip = {
      backpack: false,
      waterproofPackLiner: false,
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
      kayakOrCanoe: false,
      paddles: false,
      plasticDrumsOrEquivalent: false,
      dryBags: false,
      swimwear: false,
      sandalsOrAquaShoes: false,
      portableStoveAndFuel: false,
      candles: false,
      docConfirmationLetter: false,
    }
    const fakeProfile: User = {
      id: 'auth0|6478f3fd75374ee3d7bc4d94',
      username: 'user.harakeke25',
      name: 'User Harakeke25',
      email: 'user@example.com',
      phone: '+64 21 722 432',
      myEquipment: equip,
      result: '',
    }

    vi.mocked(db.upsertProfile).mockResolvedValue()
    const response = await request(server)
      .post('/api/v1/user')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeProfile)
    expect(response.status).toBe(201)
  })
})
