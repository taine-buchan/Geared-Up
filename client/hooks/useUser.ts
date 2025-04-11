import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { UserData } from '../../models/user'
import { upsertUser, getUser } from '../apis/user'

export function useUpsetUser() {
  const { user, getAccessTokenSilently} = useAuth0()
  const queryClient = useQueryClient()

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getUser(token)
        return response
      }
  }})

  const mutation = useMutation({
    mutationFn: ({
      form,
      token,
    }: {
      form: UserData
      token: string
    }) => upsertUser(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  return { data, isLoading, mutation }
}
