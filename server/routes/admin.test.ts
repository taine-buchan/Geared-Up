import request from 'supertest'
import server from '../server'
import { test, expect } from 'vitest'
import { getMockToken } from './mockToken'

test('GET /api/v1/admin/all-users as admin', async () => {
  const token = getMockToken('admin') // you can add `role` to the mock payload

  const res = await request(server)
    .get('/api/v1/admin/all-users')
    .set('Authorization', `Bearer ${token}`)

  expect(res.status).toBe(200)
  expect(Array.isArray(res.body)).toBe(true)
})
test('GET /api/v1/admin/all-users as user (unauthorized)', async () => {
  const token = getMockToken('user')

  const res = await request(server)
    .get('/api/v1/admin/all-users')
    .set('Authorization', `Bearer ${token}`)

  expect(res.status).toBe(403)
})
