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

describe('Delete comment by id', () => {
  it('should return 204 when successfully deleted', async () => {
    vi.mocked(db.deleteComment).mockResolvedValue(1) // Simulate one row deleted

    const response = await request(server)
      .delete('/api/v1/comments/3')
      .set('authorization', `Bearer ${getMockToken()}`)

    expect(response.status).toBe(204) //successful deletion, no content
  })

  it('should return 404 when comment is not found', async () => {
    vi.mocked(db.deleteComment).mockResolvedValue(0) // No rows deleted

    const response = await request(server)
      .delete('/api/v1/comments/999') // ID not found
      .set('authorization', `Bearer ${getMockToken()}`)

    expect(response.status).toBe(404)
    expect(response.body.error).toBe('Comment not found') //Non-existent comment, not found
  })

  it('should return 400 for invalid ID', async () => {
    const response = await request(server)
      .delete('/api/v1/comments/not-a-number')
      .set('authorization', `Bearer ${getMockToken()}`)

    expect(response.status).toBe(400)
    expect(response.body.error).toBe('Invalid ID') //Invalid ID format, Bad Request
  })
})
