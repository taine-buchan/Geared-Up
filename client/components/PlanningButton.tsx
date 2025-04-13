import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from './Authenticated.tsx'
import Button from './Button.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useUserWalks } from '../hooks/useUserWalks.ts'

function PlanningButton(token: string) {
  const { user, loginWithRedirect } = useAuth0()
  const { walkId } = useParams()
  const navigate = useNavigate()
  const addWalk = useUserWalks(token)

  const handleSignIn = () => {
    if (user) {
      console.log(user.sub)
      return navigate(`/user/${user.sub}`)
    } else loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <Button onClick={() => addWalk.mutate(+walkId)}>Plan this Walk</Button>
      </IfAuthenticated>
      {/* <IfNotAuthenticated> */}
      <Button onClick={handleSignIn}>Sign in to Plan</Button>
      {/* </IfNotAuthenticated> */}
    </>
  )
}

export default PlanningButton
