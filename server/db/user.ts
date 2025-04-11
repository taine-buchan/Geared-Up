import connection from './connection.ts'

import { User, UserDBRawRecord, UserSC } from '../../models/user.ts'

export async function upsertProfile(profile: UserSC) {
  await connection('users')
    .insert({
      id: profile.id,
      username: profile.username,
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      result: profile.result,
      my_equipment: JSON.stringify(profile.my_equipment, null, 2),
    } as UserDBRawRecord)
    .onConflict('id') // assumes id is the primary or unique key
    .merge()
}

export async function getUser(id: string) {
  const user = await connection('users')
    .where('id', id)
    .select('id', 'username', 'name', 'email', 'phone', 'my_equipment').first()
    if (!user) {
      throw new Error(`User with id ${id} not found`)
    }
console.log(user)
  const parsedEquipment = JSON.parse(user.my_equipment)

  const userWithParsedEquipment = {
    id: user.id,
    username: user.username,
    name: user.name,
    email: user.email,
    phone: user.phone,
    myEquipment: {
      backpack: parsedEquipment.backpack,
      waterproofPackLiner: parsedEquipment.waterproof_pack_liner,
      sleepingBag: parsedEquipment.sleeping_bag,
      firstAidKit: parsedEquipment.first_aid_kit,
      survivalKit: parsedEquipment.survival_kit,
      safetyEquipment: parsedEquipment.safety_equipment,
      torchFlashlight: parsedEquipment.torch_flashlight,
      rubbishBag: parsedEquipment.rubbish_bag,
      bookingConfirmationAndId: parsedEquipment.booking_confirmation_and_id,
      earplugsForBunkrooms: parsedEquipment.earplugs_for_bunkrooms,
      drinkBottle: parsedEquipment.drink_bottle,
      eatingAndCookingUtensils: parsedEquipment.eating_and_cooking_utensils,
      gasCookerAndFuel: parsedEquipment.gas_cooker_and_fuel,
      matchesOrLighter: parsedEquipment.matches_or_lighter,
      generalToiletries: parsedEquipment.general_toiletries,
      backupToiletOption: parsedEquipment.backup_toilet_option,
      tent: parsedEquipment.tent,
      sleepingMat: parsedEquipment.sleeping_mat,
      groundSheet: parsedEquipment.ground_sheet,
      walkingClothes: parsedEquipment.walking_clothes,
      hikingBoots: parsedEquipment.hiking_boots,
      socks: parsedEquipment.socks,
      shorts: parsedEquipment.shorts,
      shirt: parsedEquipment.shirt,
      underLayers: parsedEquipment.under_layers,
      midLayers: parsedEquipment.mid_layers,
      raincoat: parsedEquipment.raincoat,
      overtrousers: parsedEquipment.overtrousers,
      warmHatAndGloves: parsedEquipment.warm_hat_and_gloves,
      sunhatAndSunglasses: parsedEquipment.sunhat_and_sunglasses,
      extraSocksUnderwearAndShirt:
        parsedEquipment.extra_socks_underwear_and_shirt,
      gaiters: parsedEquipment.gaiters,
      lightweightShoesForHuts: parsedEquipment.lightweight_shoes_for_huts,
      carryFood: parsedEquipment.carry_food,
      lightweightFood: parsedEquipment.lightweight_food,
      emergencyFood: parsedEquipment.emergency_food,
      foodStorage: parsedEquipment.food_storage,
      emergencyShelter: parsedEquipment.emergency_shelter,
      distressBeacon: parsedEquipment.distress_beacon,
      cookingFacilities: parsedEquipment.cooking_facilities,
      sanitaryBins: parsedEquipment.sanitary_bins,
      gasCooker: parsedEquipment.gas_cooker,
      fireStarters: parsedEquipment.fire_starters,
      lifeJacket: parsedEquipment.life_jacket,
      kayakOrCanoe: parsedEquipment.kayak_or_canoe,
      paddles: parsedEquipment.paddles,
      plasticDrumsOrEquivalent: parsedEquipment.plastic_drums_or_equivalent,
      dryBags: parsedEquipment.dry_bags,
      swimwear: parsedEquipment.swimwear,
      sandalsOrAquaShoes: parsedEquipment.sandals_or_aqua_shoes,
      portableStoveAndFuel: parsedEquipment.portable_stove_and_fuel,
      candles: parsedEquipment.candles,
      docConfirmationLetter: parsedEquipment.doc_confirmation_letter,
    },
  }

  return userWithParsedEquipment as User
}
