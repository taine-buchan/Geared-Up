import express from 'express'
import * as db from '../db/user.ts'

import { validateAccessToken } from '../auth0'
import { logError } from '../logger.ts'

const router = express.Router()

// GET /api/v1/comments/:id

router.get('/:id', validateAccessToken, async (req, res) => {
  const id = req.params.id

  if (!id) {
    return res.status(400).json({ message: 'Please provide a great walk id' })
  }
try {
    const comments = await db.getCommentsByGreatWalkId(id)
    res.status(200).json(comments)
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Unable to find user in the database' })
  }
})

export default router