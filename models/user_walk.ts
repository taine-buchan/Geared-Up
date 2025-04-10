export interface UserWalkData {
  userId: string
  greatWalkId: number
  isComplete?: boolean
  isPlanned?: boolean
}

export interface UserWalk extends UserWalkData {
  id: number
}
