import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  addPlanningGreatWalk,
  addCompletedGreatWalks,
  editCompletedWalk,
  deleteUserWalk,
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
  const { getAccessTokenSilently } = useAuth0()
  // const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async (walkId: number[]) => {
      const token = await getAccessTokenSilently()
      addCompletedGreatWalks(walkId, token)
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

export function useEditCompleteWalk() {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  const mutation = useMutation({
    mutationFn: async (walkId: number) => {
      const token = await getAccessTokenSilently()
      editCompletedWalk(walkId, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
    },
    onError: (error) => {
      console.error('Error editing great walk', error)
    },
  })
  return mutation
}

export function useDeleteUserWalk() {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const token = await getAccessTokenSilently()
      deleteUserWalk(id, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-walks'] })
    },
    onError: (error) => {
      console.error('Error deleting great walk', error)
    },
  })
  return mutation
}
