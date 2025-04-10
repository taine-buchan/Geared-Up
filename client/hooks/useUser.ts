import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserProfileData } from '../../models/user'
import { addUser } from '../apis/user'

export function useGetUser() {
  const queryClient = useQueryClient()


  const mutation = useMutation({
    mutationFn: ({ form, token }: { form: UserProfileData; token: string }) =>
      addUser(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },
  })

  return mutation 
}
