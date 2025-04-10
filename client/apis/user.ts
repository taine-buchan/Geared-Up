import request from "superagent"
import { UserProfileData } from "../../models/user"


//POST /api/v1/user
export async function addUser(
  form: UserProfileData,
  token: string
): Promise<UserProfileData | undefined> {
  try {
    const res = await request
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
