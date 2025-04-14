import { CommentData, CommentUpdate, CommentWithUsername } from '../../models/comments'
import connection from './connection'

export async function getCommentsByGreatWalkId(
  id: number,
): Promise<CommentWithUsername[]> {
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
      'user_id as userId'
    )
}
export async function createComment(commentInfo: CommentData) {
  return await connection('comments')
    .insert({
      user_id: commentInfo.userId,
      great_walk_id: commentInfo.greatWalkId,
      comment: commentInfo.comment,
      created_at: commentInfo.createdAt,
      updated_at: commentInfo.updatedAt,
    })
    .returning('*')
}

export async function editCommentsById(updatedComment: CommentUpdate) {
  await connection('comments')
    .where('id', updatedComment.id)
    .update({
      comment: updatedComment.comment,
      updated_at: updatedComment.updatedAt,
    })
}

export async function deleteComment(id: number) {
  return await connection('comments').where({ id }).delete()
}
