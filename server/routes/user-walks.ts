import express from 'express'
import * as db from '../db/user-walks'

import { validateAccessToken } from '../auth0'
import { logError } from '../logger'
import { UserWalkDataDB } from '../../models/user_walk'

const router = express.Router()

router.post('/completed', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  console.log(req.body)
  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }
  try {
    const newData: UserWalkDataDB[] = req.body.greatWalkIds.map(
      (great_walk_id: number) => ({
        user_id: auth0Id,
        great_walk_id,
        is_complete: true,
        is_planned: false,
      }),
    )

    await db.addUserWalk(newData)

    res.sendStatus(201).json({ message: 'User Walk created successfully' })

  } catch (e) {
    logError(e)
    res
      .status(500)
      .json({ message: 'Unable to insert new User Walk into Database' })
  }
})

router.post('/planned', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }
  try {
    const snakeWalk: UserWalkDataDB = {
      user_id: auth0Id,
      great_walk_id: req.body.walkId,
      is_complete: false,
      is_planned: true,
    }
    await db.addUserWalk(snakeWalk)

    res.sendStatus(201).json({ message: 'User Walk created successfully' })

  } catch (e) {
    logError(e)
    res
      .status(500)
      .json({ message: 'Unable to insert new User Walk into Database' })
  }
})

router.patch('/:walkId', validateAccessToken, async (req, res) => {
  const walkId = Number(req.params.id)
  const auth0Id = req.auth?.payload.sub
  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }
  try {
    const walk: UserWalkDataDB = {
      user_id: auth0Id,
      great_walk_id: walkId,
      is_complete: true, // Can make this a flip if we need this to be reusable, e.g. !req.body.isComplete
      is_planned: false,
    }
    await db.editUserWalk(walkId, walk)
    res.status(200).json({ message: 'User Walk updated successfully' })
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to edit this User Walk' })
  }
})

router.delete('/:id', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }
  try {
    const id = Number(req.params.id)
    await db.deleteUserWalk(id)
    res.status(204).json({ message: 'User Walk deleted successfully' })
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to delete User Walk' })
  }
})

export default router
