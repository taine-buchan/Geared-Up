import { useAuth0 } from '@auth0/auth0-react'
import { UserData } from '../../models/user'
import { useUpsetUser } from '../hooks/useUser'
import AddProfileForm from './AddProfileForm'
import ErrorPage from './ErrorPage'
import LoadingIndicator from './LoadingIndicator'
import { useNavigate } from 'react-router-dom'

export default function AddProfile() {
 const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
    const { data, isLoading, mutation } = useUpsetUser()
    const navigate = useNavigate()
 
    if (!isAuthenticated && !user || !data) return <ErrorPage />
   if(isLoading) return <LoadingIndicator /> 
 
 
   async function handleSubmit(form: UserData) {
     const token = await getAccessTokenSilently()
     mutation.mutate({ form, token })
     navigate('/quiz-outlet')
   }
 
    return (
      <div>
        <AddProfileForm handleSubmit={handleSubmit} form={data}/>
      </div>
    )
  
}
