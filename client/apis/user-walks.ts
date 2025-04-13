import request from 'superagent'

// POST /api/v1/user-walk

export async function addPlanningGreatWalk(walkId: number, token: string) {
  try {
    const res = await request
      .post('/api/v1/user-walks/')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send({ walkId })
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
