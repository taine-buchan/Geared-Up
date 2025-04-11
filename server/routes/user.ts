import express from 'express'
import * as db from '../db/users.ts'

import { validateAccessToken } from '../auth0'
import { logError } from '../logger.ts'

const router = express.Router()

// POST /api/v1/user
// this route is used for both creating and updating a user
router.post('/', validateAccessToken, async (req, res) => {
  const auth0Id = req.auth?.payload.sub
  const form = req.body
  console.log(form)
  console.log('User Auth ID, server', auth0Id)

  if (!auth0Id) {
    res.status(400).json({ message: 'Missing auth0 id' })
    return
  }

  if (!form) {
    res.status(400).json({ message: 'Please provide a form' })
    return
  }

  console.log('Received user form  data:', JSON.stringify(form, null, 2))
  const profile = {
    id: auth0Id,
    username: form.username,
    name: form.name,
    email: form.email,
    phone: form.phone,
    result: form.result || '',
    myEquipment: form.myEquipment || {},
  }

  try {
    await db.upsertProfile(profile)
    res.sendStatus(201)
  } catch (e) {
    logError(e)
    res.status(500).json({ message: 'Unable to insert new user to database' })
  }
})

export default router
