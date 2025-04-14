import { auth } from 'express-oauth2-jwt-bearer'
import { NextFunction, Request, Response } from 'express'

import dotenv from 'dotenv'

dotenv.config()

// Extends Express Request using module augmentation.
// Give it extra typescript properties to be able to recognise permissions too!
declare module 'express' {
  interface Request {
    auth?: {
      token: string
      payload: {
        permissions?: string[]
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any
      }
    }
  }
}

const authConfig = {
  issuerBaseURL: `https://${process.env.VITE_AUTH0_DOMAIN}`,
  audience: process.env.VITE_AUTH0_AUDIENCE,
}

export const validateAccessToken = auth(authConfig)

export function requiresPermissionAuth0(requiredPermission: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    // Check if auth is available
    if (!req.auth) {
      return res.status(403).send('Forbidden: Authentication required')
    }
    try {
      // Get permissions directly from the permissions array
      const permissions: string[] = req.auth.payload.permissions || []

      if (!permissions.includes(requiredPermission)) {
        return res
          .status(403)
          .send(
            `Forbidden: insufficient permissions. Required: "${requiredPermission}"`,
          )
      }

      next()
    } catch (err) {
      console.error('Permission checking error:', err)
      if (err instanceof Error) {
        return res.status(403).send(`Forbidden: ${err.message}`)
      }
      return res.status(403).send('Forbidden: Unknown error')
    }
  }
}
