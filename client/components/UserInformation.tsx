import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import toast from 'react-hot-toast'

import UserWalkList from './UserWalksList'
import UserGearListPage from './UserGearListPage'
import LoadingIndicator from './LoadingIndicator'
import ErrorComponent from './ErrorComponent'

import { useGetUser } from '../hooks/useUser'
import { useUpsertUser } from '../hooks/useUser'
import { UserData } from '../../models/user'
import ProfileForm from './ProfileForm'

export default function UserInformation() {
  const { getAccessTokenSilently } = useAuth0()
  const [activeComponent, setActiveComponent] = useState<
    'User Walks' | 'User Gearlist'
  >('User Walks')
  const [editing, setEditing] = useState(false)

  const { data: user, isLoading, isError } = useGetUser()
  const { sub } = useParams()
  const upsertUser = useUpsertUser()

  if (!sub) {
    return null
  }
  if (isLoading) {
    return <LoadingIndicator />
  }
  if (isError || !user) {
    return <ErrorComponent />
  }

  const handleProfileSubmit = async (form: UserData) => {
    const token = await getAccessTokenSilently() // Adjust based on your auth flow
    upsertUser.mutate(
      { form, token },
      {
        onSuccess: () => {
          toast.success('Profile updated successfully! ✨')
          setEditing(false)
        },
      },
    )
  }

  return (
    <>
      <div className="w-full max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-[#d0f7a2] mb-4">Profile</h1>

        <div className="bg-[#1e293b]/60 p-6 rounded-2xl border border-[#d0f7a2]/40 shadow-md">
          {!editing ? (
            <>
              <div className="text-[#d0f7a2] text-[20px] px-4 sm:px-10">
                <div className="py-3 border-b border-[#d0f7a2]/20">
                  <h2 className="font-semibold">
                    Username:{' '}
                    <span className="font-normal">{user?.username}</span>
                  </h2>
                </div>
                <div className="py-3 border-b border-[#d0f7a2]/20">
                  <h2 className="font-semibold">
                    Name: <span className="font-normal">{user?.name}</span>
                  </h2>
                </div>
                <div className="py-3 border-b border-[#d0f7a2]/20">
                  <h2 className="font-semibold">
                    Email: <span className="font-normal">{user?.email}</span>
                  </h2>
                </div>
                <div className="py-3">
                  <h2 className="font-semibold">
                    Phone: <span className="font-normal">{user?.phone}</span>
                  </h2>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setEditing(true)}
                  className="bg-[#d0f7a2] text-[#070446] px-4 py-2 rounded-lg font-medium hover:bg-lime-300 transition"
                >
                  Edit Profile
                </button>
              </div>
            </>
          ) : (
            <ProfileForm form={user} handleSubmit={handleProfileSubmit} />
          )}
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
