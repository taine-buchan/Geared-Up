import { useGetUser } from '../hooks/useUser'
import { useUserRole } from '../hooks/useUserRole'

export function AdminOnly({ children }: { children: React.ReactNode }) {
  // const { role, isLoading } = useUserRole()
  const { data, isLoading } = useGetUser()
  const role = data?.role
  // console.log('role', role)

  if (isLoading) return <p>Loading...</p>
  if (role !== 'admin') return <p>Access denied</p>

  return <>{children}</>
}
