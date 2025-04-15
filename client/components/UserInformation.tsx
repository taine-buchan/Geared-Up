import { useState } from 'react'
import UserWalkList from './UserWalksList'
import { useParams } from 'react-router-dom'
import UserGearListPage from './UserGearListPage'

export default function UserInformation() {
  const [activeComponent, setActiveComponent] = useState<
    'User Walks' | 'User Gearlist'
  >('User Walks')
  const { sub } = useParams()
  if (!sub) {
    return null
  }

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4 py-4">
        <div className="bg-[#1e293b]/60 p-2 rounded-xl flex gap-2">
          <button
            onClick={() => setActiveComponent('User Walks')}
            className={`flex-1 px-4 py-2 rounded-lg transition font-medium ${
              activeComponent === 'User Walks'
                ? 'bg-[#d0f7a2] text-[#070446]'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            User Walks
          </button>

          <button
            onClick={() => setActiveComponent('User Gearlist')}
            className={`flex-1 px-4 py-2 rounded-lg transition font-medium ${
              activeComponent === 'User Gearlist'
                ? 'bg-[#d0f7a2] text-[#070446]'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            User Equipment
          </button>
        </div>
      </div>
      <div>
        {activeComponent === 'User Walks' && <UserWalkList userId={sub} />}

        {activeComponent === 'User Gearlist' && <UserGearListPage />}
      </div>
    </>
  )
}
