import request from 'superagent'

export async function updateUserWalks(
  form: number[] | undefined,
  token: string,
) {
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
