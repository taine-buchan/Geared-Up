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

export function useCompletedWalks(token: string) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (walkId: number[]) => addCompletedGreatWalks(walkId, token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
      navigate(`/user/${token}`) // TODO: Comfirm correct url
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
