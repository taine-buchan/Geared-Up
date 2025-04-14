import { useState } from 'react'
import {
  useAddCommentToGreatWalk,
  useGetCommentsByGreatWalkId,
  useDeleteComment,
} from '../hooks/useComments'
import ErrorComponent from './ErrorComponent'
import LoadingIndicator from './LoadingIndicator'
import { NewComment } from '../../models/comments'
import { AdminOnly } from './AdminOnly'

type Props = {
  id: number
}
export default function Comments(props: Props) {
  const [form, setForm] = useState<NewComment>({
    greatWalkId: props.id,
    comment: '',
    createdAt: Number(new Date()),
    updatedAt: Number(new Date()),
  })

  const {
    data: comments,
    isLoading,
    isError,
  } = useGetCommentsByGreatWalkId(props.id)

  const mutation = useAddCommentToGreatWalk()
  const deleteMutation = useDeleteComment()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      comment: event.target.value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!form.comment) return alert('Leave a comment first...')
    try {
      mutation.mutate(form)
      setForm({
        greatWalkId: props.id,
        comment: '',
        createdAt: Number(new Date()),
        updatedAt: Number(new Date()),
      })
    } catch (error) {
      console.error('Error submitting comment', error)
    }
  }
  const handleDelete = (commentId: number) => {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      deleteMutation.mutate(commentId)
    }
  }
  if (isLoading) return <LoadingIndicator />
  if (isError) return <ErrorComponent />
  if (comments) {
    if (comments.length === 0) return <p>Comments does not exist.</p>
    return (
      <div>
        <h1>Comments</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="comment">Post a comment!</label>
          <input
            type="text"
            id="comment"
            name="comment"
            required
            value={form.comment}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {comments.map((comment) => {
            const date =
              comment.createdAt === comment.updatedAt
                ? comment.createdAt
                : comment.updatedAt
            return (
              <li key={comment.username}>
                <p>{comment.username}</p>
                <p>{new Date(date).toLocaleString()}</p>
                <p>{comment.comment}</p>
                <AdminOnly>
                  <button onClick={() => handleDelete(comment.id)}>
                    Delete
                  </button>
                </AdminOnly>
              </li>
            )
          })}
        </ul>
      </div>
    )
    return <p>No comments available.</p>
  }
}
