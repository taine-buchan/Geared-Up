export interface UserWalkData {
  userId: number
  greatWalkId: number
  isComplete?: boolean
  isPlanned?: boolean
}

export interface UserWalk extends UserWalkData {
  id: number
}
