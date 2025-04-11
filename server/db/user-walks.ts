import { UserWalkData } from '../../models/user_walk'
import connection from './connection'

//Todo: Make database model for this DB query

export async function addUserWalk(data) {
  await connection('user_walks').insert(data)
}
