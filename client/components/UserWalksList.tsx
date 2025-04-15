import { useFetchWalks } from '../hooks/useUserWalks'
import ErrorComponent from './ErrorComponent'
import LoadingIndicator from './LoadingIndicator'
import UserWalkListItem from './UserWalk'

type UserWalkListProps = {
  userId: string
}

export default function UserWalkList({ userId }: UserWalkListProps) {
  const { data: walks, isLoading, isError } = useFetchWalks(userId)

  if (isError) {
    return <LoadingIndicator />
  }
  if (isLoading) {
    return <ErrorComponent />
  }
  return (
    <div>
      <ul>
        {walks?.map((walk) => (
          <li key={walk.id}>
            <UserWalkListItem greatWalk={walk} />
          </li>
        ))}
      </ul>
    </div>
  )
}
