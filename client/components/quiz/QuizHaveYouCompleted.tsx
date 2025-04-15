import { Link } from 'react-router-dom'

export default function QuizHaveYouCompleted() {
  return (
    <div className="relative flex flex-col mx-auto my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="p-4">
        <h1 className="mb-2 text-slate-800 text-xl font-semibold">
          Have you completed a Great Walk?
        </h1>
        <div className="flex justify-center py-4 gap-10">
          <button className="button-reverse" aria-label="button to home page">
            <Link to={'quiz-great-walks'}>Yes</Link>
          </button>
          <button className="button" aria-label="button to home page">
            <Link to={'quiz-fitness-level'}>No</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
