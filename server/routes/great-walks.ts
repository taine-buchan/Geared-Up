import { Router } from 'express'

import * as db from '../db/great-walks.ts'
import { logError } from '../logger.ts'
import { validateAccessToken } from '../auth0.ts'
import { GreatWalk } from '../../models/great_walk.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const walks = await db.getAllWalks()
    res.status(200).json(walks)
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to retrieve great walks' })
  }
})

router.get('/:id', async (req, res) => {
  const id = +req.params.id
  if (!id) {
    res.status(400).json({ message: 'Please provide a valid great walk id' })
    return
  }
  validateAccessToken
  try {
    const walk = await db.getWalkById(id)

    res.status(200).json(walk)
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to retrieve great walk' })
  }
})

// TODO: use checkJwt as middleware
// PUT /api/v1/ great_walks
router.put('/:id', validateAccessToken, async (req, res) => {
  const { great_walk } = req.body as { great_walk: GreatWalk }
  const auth0Id = req.auth?.payload.sub

  const id = Number(req.params.id)

  if (!great_walk || !id) {
    console.error('Bad Request - no  great_walk or id')
    return res.status(400).send('Bad request')
  }

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  try {
    await db.userCanEdit(id, auth0Id)
    const updated_great_walk = await db.update_great_walk(id, great_walk)

    res.status(200).json({ great_walk: updated_great_walk })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
      if (error instanceof Error && error.message === 'Unauthorized') {
        return res
          .status(403)
          .send(
            'Unauthorized: Only the user who added the  great_walk may update it',
          )
      }
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
