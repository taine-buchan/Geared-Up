export interface User extends UserData {
  id: string
}

export interface UserData {
  username: string
  name: string
  email: string
  phone?: string
  myEquipment: {
    backpack: boolean
    waterproofPackLiner: boolean
    sleepingBag: boolean
    firstAidKit: boolean
    survivalKit: boolean
    safetyEquipment: boolean
    torchFlashlight: boolean
    rubbishBag: boolean
    bookingConfirmationAndId: boolean
    earplugsForBunkrooms: boolean
    drinkBottle: boolean
    eatingAndCookingUtensils: boolean
    gasCookerAndFuel: boolean
    matchesOrLighter: boolean
    generalToiletries: boolean
    backupToiletOption: boolean
    tent: boolean
    sleepingMat: boolean
    groundSheet: boolean
    walkingClothes: boolean
    hikingBoots: boolean
    socks: boolean
    shorts: boolean
    shirt: boolean
    underLayers: boolean
    midLayers: boolean
    raincoat: boolean
    overtrousers: boolean
    warmHatAndGloves: boolean
    sunhatAndSunglasses: boolean
    extraSocksUnderwearAndShirt: boolean
    gaiters: boolean
    lightweightShoesForHuts: boolean
    carryFood: boolean
    lightweightFood: boolean
    emergencyFood: boolean
    foodStorage: boolean
    emergencyShelter: boolean
    distressBeacon: boolean
    cookingFacilities: boolean
    sanitaryBins: boolean
    gasCooker: boolean
    fireStarters: boolean
    lifeJacket: boolean
    kayakOrCanoe: boolean
    paddles: boolean
    plasticDrumsOrEquivalent: boolean
    dryBags: boolean
    swimwear: boolean
    sandalsOrAquaShoes: boolean
    portableStoveAndFuel: boolean
    candles: boolean
    docConfirmationLetter: boolean
  }

  result?: string
}

export interface UserProfileData {
  username: string
  name: string
  email: string
  phone: string
}

export interface UserSC extends UserDataSC {
  id: string
}

export interface UserDataSC {
  username: string
  name: string
  email: string
  phone?: string
  my_equipment: {
    backpack: boolean
    waterproof_pack_liner: boolean
    sleeping_bag: boolean
    first_aid_kit: boolean
    survival_kit: boolean
    safety_equipment: boolean
    torch_flashlight: boolean
    rubbish_bag: boolean
    booking_confirmation_and_id: boolean
    earplugs_for_bunkrooms: boolean
    drink_bottle: boolean
    eating_and_cooking_utensils: boolean
    gas_cooker_and_fuel: boolean
    matches_or_lighter: boolean
    general_toiletries: boolean
    backup_toilet_option: boolean
    tent: boolean
    sleeping_mat: boolean
    ground_sheet: boolean
    walking_clothes: boolean
    hiking_boots: boolean
    socks: boolean
    shorts: boolean
    shirt: boolean
    under_layers: boolean
    mid_layers: boolean
    raincoat: boolean
    overtrousers: boolean
    warm_hat_and_gloves: boolean
    sunhat_and_sunglasses: boolean
    extra_socks_underwear_and_shirt: boolean
    gaiters: boolean
    lightweight_shoes_for_huts: boolean
    carry_food: boolean
    lightweight_food: boolean
    emergency_food: boolean
    food_storage: boolean
    emergency_shelter: boolean
    distress_beacon: boolean
    cooking_facilities: boolean
    sanitary_bins: boolean
    gas_cooker: boolean
    fire_starters: boolean
    life_jacket: boolean
    kayak_or_canoe: boolean
    paddles: boolean
    plastic_drums_or_equivalent: boolean
    dry_bags: boolean
    swimwear: boolean
    sandals_or_aqua_shoes: boolean
    portable_stove_and_fuel: boolean
    candles: boolean
    doc_confirmation_letter: boolean
  }

  result?: string
}
