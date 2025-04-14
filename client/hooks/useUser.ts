import { useAuth0 } from '@auth0/auth0-react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { JustUserEquipment, UserData } from '../../models/user'
import { getUser, upsertUser } from '../apis/user'

export function useGetUser() {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      console.log('hi! hook here')

      const token = await getAccessTokenSilently()
      console.log('token hook', token)

      if (user && user.sub) {
        console.log('user from hook', user)
        const response = await getUser(token)
        console.log('hook response', response)

        return response
      }
    },
  })
  return query
}

export function useUpsertUser() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: UserData; token: string }) =>
      upsertUser(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      navigate(`/`)
    },
  })
  return mutation
}

export function useUpdateUserEquipment() {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  return useMutation({
    mutationFn: async ({
      currentUser,
      equipment,
    }: {
      currentUser: UserData
      equipment: JustUserEquipment
    }) => {
      if (!currentUser) throw new Error('No user data available')

      const token = await getAccessTokenSilently()

      const form: UserData = {
        username: currentUser.username,
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone,
        myEquipment: equipment,
        result: currentUser.result, // preserve existing result if needed
      }

      return await upsertUser(form, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
    onError: (error) => {
      console.error('Failed to update user equipment:', error)
    },
  })
}
