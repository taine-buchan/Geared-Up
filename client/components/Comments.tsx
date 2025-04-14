import { useState } from 'react'
import {
  useAddCommentToGreatWalk,
  useDeleteComment,
  useGetCommentsByGreatWalkId,
  useUpdateCommentById,
} from '../hooks/useComments'
import ErrorComponent from './ErrorComponent'
import LoadingIndicator from './LoadingIndicator'
import { CommentUpdate, NewComment } from '../../models/comments'

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
  const [editComment, setEditComment] = useState(form.comment)
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null)
  const {
    data: comments,
    isLoading,
    isError,
  } = useGetCommentsByGreatWalkId(props.id)

  const addMutation = useAddCommentToGreatWalk(props.id)
  const deleteMutation = useDeleteComment(props.id)
  const updateMutation = useUpdateCommentById(props.id)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      comment: event.target.value,
    }))
  }
  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditComment(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!form.comment) return alert('Leave a comment first...')
    try {
      addMutation.mutate(form)
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

  const handleDelete = (id: number, event: React.FormEvent) => {
    event.preventDefault()
    try {
      deleteMutation.mutate(id)
    } catch (error) {
      console.error('Error deleting comment', error)
    }
  }

  const handleUpdate = (
    updatedComment: CommentUpdate,
    event: React.FormEvent,
  ) => {
    event.preventDefault()

    if (!updatedComment.comment)
      return alert('Leave a comment to update the comment...')
    try {
      updateMutation.mutate(updatedComment)
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
        <div>
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
                    key={comment.id}
                  >
                    <p className="font-semibold text-[#d0f7a2] tracking-wide">
                      {comment.username}
                    </p>
                    <p className="text-xs text-gray-400 mb-2 italic">
                      {new Date(date).toLocaleString()}
                    </p>
                    <button
                      onClick={() => {
                        setEditingCommentId(comment.id)
                        setEditComment(comment.comment)
                      }}
                    >
                      Edit Comment
                    </button>
                    <button
                      onClick={(event) => handleDelete(comment.id, event)}
                    >
                      X
                    </button>
                    {editingCommentId === comment.id ? (
                      <form
                        onSubmit={(event) =>
                          handleUpdate(
                            {
                              id: comment.id,
                              comment: editComment,
                              updatedAt: Number(new Date()),
                            },
                            event,
                          )
                        }
                      >
                        <label htmlFor="comment">Edit a comment!</label>
                        <input
                          type="text"
                          id="comment"
                          name="comment"
                          required
                          value={editComment}
                          onChange={handleEditChange}
                        />
                        <button type="submit">Submit</button>
                      </form>
                    ) : (
                      <p className="text-sm text-gray-100 leading-relaxed">
                        {comment.comment}
                      </p>
                    )}
                  </li>
                )
              })
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
