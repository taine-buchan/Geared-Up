import { Link } from 'react-router-dom'
import LoadingIndicator from '../LoadingIndicator'
import { useGreatWalks } from '../../hooks/useGreatWalks'
import { useState } from 'react'
import ErrorComponent from '../ErrorComponent'
import { useCompletedWalks } from '../../hooks/useUserWalks'

export interface SelectedWalkData {
  greatWalkId: number
  isCompleted: boolean
  isPlanned: boolean
}

// interface WalkData {
//   walkId: number
//   walkName: string
// }
export default function QuizWhichGreatWalks() {
  const { data: greatWalks, isLoading, isError } = useGreatWalks()
  // const [selectedCount, setSelectedCount] = useState(0)

  const mutation = useCompletedWalks()

  interface Walks {
    1: boolean
    2: boolean
    3: boolean
    4: boolean
    5: boolean
    6: boolean
    7: boolean
    8: boolean
    9: boolean
    10: boolean
    11: boolean
  }

  type WalksKey = keyof Walks

  const [walks, setWalks] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  } as Walks)

  if (isLoading) return <LoadingIndicator />
  if (isError || !greatWalks) return <ErrorComponent />

  function handleToggle(
    _event: React.ChangeEvent<HTMLInputElement>,
    name: WalksKey,
  ) {
    setWalks((w) => ({
      //updating state
      ...w, // existing state object
      [name]: !w[name], // for this particular walk, flip the boolean to the opposite of current
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    // Use reduce to create an array containing only the IDs of selected walks
    // Object.entries(walks) converts the walks object to an array of [key, value] pairs
    const walkNames = Object.entries(walks).reduce((acc, curr) => {
      // curr[0] is the walk ID (key), curr[1] is the boolean value (selected or not)
      if (curr[1] === true) return [...acc, +curr[0]]
      else return acc
    }, [] as number[])
    walkNames.length
    mutation.mutate(walkNames)
    navigator
  }

  return (
    <div>
      <h3 className="mb-4 text-4xl text-center">
        Which great walks have you completed?
      </h3>
      <form>
        <ul className=" m-auto w-120 text-sm font-large bg-white border border-gray-200 rounded-lg dark:text-white">
          {greatWalks.map((walk) => (
            <li
              key={walk.id}
              className="w-full border-b border-gray-200 last:border-b-0"
            >
              <div className="flex items-center ps-3">
                <input
                  id={`${walk.name.toLowerCase()}-checkbox`}
                  type="checkbox"
                  className="w-4 h-4 border-gray-300 rounded-sm focus:ring-blue-500"
                  onChange={(event) => handleToggle(event, walk.id as WalksKey)}
                />
                <label
                  htmlFor={`${walk.name.toLowerCase()}-checkbox`}
                  className="w-full py-3 ms-2 text-sm font-medium text-black"
                >
                  {walk.name}
                </label>
              </div>
            </li>
          ))}
          <div className="flex justify-center py-4 gap-10">
            <button className="button-reverse" aria-label="button to home page">
              <Link to={'/quiz-outlet'}>Back</Link>
            </button>
            <button
              className="button"
              aria-label="button to home page"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </ul>
      </form>
    </div>
  )
}
