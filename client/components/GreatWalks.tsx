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
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col justify-center w-3/5">
        <h1 className="text-[60px] font-bold">Great Walks</h1>
        <div className="gap-6 flex flex-row mt-6">
          <button
            className="button cursor-pointer"
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className="button cursor-pointer"
            onClick={() => setFilter('Easy')}
          >
            Easy
          </button>
          <button
            className="button cursor-pointer"
            onClick={() => setFilter('Intermediate')}
          >
            Intermediate
          </button>
        </div>

        <ul className="px-4 sm:px-6 lg:px-12">
          {filteredWalks &&
            filteredWalks.map((greatWalk) => (
              <li
                key={greatWalk.id}
                className="
                bg-[#1e293b]/60 
                drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] 
                rounded-[30px] sm:rounded-[40px] md:rounded-[45px] 
                p-6 sm:p-8 md:p-10 
                my-8 
                text-[#d0f7a2] 
                grid grid-cols-1 sm:grid-cols-[300px_1fr] 
                gap-6 items-center 
                max-w-5xl mx-auto
              "
              >
                <Link to={`/great-walks/${greatWalk.id}`}>
                  <img
                    src={greatWalk.trackImageUrl}
                    alt={greatWalk.name}
                    className="w-full sm:w-[300px] h-[200px] object-cover rounded-xl"
                  />
                </Link>

                <div className="flex flex-col justify-between gap-4">
                  <Link to={`/great-walks/${greatWalk.id}`}>
                    <h1 className="text-[24px] sm:text-[30px] font-bold leading-tight">
                      {greatWalk.name}
                    </h1>
                  </Link>

                  <div className="text-sm sm:text-[15px] space-y-1">
                    <h2>Location: {greatWalk.location}</h2>
                    <p>Difficulty: {greatWalk.difficulty}</p>
                    <p>Duration: {greatWalk.duration}</p>
                    <p>Distance: {greatWalk.distance}</p>
                  </div>

                  <Link to={`/great-walks/${greatWalk.id}`}>
                    <button className="self-start bg-[#070446] hover:bg-[#0c0660] transition text-[#d0f7a2] px-6 py-2 rounded-xl text-[15px] cursor-pointer">
                      Read more
                    </button>
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
