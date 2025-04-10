import { describe, it, expect, beforeAll } from 'vitest'
import db from '../db/connection'

import request from 'supertest'
import server from '../server'

beforeAll(async () => {
  await db.migrate.latest()
  await db.seed.run()
})

describe('Get a single walk by id', () => {
  it('should return 200 with the correct great walk', async () => {
    const res = await request(server).get('/api/v1/great-walks/1')
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('Lake Waikaremoana')
  })
})

describe('Get all walks', () => {
  it('should return 200 with all great walks', async () => {
    const res = await request(server).get('/api/v1/great-walks')
    expect(res.status).toBe(200)
    expect(res.body[0].name).toBe('Lake Waikaremoana')
  })
})
