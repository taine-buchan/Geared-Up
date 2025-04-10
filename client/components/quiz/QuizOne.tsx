export default function QuizTwo() {
  const answersOne = ['React', 'Vue', 'Angular', 'Svelte']

  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Have you completed a Great Walk?
      </h3>
      <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {answersOne.map((answer) => (
          <li
            key={answer}
            className="w-full border-b border-gray-200 last:border-b-0 dark:border-gray-600"
          >
            <div className="flex items-center ps-3">
              <input
                id={`${answer.toLowerCase()}-checkbox`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={`${answer.toLowerCase()}-checkbox`}
                className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {answer} JS
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
