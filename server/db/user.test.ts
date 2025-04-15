import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import connection from './connection.ts'
import { upsertProfile, getUser } from './user.ts'
import { UserSC } from '../../models/user.ts'
import { afterEach } from 'node:test'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

// Helper to generate full equipment object
function getDefaultEquipment(
  overrides: Partial<UserSC['my_equipment']> = {}, // Optional parameter to provide overrides for specific properties
): UserSC['my_equipment'] {
  return {
    // Default equipment properties, all set to false initially

    backpack: false,
    waterproof_pack_liner: false,
    sleeping_bag: false,
    first_aid_kit: false,
    survival_kit: false,
    safety_equipment: false,
    torch_flashlight: false,
    rubbish_bag: false,
    booking_confirmation_and_id: false,
    earplugs_for_bunkrooms: false,
    drink_bottle: false,
    eating_and_cooking_utensils: false,
    gas_cooker_and_fuel: false,
    matches_or_lighter: false,
    general_toiletries: false,
    backup_toilet_option: false,
    tent: false,
    sleeping_mat: false,
    ground_sheet: false,
    walking_clothes: false,
    hiking_boots: false,
    socks: false,
    shorts: false,
    shirt: false,
    under_layers: false,
    mid_layers: false,
    raincoat: false,
    overtrousers: false,
    warm_hat_and_gloves: false,
    sunhat_and_sunglasses: false,
    extra_socks_underwear_and_shirt: false,
    gaiters: false,
    lightweight_shoes_for_huts: false,
    carry_food: false,
    lightweight_food: false,
    emergency_food: false,
    food_storage: false,
    emergency_shelter: false,
    distress_beacon: false,
    cooking_facilities: false,
    sanitary_bins: false,
    gas_cooker: false,
    fire_starters: false,
    life_jacket: false,
    kayak_or_canoe: false,
    paddles: false,
    plastic_drums_or_equivalent: false,
    dry_bags: false,
    swimwear: false,
    sandals_or_aqua_shoes: false,
    portable_stove_and_fuel: false,
    candles: false,
    doc_confirmation_letter: false,

    // The `...overrides` spread operator allows you to pass in any properties you want to override the defaults
    // This way, you can change only the properties you care about and leave the others as false

    ...overrides,
  }
}

describe('upsertProfile', () => {
  const baseUser: UserSC = {
    id: 'auth0|test123',
    username: 'test_t',
    name: 'test user',
    email: 'test@example.com',
    phone: '1234567890',
    result: 'passed',
    my_equipment: getDefaultEquipment({
      backpack: true,
      raincoat: true,
      hiking_boots: true,
    }),
  }

  it('inserts a new user profile into the database', async () => {
    await upsertProfile(baseUser)

    const inserted = await connection('users')
      .where({ id: baseUser.id })
      .first()

    expect(inserted).toBeDefined()
    expect(inserted.username).toBe(baseUser.username)
    expect(inserted.name).toBe(baseUser.name)
    expect(inserted.result).toBe(baseUser.result)

    const equipment = JSON.parse(inserted.my_equipment)
    expect(equipment.backpack).toBe(true)
    expect(equipment.raincoat).toBe(true)
    expect(equipment.hiking_boots).toBe(true)
  })

  it('updates an existing user profile if the ID already exists', async () => {
    await upsertProfile(baseUser)

    const updatedUser: UserSC = {
      ...baseUser,
      name: 'updated name',
      result: 'updated_result',
      my_equipment: getDefaultEquipment({
        backpack: false,
        raincoat: false,
        hiking_boots: true,
        sunhat_and_sunglasses: true,
      }),
    }

    await upsertProfile(updatedUser)

    const updated = await connection('users')
      .where({ id: updatedUser.id })
      .first()

    expect(updated.name).toBe('updated name')
    expect(updated.result).toBe('updated_result')

    const equipment = JSON.parse(updated.my_equipment)
    expect(equipment.backpack).toBe(false)
    expect(equipment.raincoat).toBe(false)
    expect(equipment.sunhat_and_sunglasses).toBe(true)
  })
})

// getUser(id: string)
describe('get User by id', () => {
  const baseUser = {
    id: 'auth0|test123',
    username: 'test_t',
    name: 'test user',
    email: 'test@example.com',
    phone: '1234567890',
    my_equipment: JSON.stringify({
      backpack: true,
      raincoat: true,
      hiking_boots: true,
    }),
  }

  // Insert a test user into the database before each test
  beforeEach(async () => {
    await connection('users').insert(baseUser)
  })

  afterEach(async () => {
    await connection('users').where({ id: baseUser.id }).del()
  })

  it('should fetch a user from the database and parse the equipment correctly', async () => {
    const user = await getUser(baseUser.id)

    // Check if the user data is correct
    expect(user.id).toBe(baseUser.id)
    expect(user.username).toBe(baseUser.username)
    expect(user.name).toBe(baseUser.name)
    expect(user.email).toBe(baseUser.email)
    expect(user.phone).toBe(baseUser.phone)

    // Check if the equipment data is correctly parsed
    expect(user.myEquipment).toBeDefined()
    expect(user.myEquipment.backpack).toBe(true)
    expect(user.myEquipment.raincoat).toBe(true)
    expect(user.myEquipment.hikingBoots).toBe(true)
  })

  it('should throw an error if the user does not exist', async () => {
    try {
      await getUser('non-existent-id')
    } catch (error: unknown) {
      const err = error as Error // Assert that error is of type Error
      expect(err.message).toBe('User with id non-existent-id not found')
    }
  })
})
