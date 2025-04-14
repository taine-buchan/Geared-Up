// components/GreatWalk.tsx
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGreatWalkById } from '../hooks/useGreatWalks'
import LoadingIndicator from './LoadingIndicator'
import ErrorComponent from './ErrorComponent'
import { useGetUser, useUpdateUserEquipment } from '../hooks/useUser'
import Comments from './Comments'
import { useEffect, useState } from 'react'
import { JustUserEquipment, UserData } from '../../models/user'
import { useAuth0 } from '@auth0/auth0-react'
import UserEquipmentChecklist from './UserEquipmentChecklist'
import PlanningButton from './PlanningButton'

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

export default function GreatWalk() {
  const [activeComponent, setActiveComponent] = useState<
    'Equipment List' | 'Comments'
  >('Equipment List')

  const { id } = useParams()
  const { data: greatWalk, isLoading, isError } = useGreatWalkById(Number(id))
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  const {
    data: existingUserData,
    isLoading: existingUserLoading,
    isError: existingUserError,
  } = useGetUser()

  const updateUserEquipmentMutation = useUpdateUserEquipment()
  const [userEquipment, setUserEquipment] =
    useState<JustUserEquipment>(initState)
  const navigate = useNavigate()

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
    navigate(`/great-walks`)
  }

  if (isLoading || (isAuthenticated && existingUserLoading)) {
    return <LoadingIndicator />
  }

  if (isError || (isAuthenticated && existingUserError) || !id) {
    return <ErrorComponent />
  }

  if (!greatWalk) return null

  const requiredEquipmentDisplay = Object.entries(
    greatWalk.requiredEquipment,
  ).filter(([_, isRequired]) => isRequired) as unknown as [
    keyof JustUserEquipment,
    false,
  ][]

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-10 my-10 mx-6 rounded-[45px] flex flex-col gap-4 w-3/5 justify-center items-center">
        <div className="flex flex-row gap-6">
          <div className="flex flex-col w-1/2 gap-6">
            <img
              src={greatWalk.trackImageUrl}
              alt={greatWalk.name}
              className="w-full h-60 rounded-xl"
            />
            <div>
              <p className="flex flex-row">
                <span className="font-bold mr-2">Location:</span>
                {greatWalk.location}
              </p>
              <p className="flex flex-row">
                <span className="font-bold mr-2">Difficulty:</span>
                {greatWalk.difficulty}
              </p>
              <p className="flex flex-row">
                <span className="font-bold mr-2">Duration:</span>
                {greatWalk.duration}
              </p>
              <p className="flex flex-row">
                <span className="font-bold mr-2">Distance:</span>
                {greatWalk.distance}
              </p>
              <p className="flex flex-row">
                <span className="font-bold mr-2">Seasonal:</span>
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

            <PlanningButton />

            <Link to={greatWalk.docLink}>
              <button className="button cursor-pointer">Doc Link</button>
            </Link>
          </div>
        </div>

        <div>
          <button
            className="button cursor-pointer"
            onClick={() => setActiveComponent('Equipment List')}
          >
            Required Equipment
          </button>

          <button
            className="button cursor-pointer"
            onClick={() => setActiveComponent('Comments')}
          >
            Comments Section
          </button>
        </div>

        {activeComponent === 'Equipment List' && (
          <UserEquipmentChecklist
            requiredEquipmentDisplay={requiredEquipmentDisplay}
            userEquipment={userEquipment}
            setUserEquipment={setUserEquipment}
            handleSubmit={handleSubmit}
            isDisabled={!existingUserData}
          />
        )}

        {activeComponent === 'Comments' && <Comments id={greatWalk.id} />}
      </div>
    </div>
  )
}
