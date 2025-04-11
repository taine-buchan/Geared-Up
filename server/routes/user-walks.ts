import express from 'express'
import * as db from '../db/user-walks'

import { validateAccessToken } from '../auth0'
import { logError } from '../logger'
import { useParams } from 'react-router-dom'

const router = express.Router()

// POST /api/v1/user-walks
// This route is used for both creating and updating a user-walk

router.post('/:walkId', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  const params = req.params
  // const form = req.body

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }
  // if no walkID?
  const userWalk = {
    userId: auth0Id,
    greatWalkId: +params.walkId,
    isPlanned: req.body.isPlanned || null,
    isCompleted: req.body.isCompleted || null,
  }
  try {
    await db.upsertUserWalk(userWalk)
    res.sendStatus(201)
  } catch (e) {
    logError(e)
    res
      .status(500)
      .json({ message: 'Unable to insert new User Walk into Database' })
  }
})

export default router
