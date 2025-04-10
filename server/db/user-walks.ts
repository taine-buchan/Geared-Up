import { UserWalkData } from '../../models/user_walk'
import connection from './connection'

export async function getUserWalks(user_id: number) {
  const userWalks = await connection('user_walks').where({ user_id })
  return userWalks
}

export async function insertUserWalk(walk: UserWalkData, user_id: number) {
  const newWalk = await connection('user_walks').insert({
    ...walk,
    user_id,
  })
  return newWalk
}
