import { UserWalkData } from '../../models/user_walk'
import connection from './connection'

export async function upsertUserWalk(userWalk: UserWalkData) {
  await connection('user_walks').insert({
    userId: userWalk.userId,
    greatWalkId: userWalk.greatWalkId,
    isComplete: userWalk.isComplete,
    isPlanned: userWalk.isPlanned,
  })
}
