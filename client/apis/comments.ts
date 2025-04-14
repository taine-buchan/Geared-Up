import request from 'superagent'
import { CommentUpdate, CommentWithUsername, NewComment } from '../../models/comments'

//GET /api/v1/comments/:id
export async function getCommentsByGreatWalkId(
  id: number,
): Promise<CommentWithUsername[] | undefined> {
  try {
    const res = await request.get(`/api/v1/comments/${id}`)
    return res.body as CommentWithUsername[]
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
//PATCH /api/v1/comments/:id
export async function updateCommentById(
  updateComment: CommentUpdate | undefined,
  token: string,
) {
  try {
    const res = await request
      .patch(`/api/v1/comments/${updateComment?.id}`)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send(updateComment)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

//DELETE /api/v1/comments/:id
export async function deleteComment(id: number | undefined, token: string) {
  try {
    const res = await request
      .delete(`/api/v1/comments/${id}`)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
