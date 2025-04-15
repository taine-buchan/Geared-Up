import { useState } from 'react'
import { useGreatWalks } from '../hooks/useGreatWalks'
import { Link } from 'react-router-dom'
import LoadingIndicator from './LoadingIndicator'
import ErrorComponent from './ErrorComponent'

export default function GreatWalks() {
  const { data, isLoading, isError } = useGreatWalks()
  const [filter, setFilter] = useState<'All' | 'Easy' | 'Intermediate'>('All')
  if (isLoading) return <LoadingIndicator />
  if (isError) return <ErrorComponent />

  const filteredWalks =
    filter === 'All' ? data : data?.filter((walk) => walk.difficulty === filter)

  return (
    <div className="flex items-center justify-center mt-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col w-full max-w-screen-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-center sm:text-left mb-6 text-[#d0f7a2]">
          Great Walks
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-10 justify-center sm:justify-start">
          <button className="button" onClick={() => setFilter('All')}>
            All
          </button>
          <button className="button" onClick={() => setFilter('Easy')}>
            Easy
          </button>
          <button className="button" onClick={() => setFilter('Intermediate')}>
            Intermediate
          </button>
        </div>

        {/* Card Grid */}
        <ul
          className="
    grid 
    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
    gap-6 
    justify-items-center 
    sm:justify-items-stretch
  "
        >
          {filteredWalks &&
            filteredWalks.map((greatWalk) => (
              <li
                key={greatWalk.id}
                className="bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 flex flex-col text-[#d0f7a2] transition hover:scale-[1.02] hover:shadow-xl"
              >
                <Link to={`/great-walks/${greatWalk.id}`}>
                  <img
                    src={greatWalk.trackImageUrl}
                    alt={greatWalk.name}
                    className="w-full h-[180px] sm:h-[220px] object-cover rounded-xl mb-4"
                  />
                </Link>

                <Link to={`/great-walks/${greatWalk.id}`}>
                  <h1 className="text-lg sm:text-xl font-bold mb-2">
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
