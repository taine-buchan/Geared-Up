import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  addCommentToGreatWalk,
  getCommentsByGreatWalkId,
  deleteCommentById,
  updateCommentById,
} from '../apis/comments.ts'
import { CommentUpdate, NewComment } from '../../models/comments.ts'
import { useAuth0 } from '@auth0/auth0-react'

export function useGetCommentsByGreatWalkId(id: number) {
  const query = useQuery({
    queryKey: ['comments', id],
    queryFn: () => getCommentsByGreatWalkId(id),
  })
  return query
}

export function useAddCommentToGreatWalk(id: number) {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()
  const mutation = useMutation({
    mutationFn: async (newComment: NewComment) => {
      const token = await getAccessTokenSilently()
      addCommentToGreatWalk(newComment, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })
  return mutation
}

export function useDeleteComment() {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()

  return useMutation({
    mutationFn: async (id: number) => {
      const token = await getAccessTokenSilently()
      await deleteCommentById(id, token)
    },
    onSuccess: () => {
      // Invalidate and refetch the comments
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    },
  })
}
