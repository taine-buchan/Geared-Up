import { Link } from 'react-router-dom'
import LoadingIndicator from '../LoadingIndicator'
import { useGreatWalks } from '../../hooks/useGreatWalks'
import { useState } from 'react'
import { useUpsertUserWalks } from '../../hooks/useUpsertUserWalks'
import ErrorComponent from '../ErrorComponent'

export interface SelectedWalkData {
  greatWalkId: number
  isCompleted: boolean
  isPlanned: boolean
}

interface WalkData {
  walkId: number
  walkName: string
}
export default function QuizWhichGreatWalks() {
  const { data: greatWalks, isLoading, isError } = useGreatWalks()

  const mutation = useUpsertUserWalks()
  const [selectedWalks, setSelectedWalks] = useState<SelectedWalkData[]>([
    {
      greatWalkId: 0,
      isCompleted: true,
      isPlanned: false,
    },
  ])

  if (isLoading) return <LoadingIndicator />
  if (isError || !greatWalks) return <ErrorComponent />

  const greatWalk = greatWalks.map((walk) => {
    return { walkId: walk.id, walkName: walk.name }
  })

  const handleToggle = (
    event: React.ChangeEvent<HTMLInputElement>,
    walk: WalkData,
  ) => {
    setSelectedWalks((prevSelectedWalk) => {
      const isExisting = prevSelectedWalk.find(
        (greatWalk) => greatWalk.greatWalkId === walk.walkId,
      )
      if (isExisting) {
        return prevSelectedWalk.map((prevWalk) =>
          prevWalk.greatWalkId === walk.walkId
            ? { ...prevWalk, isCompleted: event.target.checked }
            : prevWalk,
        )
      } else {
        return [
          ...prevSelectedWalk,
          {
            greatWalkId: walk.walkId,
            isCompleted: event.target.checked,
            isPlanned: false,
          },
        ]
      }
    })
  }

  const handleSubmit = () => {
    mutation.mutate(selectedWalks)
  }
  if (greatWalk) {
    return (
      <div>
        <h3 className="mb-4 text-4xl text-center">
          Which great walks have you completed?
        </h3>
        <form onSubmit={handleSubmit}>
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
                    name="checkbox"
                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onChange={(event) => handleToggle(event, walk)}
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
              <button
                className="button-reverse"
                aria-label="button to home page"
              >
                <Link to={'/'}>Back</Link>
              </button>
              <button
                className="button"
                aria-label="button to home page"
                type="submit"
              >
                Submit
              </button>
            </div>
          </ul>
        </form>
      </div>
    )
  }
}
