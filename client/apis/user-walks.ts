import request from 'superagent'

// POST /api/v1/user-walk

export async function addPlanningGreatWalk(walkId: number, token: string) {
  console.log(token)
  try {
    const res = await request
      .post('/api/v1/user-walks/planned')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send({ walkId })
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

export async function addCompletedGreatWalks(walkIds: number[], token: string) {
  try {
    const res = await request
      .post('/api/v1/user-walks/completed')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      .send({ greatWalkIds: walkIds })
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
