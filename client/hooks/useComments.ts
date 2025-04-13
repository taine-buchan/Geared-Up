import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  addCommentToGreatWalk,
  getCommentsByGreatWalkId,
} from '../apis/comments.ts'
import { NewComment } from '../../models/comments.ts'
import { useAuth0 } from '@auth0/auth0-react'

export function useGetCommentsByGreatWalkId(id: number) {
  const query = useQuery({
    queryKey: ['comments', id],
    queryFn: () => getCommentsByGreatWalkId(id),
  })
  return query
}

export function useAddCommentToGreatWalk() {
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
