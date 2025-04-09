import express from 'express'

import * as db from '../db/'
import { validateAccessToken } from '../auth0' //check to see if auth0 has been set up
import { logError } from '../logger'
import { profileDraftSchema } from '../../models/Profile'

const router = express.Router()

// GET /api/v1/users/

router.get('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub

  if (!auth0Id) {
    res.status(400).json({ message: 'Please provide an id' })
    return
  }

  try {
    const user = await db.getUser(auth0Id)
    res.status(200).json(user)
  } catch (error) {
    logError(error)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})
