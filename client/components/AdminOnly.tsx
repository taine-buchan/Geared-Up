import { useGetUser } from '../hooks/useUser'
// import { useUserRole } from '../hooks/useUserRole'

export function AdminOnly({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useGetUser()
  // console.log('role', role)
  const role = data?.role
  if (isLoading) return <p>Loading...</p>
  if (role !== 'admin') return <p>Access denied</p>

  return <>{children}</>
}
