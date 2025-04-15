import { UserWalkListItem } from '../../models/user_walk'
import { useDeleteUserWalk, useEditCompleteWalk } from '../hooks/useUserWalks'
import Button from './Button'

interface Props {
  greatWalk: UserWalkListItem
}

export default function UserWalk({ greatWalk }: Props) {
  const deleteUserWalk = useDeleteUserWalk()
  const handleDelete = () => {
    deleteUserWalk.mutate(greatWalk.id)
  }
  const editUserWalk = useEditCompleteWalk()
  const handleEdit = () => {
    editUserWalk.mutate(greatWalk.id)
  }

  const state = greatWalk.isComplete ? 'Completed' : 'Planning'

  return (
    <>
      {`${greatWalk.name} | ${greatWalk.difficulty}`}
      <p>{state}</p>
      <Button onClick={handleEdit}>Complete</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  )
}
