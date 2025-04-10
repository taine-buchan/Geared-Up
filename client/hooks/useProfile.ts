import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

import { User, UserData } from '../../models/user'
import { getUser, upsertProfile } from '../apis/user'

function useProfile() {
  const navigate = useNavigate()
  const { user, getAccessTokenSilently } = useAuth0()

  const queryClient = useQueryClient()
  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const res = await getUser(accessToken)
        return res
      }
    },
  })

  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: UserData | User; token: string }) =>
      upsertProfile(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      navigate('/my-profile')
    },
  })
  return { data, isLoading, mutation }
}

export default useProfile
