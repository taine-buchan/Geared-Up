import request from 'superagent'
import { UserWalkListItem } from '../../models/user_walk'

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

export async function editCompletedWalk(walkId: number, token: string) {
  try {
    const res = await request
      .patch(`/api/v1/user-walks/${walkId}`)
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Error occurred while editing completed great walk:',
        error.message,
      )
      throw new Error(error.message)
    }
  }
}

export async function deleteUserWalk(id: number, token: string) {
  try {
    const res = await request
      .delete(`/api/v1/user/${id}`)
      .set('Authorization', `Bearer ${token}`)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error occurred while deleting great walk', error.message)
      throw new Error(error.message)
    }
  }
}

export async function getUserWalks(
  id: string,
): Promise<UserWalkListItem[] | undefined> {
  try {
    const res = await request.get(`/api/v1/user/${id}`)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error occurred while fetching great walks', error.message)
      throw new Error(error.message)
    }
  }
}
