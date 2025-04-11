import express from 'express'
import * as db from '../db/user-walks'

import { validateAccessToken } from '../auth0'
import { logError } from '../logger'

const router = express.Router()

// POST /api/v1/user-walks
// This route is used for both creating and updating a user-walk

router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }
  // if no walkID?
  try {
    await db.addUserWalk(req.body)
    res.sendStatus(201)
  } catch (e) {
    logError(e)
    res
      .status(500)
      .json({ message: 'Unable to insert new User Walk into Database' })
  }
})

export default router
