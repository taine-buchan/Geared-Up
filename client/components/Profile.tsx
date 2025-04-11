import { useAuth0 } from '@auth0/auth0-react'
import { UserData } from '../../models/user'
import { useUpsetUser } from '../hooks/useUser'
import ErrorPage from './ErrorPage'
import LoadingIndicator from './LoadingIndicator'
import ProfileForm from './ProfileForm'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
   const { data, isLoading, mutation } = useUpsetUser()
const navigate = useNavigate()

   if (!isAuthenticated && !user || !data) return <ErrorPage />
  if(isLoading) return <LoadingIndicator /> 


  async function handleSubmit(form: UserData) {
    const token = await getAccessTokenSilently()
    mutation.mutate({ form, token })
    navigate(`/user/${user?.sub}`)
  }

   return (
     <div>
       <ProfileForm handleSubmit={handleSubmit} form={data}/>
     </div>
   )
}
