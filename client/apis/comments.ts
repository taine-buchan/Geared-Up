import request from 'superagent'
import { CommentDraft, NewComment } from '../../models/comments'

//GET /api/v1/comments/:id
export async function getCommentsByGreatWalkId(
  id: number,
): Promise<CommentDraft[] | undefined> {
  try {
    const res = await request.get(`/api/v1/comments/${id}`)
    return res.body as CommentDraft[]
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

//POST /api/v1/comments/

export async function addCommentToGreatWalk(
  newComment: NewComment | undefined,
  token: string,
) {
  try {
    const res = await request
      .post(`/api/v1/comments`)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send(newComment)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

// DELETE /api/v1/comments/:id
export async function deleteCommentById(
  id: number,
  token: string,
): Promise<void> {
  try {
    await request
      .delete(`/api/v1/comments/${id}`)
      .set('Authorization', `Bearer ${token}`)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
