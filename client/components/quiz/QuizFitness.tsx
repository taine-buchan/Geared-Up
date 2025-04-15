import { Link } from 'react-router-dom'

export default function QuizFitnessLevel() {
  return (
    <div>
      <h3 className="mb-4 text-4xl text-center">
        How would you rate your current fitness level?
      </h3>
      <div className="flex justify-center py-4 gap-10">
        <button className="button-reverse" aria-label="button to home page">
          <Link to={'../quiz-link-to-doc'}>Poor</Link>
        </button>
        <button className="button-square" aria-label="button to home page">
          <Link to={'../quiz-great-walks'}>Ok</Link>
        </button>
        <button className="button" aria-label="button to home page">
          <Link to={'../quiz-great-walks'}>Great</Link>
        </button>
      </div>
    </div>
  )
}
