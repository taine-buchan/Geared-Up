export function checkAdmin(req, res, next) {
  const user = req.auth?.payload

  if (!user || user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' })
  }

  next()
}
