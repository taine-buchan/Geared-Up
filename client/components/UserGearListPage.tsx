/* eslint-disable @typescript-eslint/no-unused-vars */
// components/GreatWalk.tsx
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import { JustUserEquipment, UserData } from '../../models/user'
import { useGetUser, useUpdateUserEquipment } from '../hooks/useUser'
import ErrorComponent from './ErrorComponent'
import LoadingIndicator from './LoadingIndicator'
import UserEquipmentChecklist from './UserEquipmentChecklist'

const initState: JustUserEquipment = {
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

export default function UserGearListPage() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const {
    data: existingUserData,
    isLoading: existingUserLoading,
    isError: existingUserError,
  } = useGetUser()

  const updateUserEquipmentMutation = useUpdateUserEquipment()

  const [userEquipment, setUserEquipment] =
    useState<JustUserEquipment>(initState)

  useEffect(() => {
    if (isAuthenticated && existingUserData?.myEquipment) {
      setUserEquipment(existingUserData.myEquipment)
    }
  }, [isAuthenticated, existingUserData])

  function handleSubmit() {
    if (!isAuthenticated) {
      loginWithRedirect()
      return
    }
    if (!existingUserData) {
      console.error('No user data available to update')
      return
    }

    const { id, ...userWithoutId } = existingUserData as UserData & {
      id: string
    }

    updateUserEquipmentMutation.mutate({
      currentUser: userWithoutId,
      equipment: userEquipment,
    })
  }

  if (isAuthenticated && existingUserLoading) {
    return <LoadingIndicator />
  }

  if (isAuthenticated && existingUserError) {
    return <ErrorComponent />
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">My Packed Gear</h1> */}

      {!isAuthenticated && (
        <div className="text-center">
          <p className="mb-4">You need to be signed in to view your gear.</p>
          <button onClick={() => loginWithRedirect()} className="button">
            Sign In
          </button>
        </div>
      )}

      {isAuthenticated && (
        <UserEquipmentChecklist
          requiredEquipmentDisplay={
            Object.entries(initState) as [keyof JustUserEquipment, false][]
          }
          userEquipment={userEquipment}
          setUserEquipment={setUserEquipment}
          handleSubmit={handleSubmit}
          isDisabled={false}
        />
      )}
    </div>
  )
}
