/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { usePlannedWalks } from '../hooks/useUserWalks'

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
  const { user, isAuthenticated, loginWithRedirect } = useAuth0()
  const {
    data: existingUserData,
    isLoading: existingUserLoading,
    isError: existingUserError,
  } = useGetUser()

  const updateUserEquipmentMutation = useUpdateUserEquipment()

  const [userEquipment, setUserEquipment] =
    useState<JustUserEquipment>(initState)
  const navigate = useNavigate()
  const addWalk = usePlannedWalks()

  useEffect(() => {
    if (isAuthenticated && existingUserData?.myEquipment) {
      setUserEquipment(existingUserData.myEquipment)
    }
  }, [isAuthenticated, existingUserData])

  const handleSignIn = () => {
    if (user) {
      console.log(user.sub)
      return navigate(`/user/${user.sub}`)
    } else loginWithRedirect()
  }
  function handleSubmit() {
    if (!isAuthenticated) {
      loginWithRedirect()
      return
    }
    if (!existingUserData) {
      console.error('No user data available to update')
      return
    }

    const { idUser, ...userWithoutId } = existingUserData as UserData & {
      idUser: string
    }

    updateUserEquipmentMutation.mutate({
      currentUser: userWithoutId,
      equipment: userEquipment,
    })
    navigate(`/great-walks/${id}`)
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
    <div className="flex items-center justify-center">
      <div className="bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-10 my-10 mx-6 rounded-[45px] flex flex-col gap-4 w-3/5 justify-center items-center">
        <div className="flex flex-row gap-6 w-full">
          <div className="flex flex-col w-full gap-6">
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

          <div className="flex flex-col gap-4 w-[160%]">
            <h1 className="text-[40px] font-bold">{greatWalk.name}</h1>
            <div className="text-[15px] gap-4">
              <p>Elevation: {greatWalk.elevation}</p>
              <p>{greatWalk.description}</p>
              <br />
              <div>
                <PlanningButton id={greatWalk.id} />
                <Link to={greatWalk.docLink}>
                  <button className="button cursor-pointer">Doc Link</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 py-4">
          <div className="bg-[#1e293b]/60 p-2 rounded-xl flex gap-2">
            <button
              onClick={() => setActiveComponent('Equipment List')}
              className={`flex-1 px-4 py-2 rounded-lg transition font-medium ${
                activeComponent === 'Equipment List'
                  ? 'bg-[#d0f7a2] text-[#070446]'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Required Equipment
            </button>

            <button
              onClick={() => setActiveComponent('Comments')}
              className={`flex-1 px-4 py-2 rounded-lg transition font-medium ${
                activeComponent === 'Comments'
                  ? 'bg-[#d0f7a2] text-[#070446]'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Comments Section
            </button>
          </div>
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
