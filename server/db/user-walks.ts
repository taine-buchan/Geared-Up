import { UserWalkDataDB } from '../../models/user_walk'
import connection from './connection'

//Todo: Make database model for this DB query

export async function addUserWalk(data: UserWalkDataDB | UserWalkDataDB[]) {
  await connection('user_walks').insert(data)
}

export async function editUserWalk(id: number, data: UserWalkDataDB) {
  return await connection('user_walks').where('great_walk_id', id).update({
    is_complete: data.is_complete,
    is_planned: data.is_planned,
  })
}

export async function deleteUserWalk(id: number) {
  return await connection('user_walks').where('id', id).delete()
}

export async function getUserWalks(user_id: string) {
  return connection('user_walks')
    .join('great_walks', 'user_walks.great_walk_id', 'great_walks.id')
    .where('user_walks.user_id', user_id)
    .select(
      'user_walks.id as id',
      'user_walks.user_id as userId',
      'user_walks.great_walk_id as greatWalkId',
      'user_walks.is_complete as isComplete',
      'user_walks.is_planned as isPlanned',
      'great_walks.name as name',
      'great_walks.difficulty as difficulty',
    )
}
