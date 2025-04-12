import { Link } from 'react-router-dom'

export default function QuizFitnessLevel() {
  //
  return (
    <div>
      <h3 className="mb-4 text-4xl text-center">Personal Equipment:</h3>
      <ul className=" m-auto w-120 text-sm font-large  text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {mockWalks.map((answer) => (
          <li
            key={answer}
            className="w-full border-b border-gray-200 last:border-b-0 dark:border-gray-600"
          >
            <div className="flex items-center ps-3">
              <input
                id={`${answer.toLowerCase()}-checkbox`}
                type="checkbox"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={`${answer.toLowerCase()}-checkbox`}
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {answer}
              </label>
            </div>
          </li>
        ))}
        <div className="flex justify-center py-4 gap-10">
          <button className="button-reverse" aria-label="button to home page">
            <Link to={'/'}>Back</Link>
          </button>
          <button className="button" aria-label="button to home page">
            <Link to={'../quiz-fitness-level'}>Submit</Link>
          </button>
        </div>
      </ul>
    </div>
  )
}
