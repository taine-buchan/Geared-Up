import request from 'supertest'
import { describe, expect, it, vi } from 'vitest'
import * as db from '../db/comments'
import server from '../server'
import { getMockToken } from './mockToken'

vi.mock('../db/comments')
vi.mock('../logger.ts')

describe('Get a comments by great walk id', () => {
  it('should return 200 with the correct comments', async () => {
    const fakeComment = {
      id: 3,
      username: 'fake-username',
      greatWalkId: 1,
      comment: 'fake-comment',
      createdAt: 2222,
      updatedAt: 1111,
    }

    vi.mocked(db.getCommentsByGreatWalkId).mockResolvedValue([fakeComment])
    const response = await request(server)
      .get('/api/v1/comments/1')
      .set('authorization', `Bearer ${getMockToken()}`)
    expect(response.status).toBe(200)
    expect(response.body).toEqual([fakeComment])
  })
})

describe('add comment', () => {
  it('should return 201 when succesfully added', async () => {
    const fakeComment = {
      userId: 3,
      greatWalkId: 1,
      comment: 'fake-comment',
      createdAt: 2222,
      updatedAt: 1111,
    }

    vi.mocked(db.createComment).mockResolvedValue([
      {
        user_id: fakeComment.userId,
        great_walk_id: fakeComment.greatWalkId,
        comment: fakeComment.comment,
        created_at: fakeComment.createdAt,
        updated_at: fakeComment.updatedAt,
      },
    ])
    const response = await request(server)
      .post('/api/v1/comments')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeComment)
    expect(response.status).toBe(201)
  })
})

describe('Update comment by id', () => {
  it('should return 201 when succesfully updated', async () => {
    const fakeComment = {
      id: 3,
      username: 'fake-username',
      greatWalkId: 1,
      comment: 'fake-comment',
      createdAt: 2222,
      updatedAt: 1111,
    }

    vi.mocked(db.editCommentsById).mockResolvedValue()
    const response = await request(server)
      .patch('/api/v1/comments')
      .set('authorization', `Bearer ${getMockToken()}`)
      .send(fakeComment)
    expect(response.status).toBe(201)
    expect(response.body.message).toEqual('Comment updated successfully')
  })
})
