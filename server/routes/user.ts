import express from 'express'
import * as db from '../db/user.ts'

import { validateAccessToken } from '../auth0'
import { logError } from '../logger.ts'
import { UserData } from '../../models/user.ts'

const router = express.Router()

// GET /api/v1/user/

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await db.getUser(auth0Id)
    res.status(200).json(user)
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Unable to find user in the database' })
  }
})

// POST /api/v1/user
// this route is used for both creating and updating a user
router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id: string | undefined = req.auth?.payload.sub
  const form: UserData = req.body

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }

  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }
  const snakeEquipment = {
    backpack: form.myEquipment.backpack,
    waterproof_pack_liner: form.myEquipment.waterproofPackLiner,
    sleeping_bag: form.myEquipment.sleepingBag,
    first_aid_kit: form.myEquipment.firstAidKit,
    survival_kit: form.myEquipment.survivalKit,
    safety_equipment: form.myEquipment.safetyEquipment,
    torch_flashlight: form.myEquipment.torchFlashlight,
    rubbish_bag: form.myEquipment.rubbishBag,
    booking_confirmation_and_id: form.myEquipment.bookingConfirmationAndId,
    earplugs_for_bunkrooms: form.myEquipment.earplugsForBunkrooms,
    drink_bottle: form.myEquipment.drinkBottle,
    eating_and_cooking_utensils: form.myEquipment.eatingAndCookingUtensils,
    gas_cooker_and_fuel: form.myEquipment.gasCookerAndFuel,
    matches_or_lighter: form.myEquipment.matchesOrLighter,
    general_toiletries: form.myEquipment.generalToiletries,
    backup_toilet_option: form.myEquipment.backupToiletOption,
    tent: form.myEquipment.tent,
    sleeping_mat: form.myEquipment.sleepingMat,
    ground_sheet: form.myEquipment.groundSheet,
    walking_clothes: form.myEquipment.walkingClothes,
    hiking_boots: form.myEquipment.hikingBoots,
    socks: form.myEquipment.socks,
    shorts: form.myEquipment.shorts,
    shirt: form.myEquipment.shirt,
    under_layers: form.myEquipment.underLayers,
    mid_layers: form.myEquipment.midLayers,
    raincoat: form.myEquipment.raincoat,
    overtrousers: form.myEquipment.overtrousers,
    warm_hat_and_gloves: form.myEquipment.warmHatAndGloves,
    sunhat_and_sunglasses: form.myEquipment.sunhatAndSunglasses,
    extra_socks_underwear_and_shirt:
      form.myEquipment.extraSocksUnderwearAndShirt,
    gaiters: form.myEquipment.gaiters,
    lightweight_shoes_for_huts: form.myEquipment.lightweightShoesForHuts,
    carry_food: form.myEquipment.carryFood,
    lightweight_food: form.myEquipment.lightweightFood,
    emergency_food: form.myEquipment.emergencyFood,
    food_storage: form.myEquipment.foodStorage,
    emergency_shelter: form.myEquipment.emergencyShelter,
    distress_beacon: form.myEquipment.distressBeacon,
    cooking_facilities: form.myEquipment.cookingFacilities,
    sanitary_bins: form.myEquipment.sanitaryBins,
    gas_cooker: form.myEquipment.gasCooker,
    fire_starters: form.myEquipment.fireStarters,
    life_jacket: form.myEquipment.lifeJacket,
    kayak_or_canoe: form.myEquipment.kayakOrCanoe,
    paddles: form.myEquipment.paddles,
    plastic_drums_or_equivalent: form.myEquipment.plasticDrumsOrEquivalent,
    dry_bags: form.myEquipment.dryBags,
    swimwear: form.myEquipment.swimwear,
    sandals_or_aqua_shoes: form.myEquipment.sandalsOrAquaShoes,
    portable_stove_and_fuel: form.myEquipment.portableStoveAndFuel,
    candles: form.myEquipment.candles,
    doc_confirmation_letter: form.myEquipment.docConfirmationLetter,
  }

  const profile = {
    id: auth0Id,
    username: form.username,
    name: form.name,
    email: form.email,
    phone: form.phone,
    result: form.result || '',
    my_equipment: snakeEquipment || {},
  }

  try {
    await db.upsertProfile(profile)
    res.sendStatus(201)
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

export default router
