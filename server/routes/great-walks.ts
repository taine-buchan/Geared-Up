import { Router } from 'express'

import * as db from '../db/great-walks.ts'
import { logError } from '../logger.ts'
import { validateAccessToken } from '../auth0.ts'

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

export default router
