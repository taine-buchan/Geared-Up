import { Router } from 'express'
import { requiresPermission, validateAccessToken } from '../auth0.ts'
// import { checkAdmin } from '../db/adminOnly.ts'
// import connection from '../db/connection.ts'

const router = Router()

router.get(
  '/all-users',
  // validateAccessToken,
  requiresPermission('delete:comments'),
  (req, res) => {
    // const users = await connection('users').select()
    res.send('admin yipee')
    // res.json(users)
  },
)

export default router
