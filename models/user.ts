export interface User extends UserData {
  id: string
}

export interface UserData {
  username: string
  name: string
  email: string
  phone: string
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

  result: string
}

export interface UserProfileData {
  username: string
  name: string
  email: string
  phone: string
}