import { Router } from 'express'
import { requiresPermissionAuth0, validateAccessToken } from '../auth0.ts'

const router = Router()

router.get(
  '/all-users',
  validateAccessToken,
  requiresPermissionAuth0('delete:comments'),
  async (req, res) => {
    res.send(`you have a 'delete:comments' permission yipee`)
  },
)

export default router
