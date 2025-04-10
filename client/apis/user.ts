import request from "superagent"
import { UserProfileData } from "../../models/user"


//GET /api/v1/user/:id
export async function getUserProfile(
  token: string
): Promise<UserProfileData | undefined> {
  try {
    const res = await request
      .get(`/api/v1/user/`)
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json')
      const userData = {
        username: res.body.username,
        name: res.body.name,
        email: res.body.email,
        phone: res.body.phone,
      }
    return userData as UserProfileData
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}

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
      const userData = {
        username: res.body.username,
        name: res.body.name,
        email: res.body.email,
        phone: res.body.phone,
      }
    return userData as UserProfileData
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
