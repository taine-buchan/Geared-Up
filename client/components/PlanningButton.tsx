import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import { usePlannedWalks } from '../hooks/useUserWalks.ts'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import Button from './Button.tsx'
interface Props {
  id: number
}

function PlanningButton(props: Props) {
  const { user, loginWithRedirect } = useAuth0()
  const walkId = props.id
  const navigate = useNavigate()
  const addWalk = usePlannedWalks()
  if (!walkId) {
    return null
  }
  const handleSignIn = () => {
    if (user) {
      return navigate(`/user/${user.sub}`)
    } else loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <Button
          onClick={() => addWalk.mutate(walkId)}
          className="button cursor-pointer"
        >
          Plan this Walk
        </Button>
      </IfAuthenticated>

      <IfNotAuthenticated>
        <Button onClick={handleSignIn} className="button cursor-pointer">
          Sign in
        </Button>
      </IfNotAuthenticated>
    </>
  )
}

export default PlanningButton
