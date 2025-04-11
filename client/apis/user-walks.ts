import request from 'superagent'
import { UserWalkData } from '../../models/user_walk'

// POST /api/v1/user-walk

export async function addPlanningGreatWalk(
  form: UserWalkData,
  token: string,
): Promise<UserWalkData | undefined> {
  try {
    const res = await request
      .post('/api/v1/user-walks/')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send(form)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
