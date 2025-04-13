import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPlanningGreatWalk } from '../apis/user-walks'
import { useNavigate } from 'react-router-dom'

export function useUserWalks(token: string) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (walkId: number) => addPlanningGreatWalk(walkId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
      navigate(`/user/${token}`)
    },
    onError: (error) => {
      console.error('Error adding planning great walk:', error)
    },
  })
  return mutation
}
