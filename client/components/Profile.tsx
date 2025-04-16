import { useAuth0 } from '@auth0/auth0-react'
import { UserData } from '../../models/user'
import { useGetUser, useUpsertUser } from '../hooks/useUser'
import LoadingIndicator from './LoadingIndicator'
import ProfileForm from './ProfileForm'
import ErrorComponent from './ErrorComponent'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const { data: existingUserData, isLoading, isError } = useGetUser()
  const navigate = useNavigate()
  const mutation = useUpsertUser()

  if (isLoading) return <LoadingIndicator />
  if ((!isAuthenticated && !user) || isError || !existingUserData)
    return <ErrorComponent />

  async function handleSubmit(form: UserData) {
    const token = await getAccessTokenSilently()
   
    mutation.mutate({ form, token })
    navigate(`/user/${user?.sub}`)
  }
  return (
    <div>
      <ProfileForm handleSubmit={handleSubmit} form={existingUserData} />
    </div>
  )
}
