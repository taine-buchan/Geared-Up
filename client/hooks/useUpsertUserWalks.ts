import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { updateUserWalks } from '../apis/QuizUserWalks'
import { useAuth0 } from '@auth0/auth0-react'
import { SelectedWalkData } from '../components/quiz/QuizWhichGreatWalks'

export function useUpsertUserWalks() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  const mutation = useMutation({
    mutationFn: async (form: SelectedWalkData[]) => {
      const token = await getAccessTokenSilently() // Get token here
      return updateUserWalks(form, token) // Now token is available
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
      navigate(`../quiz-fitness-level`)
    },
  })
  return mutation
}
