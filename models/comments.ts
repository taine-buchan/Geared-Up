export interface Comment extends CommentData {
  id: number
}

export interface CommentData {
  userId: string
  greatWalkId: number
  comment: string
  createdAt: number
  updatedAt: number
}
