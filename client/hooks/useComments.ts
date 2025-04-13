import { useQuery } from '@tanstack/react-query'
import { getCommentsByGreatWalkId } from '../apis/comments.ts'

export function useGetCommentsByGreatWalkId(id: number) {
  const query = useQuery({
    queryKey: ['comments', id],
    queryFn: () => getCommentsByGreatWalkId(id),
  })
  return query
}
