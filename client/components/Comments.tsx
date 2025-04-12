import { useGetCommentsByGreatWalkId } from '../hooks/useComments'
import ErrorComponent from './ErrorComponent'
import LoadingIndicator from './LoadingIndicator'

type Props = {
  id: number
}
export default function Comments(props: Props) {
  const {
    data: comments,
    isLoading,
    isError,
  } = useGetCommentsByGreatWalkId(props.id)
  if (isLoading) return <LoadingIndicator />
  if (isError ) return <ErrorComponent />
  if (comments) {
    if (comments.length === 0) return <p>Comments dose not exist.</p>
    return (
      <div>
        <h1>Comments</h1>
        <ul>
          {comments.map((comment) => {
            const date = comment.createdAt === comment.updatedAt ? comment.createdAt : comment.updatedAt
             return <li key={comment.id}>
              <p>{comment.username}</p>
              <p>{new Date(date).toLocaleString()}</p>
              <p>{comment.comment}</p>
            </li>
          })}
        </ul>
      </div>
    )
    return <p>No comments available.</p>
  }
}
