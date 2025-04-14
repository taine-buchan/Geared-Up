import { IfAuthenticated } from './Authenticated.tsx'
import Button from './Button.tsx'
import { useParams } from 'react-router-dom'
import { useEditCompleteWalk } from '../hooks/useUserWalks.ts'

function CompleteWalkButton(token: string) {
  const { walkId } = useParams()
  const editWalk = useEditCompleteWalk(token)

  if (!walkId) {
    return null
  }

  return (
    <>
      <IfAuthenticated>
        <Button onClick={() => editWalk.mutate(+walkId)}>Complete!</Button>
      </IfAuthenticated>
    </>
  )
}

export default CompleteWalkButton
