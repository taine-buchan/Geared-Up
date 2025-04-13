import request from 'superagent'
import { Comment } from '../../models/comments'

//GET /api/v1/comments/:id
export async function getCommentsByGreatWalkId(
  id: number,
): Promise<Comment[] | undefined> {
  try {
    const res = await request.get(`/api/v1/comments/${id}`)
    return res.body as Comment[]
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
