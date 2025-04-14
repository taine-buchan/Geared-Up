import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addPlanningGreatWalk,
  addCompletedGreatWalks,
  editCompletedWalk,
} from '../apis/user-walks'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

export function usePlannedWalks() {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  const mutation = useMutation({
    mutationFn: async (walkId: number) => {
      const token = await getAccessTokenSilently()
      addPlanningGreatWalk(walkId, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
      // navigate(`/user/${token}`) // TODO: Comfirm correct url
    },
    onError: (error) => {
      console.error('Error adding planning great walk:', error)
    },
  })
  return mutation
}

export function useCompletedWalks() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { getAccessTokenSilently } = useAuth0()

  const mutation = useMutation({
    mutationFn: async (walkIds: number[]) => {
      const token = await getAccessTokenSilently()
      addCompletedGreatWalks(walkIds, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
      navigate(`/quiz-outlet/quiz-gear-list`)
    },
    onError: (error) => {
      console.error('Error adding planning great walk:', error)
    },
  })
  return mutation
}

export function useEditCompleteWalk(token: string) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (walkId: number) => editCompletedWalk(walkId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
    },
    onError: (error) => {
      console.error('Error editing great walk', error)
    },
  })
  return mutation
}
