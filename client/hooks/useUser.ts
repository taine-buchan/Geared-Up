import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserProfileData } from '../../models/user'
import { addUser } from '../apis/user'
import { useNavigate } from 'react-router-dom'

export function useGetUser() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: UserProfileData; token: string }) =>
      addUser(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
      navigate('/quiz-outlet')
    },
  })

  return mutation 
}
