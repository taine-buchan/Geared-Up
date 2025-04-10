import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addUser, getUserProfile } from '../apis/user'
import { UserProfileData } from '../../models/user'

export function useGetUser() {
  const { user, getAccessTokenSilently } = useAuth0()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getUserProfile(accessToken)
        return response
      }
    },
  })

  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: UserProfileData; token: string }) =>
      addUser(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  return { data, isLoading, mutation }
}
