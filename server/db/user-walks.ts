import { UserWalkDataDB } from '../../models/user_walk'
import connection from './connection'

//Todo: Make database model for this DB query

export async function addUserWalk(data: UserWalkDataDB) {
  await connection('user_walks').insert(data)
}

export async function editUserWalk(id: number, data: UserWalkDataDB) {
  return await connection('user_walks').where({ id }).update({
    user_id: data.user_id,
    great_walk_id: data.great_walk_id,
    is_complete: data.is_complete,
    is_planned: data.is_planned,
  })
}
