import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import db from '../db/connection'

import request from 'supertest'
import server from '../server'

beforeAll(async () => {
  await db.migrate.latest()
})

beforeEach(async () => {
  await db.seed.run()
})

describe('Get a single walk by id', () => {
  it('should return 200 with the correct great walk', async () => {
    const res = await request(server).get('/api/v1/great-walks/1')
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('Lake Waikaremoana')
  })
})
