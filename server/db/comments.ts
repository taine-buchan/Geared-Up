import connection from './connection'

export async function getCommentsByGreatWalkId(id: number) {
  return await connection('comments')
    .join('users', 'users.id', 'comments.user_id')
    .join('great_walk', 'great_walk.id', 'comments.great_walk_id')
    .where('great_walk_id', id)
    .select(
      'id',
      'users.name as username',
      'great_walk_id as greatWalkId',
      'comment',
      'created_at as createdAt',
      'updated_at as updatedAt',
    )
}
