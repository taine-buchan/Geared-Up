import { useState } from 'react'
import UserWalkList from './UserWalksList'
import { useParams } from 'react-router-dom'
import UserGearListPage from './UserGearListPage'
import { useGetUser } from '../hooks/useUser'
import LoadingIndicator from './LoadingIndicator'
import ErrorComponent from './ErrorComponent'

export default function UserInformation() {
  const [activeComponent, setActiveComponent] = useState<
    'User Walks' | 'User Gearlist'
  >('User Walks')
  const { data: user, isLoading, isError } = useGetUser()
  const { sub } = useParams()
  if (!sub) {
    return null
  }
  if (isLoading) {
    return <LoadingIndicator />
  }
  if (isError) {
    return <ErrorComponent />
  }

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4 py-6">
        {/* Profile Heading */}
        <h1 className="text-3xl font-bold text-[#d0f7a2] mb-4">Profile</h1>

        {/* User Info Box */}
        <div className="bg-[#1e293b]/60 p-6 rounded-2xl border border-[#d0f7a2]/40 shadow-md">
          <div className="flex flex-col gap-2 text-[#d0f7a2] text-lg text-center sm:text-left">
            <h2 className="font-semibold">{user?.username}</h2>
            <h2>{user?.name}</h2>
            <h2>{user?.email}</h2>
            <h2>{user?.phone}</h2>
          </div>
        </div>
      </div>

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
