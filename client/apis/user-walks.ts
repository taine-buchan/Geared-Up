import request from 'superagent'

// POST /api/v1/user-walk

export async function addPlanningGreatWalk(walkId: number, token: string) {
  try {
    const res = await request
      .post('/api/v1/user-walks/')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send({ greatWalkId: walkId })
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error occurred while adding planned great walk:',
        error.message,
      )
      throw new Error(error.message)
    }
  }
}

export async function addCompletedGreatWalks(walkId: number, token: string) {
  try {
    const res = await request
      .post('/api/v1/user-walks/')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send([{ greatWalkId: walkId }])
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error occurred while adding completed great walks:',
        error.message,
      )
      throw new Error(error.message)
    }
  }
}
