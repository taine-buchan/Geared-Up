import { useAuth0 } from '@auth0/auth0-react'
import { UserData } from '../../models/user'
import { useGetUser, useUpsertUser } from '../hooks/useUser'
import ErrorPage from './ErrorPage'
import LoadingIndicator from './LoadingIndicator'
import ProfileForm from './ProfileForm'

export default function Profile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data: existingUserData, isLoading, isError } = useGetUser()
  const mutation = useUpsertUser()

  const newUserData: UserData = {
    username: '',
    name: '',
    email: '',
    phone: '',
    result: '',
    myEquipment: {
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
    },
  }

  if (isLoading) return <LoadingIndicator />
  if ((!isAuthenticated && !user) || !isError) return <ErrorPage />

  async function handleSubmit(form: UserData) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
    
  }
  const userData =
    existingUserData
      ? existingUserData
      : newUserData
  return (
    <div>
      <ProfileForm handleSubmit={handleSubmit} form={userData} />
    </div>
  )
}
