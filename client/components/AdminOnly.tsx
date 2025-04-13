import { useUserRole } from '../hooks/useUserRole'

export function AdminOnly({ children }: { children: React.ReactNode }) {
  const { role, isLoading } = useUserRole()

  if (isLoading) return <p>Loading...</p>
  if (role !== 'admin') return <p>Access denied</p>

  return <>{children}</>
}
