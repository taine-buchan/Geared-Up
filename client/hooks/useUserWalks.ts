import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  addPlanningGreatWalk,
  addCompletedGreatWalks,
  editCompletedWalk,
  deleteUserWalk,
  getUserWalks,
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

// export function useCompletedWalks(token: string) {

//   const queryClient = useQueryClient()
//   const { getAccessTokenSilently } = useAuth0()

//   const mutation = useMutation({

//     mutationFn: (walkId: number[]) => addCompletedGreatWalks(walkId, token),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['user-walks'] })
//       navigate(`/user/${token}`) // TODO: Comfirm correct url
//     },
//     onError: (error) => {
//       console.error('Error adding planning great walk:', error)

//     mutationFn: async (walkId: number) => {
//       const token = await getAccessTokenSilently()
//       addPlanningGreatWalk(walkId, token)
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['user-walks'] })
//       // navigate(`/user/${token}`) // TODO: Comfirm correct url
//     },
//     onError: (error) => {
//       console.error('Error adding planning great walk:', error)
//     },
//   })
//   return mutation
// }

export function useCompletedWalks() {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()
  // const navigate = useNavigate()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async (walkId: number[]) => {
      const token = await getAccessTokenSilently()
      addCompletedGreatWalks(walkId, token)
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

// export function useEditCompleteWalk(token: string) {
//   const queryClient = useQueryClient()

//   const mutation = useMutation({
//     mutationFn: (walkId: number) => editCompletedWalk(walkId, token),
//   })}
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

// export function useFetchWalks(userId: string) {
//   const query = useQuery({
//     queryKey: ['user-walks', userId],
//     queryFn: () => getUserWalks(userId),
//   })
//   return query
// }

export function useFetchWalks(userId: string) {
  const { getAccessTokenSilently } = useAuth0()

  const query = useQuery({
    queryKey: ['user-walks', userId],
    queryFn: async () => {
      const token = await getAccessTokenSilently()
      return getUserWalks(userId, token)
    },
    enabled: !!userId, // optional: only run if userId exists
  })

  return query
}