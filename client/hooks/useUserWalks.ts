import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addPlanningGreatWalk,
  addCompletedGreatWalks,
  editCompletedWalk,
} from '../apis/user-walks'
import { useNavigate } from 'react-router-dom'

export function usePlannedWalks(token: string) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: (walkId: number) => addPlanningGreatWalk(walkId, token),
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
