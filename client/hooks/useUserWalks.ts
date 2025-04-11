import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UserWalkData } from '../../models/user_walk'
import { addPlanningGreatWalk } from '../apis/user-walks'
import { useNavigate } from 'react-router-dom'

export function useUserWalks(token: string) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (form: UserWalkData) => addPlanningGreatWalk(form, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
      navigate(`/user/${token}`)
    },
  })
  return mutation
}
