import express from 'express'
import * as db from '../db/comments.ts'

import { validateAccessToken } from '../auth0'
import { logError } from '../logger.ts'
import { CommentData } from '../../models/comments.ts'

const router = express.Router()
// GET /api/v1/comments/:id

router.get('/:id', async (req, res) => {
  const id = req.params.id

  if (!id) {
    return res.status(400).json({ message: 'Please provide a great walk id' })
  }
  try {
    const comments = await db.getCommentsByGreatWalkId(+id)
    res.status(200).json(comments)
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Unable to find comment in the database' })
  }
})

// POST: /api/v1/comments
router.post('/', validateAccessToken, async (req, res) => {
  console.log('I should see this')

  const { greatWalkId, comment } = req.body
  const userId = req.auth?.payload.sub
  console.log('greatWalk route', greatWalkId)

  if (!userId) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  const commentInfo: CommentData = {
    userId,
    greatWalkId,
    comment,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  }

  try {
    const newComment = await db.createComment(commentInfo)
    res.status(201).json({ newComment })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Oops could not create comment' })
  }
})

// PATCH: /api/v1/comments
router.patch('/', validateAccessToken, async (req, res) => {
  const updatedComment = req.body

  if (!updatedComment) {
    return res.status(400).json({ message: 'Please provide a new comment' })
  }
  try {
    await db.editCommentsById(updatedComment)
    res.status(201).json({ message: 'Comment updated successfully' })
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Unable to find comment in the database' })
  }
})

//DELETE /api/v1/comments/:id

router.delete('/:id', validateAccessToken, async (req, res, next) => {
  try {
    const id = Number(req.params.id)

    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' })
    }
    const deletedRows = await db.deleteComment(id)
    if (deletedRows === 0) {
      return res.status(404).json({ error: 'Comment not found' })
    }
    res.sendStatus(204) // No content (successful deletion)
  } catch (e) {
    next(e)
  }
})

export default router
