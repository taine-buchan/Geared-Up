import request from 'superagent'
import { GreatWalk } from '../../models/great_walk'


export async function getGreatWalks(): Promise<GreatWalk[] | undefined> {
  try {
    const res = await request.get('/api/v1/great-walks')
    return res.body as GreatWalk[]
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
