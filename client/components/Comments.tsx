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
      <div className="w-full max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-4 text-[#d0f7a2]">
          Comments Section
        </h1>

        {/* Add Comment Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <label htmlFor="comment" className="block text-sm font-medium mb-2">
            Post a comment!
          </label>
          <input
            type="text"
            id="comment"
            name="comment"
            required
            value={form.comment}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>

        {/* Comments List */}
        <ul className="space-y-6">
          {comments.length > 0 ? (
            comments.map((comment) => {
              const date =
                comment.createdAt === comment.updatedAt
                  ? comment.createdAt
                  : comment.updatedAt

              return (
                <li
                  key={comment.id}
                  className="bg-gray-800/60 p-6 rounded-xl shadow-md border border-gray-700 flex flex-col justify-between h-full"
                >
                  {/* Header: Username & Date */}
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-semibold text-[#d0f7a2] tracking-wide">
                      {comment.username}
                    </p>
                    <p className="text-xs text-gray-400 italic">
                      {new Date(date).toLocaleString()}
                    </p>
                  </div>

                  {/* Either Edit Form or Comment Text */}
                  <div>
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
                        className="space-y-2"
                      >
                        <label
                          htmlFor="edit-comment"
                          className="block text-sm mb-1"
                        >
                          Edit your comment
                        </label>
                        <input
                          type="text"
                          id="edit-comment"
                          name="comment"
                          required
                          value={editComment}
                          onChange={handleEditChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-2 text-black"
                        />
                      </form>
                    ) : (
                      <p className="text-sm text-gray-100 leading-relaxed">
                        {comment.comment}
                      </p>
                    )}
                  </div>

                  {/* Buttons Bottom Right */}
                  <div className="flex justify-end mt-4 gap-2">
                    {editingCommentId === comment.id ? (
                      <button
                        type="submit"
                        onClick={(event) =>
                          handleUpdate(
                            {
                              id: comment.id,
                              comment: editComment,
                              updatedAt: Number(new Date()),
                            },
                            event,
                          )
                        }
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                      >
                        Submit Edit
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setEditingCommentId(comment.id)
                            setEditComment(comment.comment)
                          }}
                          className="text-sm bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={(event) => handleDelete(comment.id, event)}
                          className="text-sm bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </li>
              )
            })
          ) : (
            <p className="text-gray-400">
              No comments yet. Be the first to comment!
            </p>
          )}
        </ul>
      </div>
    )
  }
}
