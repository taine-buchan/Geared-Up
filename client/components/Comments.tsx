import { useState } from 'react'
import {
  useAddCommentToGreatWalk,
  useGetCommentsByGreatWalkId,
} from '../hooks/useComments'
import ErrorComponent from './ErrorComponent'
import LoadingIndicator from './LoadingIndicator'
import { NewComment } from '../../models/comments'

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

  if (isLoading) return <LoadingIndicator />
  if (isError) return <ErrorComponent />
  if (comments) {
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
        <ul className="space-y-6 mt-6">
          {comments.length > 0 ? (
            comments.map((comment) => {
              const date =
                comment.createdAt === comment.updatedAt
                  ? comment.createdAt
                  : comment.updatedAt

              return (
                <li
                  className="bg-gray-800/60 p-5 rounded-xl shadow-md border border-gray-700"
                  key={comment.username}
                >
                  <p className="font-semibold text-[#d0f7a2] tracking-wide">
                    {comment.username}
                  </p>
                  <p className="text-xs text-gray-400 mb-2 italic">
                    {new Date(date).toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-100 leading-relaxed">
                    {comment.comment}
                  </p>
                </li>
              )
            })
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </ul>
      </div>
    )
  }
}
