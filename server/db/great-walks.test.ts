import { describe, it, expect, beforeAll, beforeEach } from 'vitest'

import connection from './connection'
import { getAllWalks, getWalkById } from './great-walks.ts'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

describe('Get all Great Walks', () => {
  it('returns all walks with the correct fields', async () => {
    const walks = await getAllWalks()
    expect(walks).toHaveLength(11)
    expect(walks[0]).toHaveProperty('id')
    expect(walks[0]).toHaveProperty('name')
    expect(walks[0]).toHaveProperty('difficulty')
    expect(walks[0]).toHaveProperty('elevation')
    expect(walks[0]).toHaveProperty('duration')
    expect(walks[0]).toHaveProperty('distance')
    expect(walks[0]).toHaveProperty('location')
    expect(walks[0]).toHaveProperty('description')
    expect(walks[0]).toHaveProperty('seasonal')
    expect(walks[0]).toHaveProperty('requiredEquipment')
    expect(walks[0]).toHaveProperty('trackImageUrl')
    expect(walks[0]).toHaveProperty('docLink')
  })
})

describe('Required equipment fields for Great Walks', () => {
  it('contains all expected equipment fields with boolean values', async () => {
    const walks = await getAllWalks()
    const equipment = walks[0].requiredEquipment

    const expectedFields = [
      'backpack',
      'waterproofPackLiner',
      'sleepingBag',
      'firstAidKit',
      'survivalKit',
      'safetyEquipment',
      'torchFlashlight',
      'rubbishBag',
      'bookingConfirmationAndId',
      'earplugsForBunkrooms',
      'drinkBottle',
      'eatingAndCookingUtensils',
      'gasCookerAndFuel',
      'matchesOrLighter',
      'generalToiletries',
      'backupToiletOption',
      'tent',
      'sleepingMat',
      'groundSheet',
      'walkingClothes',
      'hikingBoots',
      'socks',
      'shorts',
      'shirt',
      'underLayers',
      'midLayers',
      'raincoat',
      'overtrousers',
      'warmHatAndGloves',
      'sunhatAndSunglasses',
      'extraSocksUnderwearAndShirt',
      'gaiters',
      'lightweightShoesForHuts',
      'carryFood',
      'lightweightFood',
      'emergencyFood',
      'foodStorage',
      'emergencyShelter',
      'distressBeacon',
      'cookingFacilities',
      'sanitaryBins',
      'gasCooker',
      'fireStarters',
      'lifeJacket',
      'kayakOrCanoe',
      'paddles',
      'plasticDrumsOrEquivalent',
      'dryBags',
      'swimwear',
      'sandalsOrAquaShoes',
      'portableStoveAndFuel',
      'candles',
      'docConfirmationLetter',
    ]

    expectedFields.forEach((field) => {
      expect(equipment).toHaveProperty(field)
      expect(typeof equipment[field as keyof typeof equipment]).toBe('boolean')
    })
  })
})

describe('Get walk by walk id', () => {
  const expectedFields = [
    'backpack',
    'waterproofPackLiner',
    'sleepingBag',
    'firstAidKit',
    'survivalKit',
    'safetyEquipment',
    'torchFlashlight',
    'rubbishBag',
    'bookingConfirmationAndId',
    'earplugsForBunkrooms',
    'drinkBottle',
    'eatingAndCookingUtensils',
    'gasCookerAndFuel',
    'matchesOrLighter',
    'generalToiletries',
    'backupToiletOption',
    'tent',
    'sleepingMat',
    'groundSheet',
    'walkingClothes',
    'hikingBoots',
    'socks',
    'shorts',
    'shirt',
    'underLayers',
    'midLayers',
    'raincoat',
    'overtrousers',
    'warmHatAndGloves',
    'sunhatAndSunglasses',
    'extraSocksUnderwearAndShirt',
    'gaiters',
    'lightweightShoesForHuts',
    'carryFood',
    'lightweightFood',
    'emergencyFood',
    'foodStorage',
    'emergencyShelter',
    'distressBeacon',
    'cookingFacilities',
    'sanitaryBins',
    'gasCooker',
    'fireStarters',
    'lifeJacket',
    'kayakOrCanoe',
    'paddles',
    'plasticDrumsOrEquivalent',
    'dryBags',
    'swimwear',
    'sandalsOrAquaShoes',
    'portableStoveAndFuel',
    'candles',
    'docConfirmationLetter',
  ]

  for (let id = 1; id <= 11; id++) {
    it(`returns walk with id ${id} and includes all required properties`, async () => {
      const walk = await getWalkById(id)

      expect(walk).toBeInstanceOf(Object)
      expect(walk).toHaveProperty('id', id)
      expect(walk).toHaveProperty('name')
      expect(walk).toHaveProperty('difficulty')
      expect(walk).toHaveProperty('elevation')
      expect(walk).toHaveProperty('duration')
      expect(walk).toHaveProperty('distance')
      expect(walk).toHaveProperty('location')
      expect(walk).toHaveProperty('description')
      expect(walk).toHaveProperty('seasonal')
      expect(walk).toHaveProperty('trackImageUrl')
      expect(walk).toHaveProperty('docLink')
      expect(walk).toHaveProperty('requiredEquipment')

      const equipment = walk.requiredEquipment
      expect(typeof equipment).toBe('object')

      expectedFields.forEach((field) => {
        expect(equipment).toHaveProperty(field)
        expect(typeof equipment[field as keyof typeof equipment]).toBe(
          'boolean'
        )
      })
    })
  }
})
