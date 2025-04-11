import express from 'express'
import * as db from '../db/user-walks'

import { validateAccessToken } from '../auth0'
import { logError } from '../logger'
import { UserWalkData } from '../../models/user_walk'

const router = express.Router()

// POST /api/v1/user-walks
// This route is used for both creating and updating a user-walk

router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  console.log(req.body)
  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }
  // if no walkID?
  try {
    if (req.body.length !== undefined) {
      console.log('try!')

      const newData = req.body.map((walk: UserWalkData) => ({
        user_id: auth0Id,
        great_walk_id: walk.greatWalkId,
        is_complete: walk.isComplete,
        is_planned: walk.isPlanned,
      }))
      console.log('New Data: ', newData)

      await db.addUserWalk(newData)
      res.sendStatus(201)
    } else {
      const walk = req.body
      const snakeWalk = {
        user_id: auth0Id,
        great_walk_id: walk.greatWalkId,
        is_complete: walk.isComplete,
        is_planned: walk.isPlanned,
      }
      await db.addUserWalk(snakeWalk)
      res.sendStatus(201)
    }
  } catch (e) {
    logError(e)
    res
      .status(500)
      .json({ message: 'Unable to insert new User Walk into Database' })
  }
})

export default router
