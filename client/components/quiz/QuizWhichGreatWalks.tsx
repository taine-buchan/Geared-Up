// Turn form into a component to use anywhere in the site.

// First time user completes form, this is a post request.

// Subsequent updates to this information will be in the form of
// a patch.

// This information can be updated by adding isCompleted
// checkboxes to the walks list and / or individual walk page

import { Link } from 'react-router-dom'
import LoadingIndicator from '../LoadingIndicator'
import { useGreatWalks } from '../../hooks/useGreatWalks'
import { useState } from 'react'
import { useUpsertUserWalks } from '../../hooks/useUpsertUserWalks'
import { useAuth0 } from '@auth0/auth0-react'

export interface SelectedWalkData {
  greatWalkId: number
  isComplete: boolean
  isPlanned: boolean
}

interface WalkData {
  walkId: number
  walkName: string
}
export default function QuizWhichGreatWalks() {
  const user = useAuth0()
  const userId = user.user?.sub

  const { data: greatWalks, isLoading, isError } = useGreatWalks()

  const [greatWalkId, setGreatWalkId] = useState<number | null>(null)
  const mutation = useUpsertUserWalks()

  const [selectedWalks, setSelectedWalks] = useState<SelectedWalkData[]>({
    userId: userId,
    greatWalkId: greatWalkId,
    isCompleted: true,
  })

  if (isLoading) return <LoadingIndicator />
  if (!greatWalks) return <p>Something happened, try refreshing</p>
  if (isError) return <p>Error!</p>

  // map over great walks and just return walk id and walk name.
  const greatWalk = greatWalks.map((walk) => {
    return { walkId: walk.id, walkName: walk.name }
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    walkId: number,
  ) => {
    if (event.target.value) {
      setGreatWalkId(walkId)
    }
  }

  // const handleToggle = (walk: WalkData) => {
  //   //we set the state, it updates the state with previous state.

  //   setSelectedWalks((prevSelectedWalks) => [
  //     ...prevSelectedWalks,
  //     { greatWalkId: walk.walkId, isComplete: true, isPlanned: false },
  //   ])
  //   console.log(selectedWalks)
  // }

  const handleSubmit = () => {
    // gives the form data to the custom hook :)

    console.log('handle submit')
    mutation.mutate(selectedWalks)
  }

  return (
    // <></>
    <div>
      <h3 className="mb-4 text-4xl text-center">
        Which great walks have you completed?
      </h3>
      <form>
        <ul className=" m-auto w-120 text-sm font-large  text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {greatWalk.map((walk) => (
            <li
              key={walk.walkId}
              className="w-full border-b border-gray-200 last:border-b-0 dark:border-gray-600"
            >
              <div className="flex items-center ps-3">
                <input
                  id={`${walk.walkName.toLowerCase()}-checkbox`}
                  type="checkbox"
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={(event) => handleChange(event, walk.walkId)}
                />
                <label
                  htmlFor={`${walk.walkName.toLowerCase()}-checkbox`}
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {walk.walkName}
                </label>
              </div>
            </li>
          ))}
          <div className="flex justify-center py-4 gap-10">
            <button className="button-reverse" aria-label="button to home page">
              <Link to={'/'}>Back</Link>
            </button>
            <button
              className="button"
              aria-label="button to home page"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </div>
        </ul>
      </form>
    </div>
  )
}
