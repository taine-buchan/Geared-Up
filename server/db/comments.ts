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

export async function deleteComment(id: number) {
  return await connection('comments').where({ id }).delete()
}
