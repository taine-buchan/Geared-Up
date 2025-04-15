import { useFetchWalks } from '../hooks/useUserWalks'
import ErrorComponent from './ErrorComponent'
import LoadingIndicator from './LoadingIndicator'
import UserWalkListItem from './UserWalk'

type UserWalkListProps = {
  userId: string
}

export default function UserWalkList({ userId }: UserWalkListProps) {
  const { data: walks, isLoading, isError } = useFetchWalks(userId)

  if (!walks || walks.length === 0) {
    return (
      <p className="text-center text-gray-400">No walks found for this user.</p>
    )
  }

  if (isError) {
    return <ErrorComponent />
  }
  if (isLoading) {
    return <LoadingIndicator />
  }
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4">
      <ul className="space-y-6">
        {(walks ?? []).map((walk) => (
          <li key={walk.id}>
            <UserWalkListItem greatWalk={walk} />
          </li>
        ))}
      </ul>
    </div>
  )
}
