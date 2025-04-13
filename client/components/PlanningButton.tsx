import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from './Authenticated.tsx'
import Button from './Button.tsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useUserWalks } from '../hooks/useUserWalks.ts'

function PlanningButton(token: string) {
  const { walkId } = useParams()
  const navigate = useNavigate()
  const addWalk = useUserWalks(token)

  return (
    <>
      <IfAuthenticated>
        <Button onClick={() => addWalk.mutate(+walkId)}>Plan this Walk</Button>
      </IfAuthenticated>
    </>
  )
}

export default PlanningButton
