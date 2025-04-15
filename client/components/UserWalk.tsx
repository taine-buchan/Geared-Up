import { UserWalkListItem } from '../../models/user_walk'
import { useDeleteUserWalk, useEditCompleteWalk } from '../hooks/useUserWalks'
import Button from './Button'

interface Props {
  greatWalk: UserWalkListItem
}

export default function UserWalk({ greatWalk }: Props) {
  const deleteUserWalk = useDeleteUserWalk()
  const editUserWalk = useEditCompleteWalk()
  const handleDelete = () => {
    deleteUserWalk.mutate(greatWalk.id)
  }
  const handleEdit = () => {
    editUserWalk.mutate(greatWalk.id)
  }

  const state = greatWalk.isComplete ? 'Completed' : 'Planned'

  return (
    <>
      {`${greatWalk.name} | ${greatWalk.difficulty}`}
      <p className="text-xl px-4">{state}</p>
      <Button
        onClick={handleEdit}
        className="text-xl bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition"
      >
        Complete
      </Button>
      <Button
        onClick={handleDelete}
        className="text-xl bg-red-600  px-4 py-2 rounded hover:bg-red-700 transition"
      >
        🗑️
      </Button>
    </>
  )
}
