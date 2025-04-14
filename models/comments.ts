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

export interface CommentWithUsername {
  id: number
  username: string
  greatWalkId: number
  comment: string
  createdAt: number
  updatedAt: number
  userId: string
}
export interface CommentUpdate {
  id: number
  comment: string
  updatedAt: number
}