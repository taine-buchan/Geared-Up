import request from 'supertest'
import server from '../server'
import { describe, expect, it } from 'vitest'
import { getMockToken } from './mockToken'

// Token helper for different permission setups
// const getTokenWithPermissions = (permissions: string[] = []) =>
//   getMockToken({
//     permissions,
//     sub: 'auth0|admin-user-id',
//   })

describe('GET /api/v1/admin/all-users', () => {
  it('returns 200 if user has delete:comments permission', async () => {
    const token = getMockToken('admin')

    const response = await request(server)
      .get('/api/v1/admin/all-users')
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(200)
    expect(response.text).toContain(
      "you have a 'delete:comments' permission yipee",
    )
  })

  it('returns 403 if user does not have delete:comments permission', async () => {
    const token = getMockToken()

    const response = await request(server)
      .get('/api/v1/admin/all-users')
      .set('Authorization', `Bearer ${token}`)

    expect(response.status).toBe(403) //Forbidden
    expect(response.text).toContain('Forbidden: insufficient permissions')
  })

  it('returns 401 if no token is provided', async () => {
    const response = await request(server).get('/api/v1/admin/all-users')

    expect(response.status).toBe(401)
    // expect(response.text).toContain('Forbidden: Authentication required')
  })
})
