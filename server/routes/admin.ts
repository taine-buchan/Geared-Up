import { Router } from 'express'
// import * as OpenIDConnect from 'express-openid-connect'

import {
  oidcConfig,
  requiresPermission,
  // validateAccessToken,
} from '../auth0.ts'
import { auth as oidc, requiresAuth } from 'express-openid-connect'

// import { checkAdmin } from '../db/adminOnly.ts'
// import connection from '../db/connection.ts'
// const requiresAuth = OpenIDConnect.requiresAuth
// const oidc = OpenIDConnect.auth
const router = Router()
router.use(oidc(oidcConfig))
// Protected route: Only accessible to users with 'delete:comments' permission
router.get(
  '/all-users',
  // // validateAccessToken,
  // requiresPermission('delete:comments'),
  // (req, res) => {
  //   // const users = await connection('users').select()
  //   res.send('admin yipee')
  //   // res.json(users)
  requiresAuth(),
  requiresPermission('delete:comments'),
  async (req, res) => {
    res.send('admin yipee - you have permission to moderate comments')
  },
)
// Another protected route requiring 'read:data' permission
router.get(
  '/protected',
  requiresAuth(),
  requiresPermission('read:data'),
  (req, res) => {
    res.send('You have access!')
  },
)

export default router
