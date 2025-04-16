import { useGetUser } from './useUser'

export function useUserRole() {
  const { data, isLoading } = useGetUser()
 

  return {
    role: data?.role,
    isLoading,
  }
}
