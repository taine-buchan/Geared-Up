import { useGetUser } from './useUser'

export function useUserRole() {
  const { data, isLoading } = useGetUser()
  console.log('useUserRole', data)

  return {
    role: data?.role,
    isLoading,
  }
}
