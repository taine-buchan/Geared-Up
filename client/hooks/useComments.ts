import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  addCommentToGreatWalk,
  deleteComment,
  getCommentsByGreatWalkId,
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
      return await addCommentToGreatWalk(newComment, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', id] })
    },
  })
  return mutation
}

export function useUpdateCommentById(id: number) {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()
  const mutation = useMutation({
    mutationFn: async (updateComment: CommentUpdate) => {
      const token = await getAccessTokenSilently()
      return await updateCommentById(updateComment, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', id] })
    },
  })
  return mutation
}


export function useDeleteComment(id: number) {
  const queryClient = useQueryClient()
  const { getAccessTokenSilently } = useAuth0()
  const mutation = useMutation({
    mutationFn: async (commentId: number) => {
      const token = await getAccessTokenSilently()
      return await deleteComment(commentId, token)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments', id] })
    },
  })
  return mutation
}
