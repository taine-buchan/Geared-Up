import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { useGreatWalks } from '../hooks/useGreatWalks'
import { useFetchWalks } from '../hooks/useUserWalks'
import ErrorComponent from './ErrorComponent'
import LoadingIndicator from './LoadingIndicator'
import GreatWalks from './GreatWalks'

export default function RecommendGreatWalks() {
  //fetch greaat walks data
  const { user } = useAuth0()
  const { data: allGreatWalks, isLoading, isError } = useGreatWalks()
  const {
    data: completedWalks,
    isPending,
    isError: errorForCompleted,
  } = useFetchWalks(user?.sub || '')
  if (isLoading || isPending) return <LoadingIndicator />
  if (isError || errorForCompleted || !allGreatWalks) return <ErrorComponent />

  const completedGreatWalks =
    completedWalks?.filter(
      (walk) => walk.userId === user?.sub && walk.isComplete,
    ) ?? []
  console.log('Completed Walks:', completedGreatWalks)
  const completedGreatWalksId = completedGreatWalks.map(
    (walk) => walk.greatWalkId,
  )
  const completedCount = completedGreatWalks.length
  if (completedWalks?.length === 0) return <GreatWalks />
  const notCompletedGreatWalks = allGreatWalks.filter(
    (walk) => !completedGreatWalksId.includes(walk.id),
  )
  console.log('notcom', notCompletedGreatWalks)
  const recommendedGreatWalks = notCompletedGreatWalks.filter((walk) =>
    completedCount > 3
      ? walk.difficulty === 'Intermediate'
      : walk.difficulty === 'Easy',
  )
  console.log('reco', recommendedGreatWalks)
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col w-full max-w-screen-2xl">
        <h1 className="text-[60px] font-bold">Recommended Great Walks</h1>

        <ul
          className="
          grid 
          grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          gap-6 
          justify-items-center 
          sm:justify-items-stretch
        "
        >
          {recommendedGreatWalks &&
            recommendedGreatWalks.map((greatWalk) => (
              <li
                key={greatWalk.id}
                className="
          bg-[#1e293b]/60 
          drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] 
          rounded-[30px] sm:rounded-[40px] 
          p-6 
          flex flex-col 
          text-[#d0f7a2]
          transition hover:scale-[1.02] hover:shadow-xl
        "
              >
                <Link to={`/great-walks/${greatWalk.id}`}>
                  <img
                    src={greatWalk.trackImageUrl}
                    alt={greatWalk.name}
                    className="w-full h-[200px] object-cover rounded-xl mb-4"
                  />
                </Link>

                <Link to={`/great-walks/${greatWalk.id}`}>
                  <h1 className="text-[24px] font-bold mb-2">
                    {greatWalk.name}
                  </h1>
                </Link>

                <div className="text-sm space-y-1 mb-4">
                  <h2>Location: {greatWalk.location}</h2>
                  <p>Difficulty: {greatWalk.difficulty}</p>
                  <p>Duration: {greatWalk.duration}</p>
                  <p>Distance: {greatWalk.distance}</p>
                </div>

                <Link to={`/great-walks/${greatWalk.id}`}>
                  <button className="bg-[#070446] hover:bg-[#0c0660] transition text-[#d0f7a2] px-6 py-2 rounded-xl text-sm self-start">
                    Read more
                  </button>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
