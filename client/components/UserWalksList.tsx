import { useFetchWalks } from '../hooks/useUserWalks'
import UserWalkListItem from './UserWalk'

type UserWalkListProps = {
  userId: string
}

export default function UserWalkList({ userId }: UserWalkListProps) {
  const { data: walks, isLoading, isError } = useFetchWalks(userId)

  if (isError) {
    return <p>Error fetching user walk</p>
  }
  if (isLoading) {
    return <p>Fetching user walks</p>
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
