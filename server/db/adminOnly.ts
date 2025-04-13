import { NextFunction, Response } from 'express'

export function checkAdmin(
  req: Express.Request,
  res: Response,
  next: NextFunction,
) {
  const user = req.auth?.payload

  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' })
  }

  next()
}
