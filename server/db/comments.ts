import connection from './connection'

export async function getCommentsByGreatWalkId(id: number) {
  return await connection('comments')
    .join('users', 'users.id', 'comments.user_id')
    .join('great_walks', 'great_walks.id', 'comments.great_walk_id')
    .where('great_walk_id', id)
    .select(
      'comments.id as id',
      'users.name as username',
      'great_walk_id as greatWalkId',
      'comment',
      'created_at as createdAt',
      'updated_at as updatedAt',
    )
}

export async function addNewByGreatWalkId(
  newLocation: LocationData,
): Promise<number> {
  return await connection('locations')
    .insert({
      user_id: 'auth0|648fd1c873375442becf2c60',
      great_walk_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      comment: 'hello!',
    })
    .returning('id')
}
