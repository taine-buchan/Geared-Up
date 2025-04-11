import request from "superagent"
import { UserData } from "../../models/user"

//GET /api/v1/user
export async function getUser(
  token: string
): Promise<UserData | undefined> {
  try {
    const res = await request
      .get('/api/v1/user')
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      console.log(res.body)
    return res.body
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

// POST /api/v1/user
export async function upsertUser(
  form: UserData | undefined,
  token: string
) {
  try {
    const res =  await request
    .post('/api/v1/user')
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