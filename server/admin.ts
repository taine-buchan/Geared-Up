import { Router } from 'express'
import { validateAccessToken } from './auth0.ts'
import { checkAdmin } from './db/adminOnly.ts'
import connection from './db/connection.ts'

const router = Router()

router.get('/all-users', validateAccessToken, checkAdmin, async (req, res) => {
  const users = await connection('users').select()
  res.json(users)
})

export default router
