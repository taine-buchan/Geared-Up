import { useNavigate } from 'react-router-dom'
import UserGearListPage from '../UserGearListPage'

export default function QuizGearList() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    navigate('/great-walks/recommend')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Multi-Day Hike Preparation Guide
      </h1>
      {/* Checklist Placeholder */}
      <section className="mb-8 p-6 border-2 border-dashed border-gray-300 rounded-lg text-gray-600">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Please select the gear you currently own.
        </h2>
        <p className=" text-gray-600 text-center">
          Bear in mind you can update this at any time to keep track of your
          items.
        </p>

        <UserGearListPage />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700">
          Essential Safety Tips
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Check weather forecasts</strong> - Conditions can change
              rapidly in alpine areas
            </li>
            <li>
              <strong>File a trip plan</strong> - Tell someone your route and
              expected return time
            </li>
            <li>
              <strong>Carry emergency supplies</strong> - Including extra food,
              first aid, and survival blanket
            </li>
            <li>
              <strong>Stay on marked trails</strong> - Venturing off-track
              increases risk of getting lost
            </li>
            <li>
              <strong>Monitor daylight hours</strong> - Start early to avoid
              hiking in darkness
            </li>
            <li>
              <strong>Hydrate regularly</strong> - Even in cold weather,
              dehydration is a risk
            </li>
            <li>
              <strong>Know your limits</strong> - Be prepared to turn back if
              conditions become dangerous
            </li>
            <li>
              <strong>Respect wildlife</strong> - Observe from a distance and
              store food securely
            </li>
            <li>
              <strong>Carry communication devices</strong> - Consider a personal
              locator beacon in remote areas
            </li>
          </ul>
        </div>
      </section>

      <div className="flex justify-center space-x-4 mt-8">
        <button
          className="rounded-md bg-gray-400 py-2 px-6 border border-transparent text-white shadow-md hover:bg-gray-500 transition-colors"
          onClick={() => window.print()}
        >
          Print This Guide
        </button>
        <button
          className="rounded-md bg-green-600 py-2 px-6 border border-transparent text-white shadow-md hover:bg-green-700 transition-colors"
          onClick={(event) => handleSubmit(event)}
        >
          Go to Great Walks!
        </button>
      </div>
    </div>
  )
}
