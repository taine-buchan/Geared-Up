import { describe, it, expect, beforeAll } from 'vitest'
import db from '../db/connection'

import request from 'supertest'
import server from '../server'

beforeAll(async () => {
  await db.migrate.latest()
  await db.seed.run()
})

describe('Get a single walk by id', () => {
  it('should return 200 with the correct great walk', async () => {
    const res = await request(server).get('/api/v1/great-walks/1')
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('Lake Waikaremoana')
  })
})

describe('Get all walks', () => {
  it('should return 200 with all great walks', async () => {
    const res = await request(server).get('/api/v1/great-walks')
    expect(res.status).toBe(200)
    expect(res.body[0].name).toBe('Lake Waikaremoana')
  })
})

describe('PUT /api/v1/great-walks/', () => {
  it('should return 401 when no auth token is provided', async () => {
    const FakeData = {
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
    }
    const response = await request(server)
      .put(`/api/v1/great-walks/1`)
      .send(FakeData)
    expect(response.status).toBe(401)
  })
})
