import { useAuth0 } from '@auth0/auth0-react'
import ErrorPage from './ErrorPage'
import ProfileForm from './ProfileForm'
import { useGetUser } from '../hooks/useUser'
import { UserProfileData } from '../../models/user'

export default function UserProfile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data, isLoading, mutation } = useGetUser()

  if (isLoading) return <p>Loading...</p>
  if (!isAuthenticated && !user) return <ErrorPage />

  async function handleSubmit(form: UserProfileData) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token} )
  }
  return (
    <div>
      <ProfileForm handleSubmit={handleSubmit} userProfile={data} />
    </div>
  )
}
