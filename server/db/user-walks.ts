import { UserWalkData } from '../../models/user_walk'
import connection from './connection'

export async function addUserWalk(data: UserWalkData | UserWalkData[]) {
  await connection('user_walks').insert(data)
}
