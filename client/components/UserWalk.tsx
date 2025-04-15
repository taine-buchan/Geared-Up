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
    <div className="border-b border-[#d0f7a2]/40 last:border-none">
      <div className="grid grid-cols-[2fr_1fr_2fr] items-center text-center text-xl px-4 bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] rounded-[20px] sm:rounded-[30px] p-4 sm:p-6 text-[#d0f7a2] transition hover:scale-[1.02] hover:shadow-xl">
        {/* Walk Name - emphasized */}
        <div className="font-bold text-2xl truncate">{greatWalk.name}</div>

        {/* Difficulty + Status (grouped) */}
        <div className="text-center space-y-1">
          <div className="text-base">{greatWalk.difficulty}</div>
          <div
            className={`text-base italic font-medium ${
              greatWalk.isComplete ? 'text-green-400' : 'text-yellow-300'
            }`}
          >
            {state}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-2">
          <Button
            onClick={handleEdit}
            className="text-lg bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Complete
          </Button>
          <Button
            onClick={handleDelete}
            className="text-lg bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}
