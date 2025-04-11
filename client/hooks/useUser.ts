import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { UserData } from '../../models/user'
import { upsertUser, getUser } from '../apis/user'
import { useNavigate } from 'react-router-dom'


export function useGetUser() {
  const { user, getAccessTokenSilently} = useAuth0()
  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getUser(token)
        return response
      }
  }})
  return query
}

export function useUpsertUser() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
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
      navigate(`/`)
    },
  })
  return mutation
}


