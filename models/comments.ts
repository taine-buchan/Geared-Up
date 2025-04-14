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

export interface NewComment {
  greatWalkId: number
  comment: string
  createdAt: number
  updatedAt: number
}

export interface CommentDraft {
  username: string
  greatWalkId: number
  comment: string
  createdAt: number
  updatedAt: number
}
