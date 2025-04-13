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
  // what is the information that the back end is expecting? (database).

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

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   walkId: number,
  // ) => {
  //   if (event.target.value) {
  //     setGreatWalkId(walkId)
  //   }
  // }

  //---To check if the check box is checked or no, you can use event.target,checked in handleToggle
  //---You dont need useState for greatWalkId or isCompleted. you can find all of data(only greatWalkId and isCompleted, not userId and isPlanned) from handle toggle
  //---It takes event and walk as parameters
  //---To filter the data to submit, you might want to check specific greatWalkId data is already exist in selectedWalks array. use arr.find first to see the specific greatWalkId exist in the array
  //---And use spread syntex and add whatever data you need, but make sure you return an array in setSelectedWalks
  //---I just deleted few functions that you dont need here. I made seperate branch f/14/display-quiz-daisy and its working there. If you are not really sure, you can take a look! But I believe you can do it!!!!!!!
  const handleToggle = (walk: WalkData) => {
    //we set the state, it updates the state with previous state.

    setSelectedWalks((prevSelectedWalks) => [
      ...prevSelectedWalks,
      { greatWalkId: walk.walkId, isComplete: true, isPlanned: false },
    ])
    console.log(selectedWalks)
  }

  //---handleSubmit should work in form with onSubmit={handleSubmit}
  //---You dont need to add any more code here, its enough with mutaion.
  const handleSubmit = () => {
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
                  onChange={(event) => handleToggle(event, walk.walkId)}
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
