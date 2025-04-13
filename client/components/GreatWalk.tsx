import { Link, useParams } from 'react-router-dom'
import { useGreatWalkById } from '../hooks/useGreatWalks'
import LoadingIndicator from './LoadingIndicator'
import ErrorComponent from './ErrorComponent'
import { useGetUser, useUpdateUserEquipment } from '../hooks/useUser'
import Comments from './Comments'
import { useEffect, useState } from 'react'
import { JustUserEquipment, UserData } from '../../models/user'

const initState = {
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

export default function GreatWalk() {
  const { id } = useParams()
  const { data: greatWalk, isLoading, isError } = useGreatWalkById(Number(id))
  const {
    data: existingUserData,
    isLoading: existingUserLoading,
    isError: existingUserError,
  } = useGetUser()

  const updateUserEquipmentMutation = useUpdateUserEquipment()

  const [userEquipment, setUserEquipment] =
    useState<JustUserEquipment>(initState)

  /**
   * Detect when user data has loaded
   * Update local state (userEquipment) accordingly
   * Ensure that your app shows the correct items as checked/unchecked based on saved user preferences
   */
  useEffect(() => {
    if (existingUserData?.myEquipment) {
      setUserEquipment(existingUserData.myEquipment)
    }
  }, [existingUserData])

  if (isLoading || existingUserLoading) return <LoadingIndicator />
  if (isError || existingUserError || !id) return <ErrorComponent />

  if (!greatWalk || !existingUserData) return null

  const requiredEquipmentDisplay = Object.entries(
    greatWalk.requiredEquipment
  ).filter(([_, isRequired]) => isRequired) as unknown as [
    keyof JustUserEquipment,
    false
  ][]

  if (greatWalk) {
    const obj = Object.entries(greatWalk.requiredEquipment)
    const requiredEquipment = obj.filter((arr) => {
      if (arr[1] === true) {
        return arr[0]
      }
    })

    function handleToggleItem(item: keyof JustUserEquipment) {
      const updated = {
        ...userEquipment,
        [item]: !userEquipment[item],
      }

      setUserEquipment(updated)
    }
    function handleSubmit() {
      if (!existingUserData) {
        console.error('No user data available to update')
        return
      }

      // Remove 'id' from existingUserData before passing it to the mutation
      const { id, ...userWithoutId } = existingUserData as UserData & {
        id: string
      }

      console.log('existing user without id', userWithoutId)
      console.log('existing user equip', userEquipment)

      updateUserEquipmentMutation.mutate({
        currentUser: userWithoutId, // Pass the user without id
        equipment: userEquipment,
      })
    }

    return (
      <div className="flex items-center justify-center mt-10">
        <div className="bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-10 my-10  mx-6 rounded-[45px] flex flex-col gap-4 w-3/5 justify-center items-center">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col w-1/2 gap-6 mr-0">
              <img
                src={greatWalk.trackImageUrl}
                alt={greatWalk.name}
                className="w-full h-60 rounded-xl "
              />
              <div>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Location: </p>
                  {greatWalk.location}
                </p>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Difficulty: </p>
                  {greatWalk.difficulty}
                </p>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Duration: </p>
                  {greatWalk.duration}
                </p>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Distance: </p>
                  {greatWalk.distance}
                </p>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Seasonal: </p>
                  {greatWalk.seasonal}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              <h1 className="text-[40px] font-bold">{greatWalk.name}</h1>
              <div className="text-[15px] gap-4">
                <p>Elevation: {greatWalk.elevation}</p>

                <p>{greatWalk.description}</p>
              </div>

              <Link to={greatWalk.docLink}>
                <button className="button cursor-pointer">Doc Link</button>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] font-bold mb-4">Required Equipment</h1>
            {requiredEquipment.map((item) => (
              <button
                key={item[0]}
                className="border-[1px] p-2 mx-1 my-1 rounded-md"
              >
                {item[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {requiredEquipmentDisplay.map(([key]) => {
              const userHasItem = userEquipment?.[key] ?? false

              return (
                <label
                  key={key}
                  className="flex items-center gap-2 p-2 bg-white/10 rounded-md cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={userHasItem}
                    onChange={() => handleToggleItem(key)}
                    className="accent-blue-500 scale-175"
                  />
                  <span className="font-medium">{key}</span>
                </label>
              )
            })}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            Submit
          </button>

          <Comments id={greatWalk.id} />
        </div>
      </div>
    )
  }
}
