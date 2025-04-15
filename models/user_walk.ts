export interface UserWalkData {
  userId: string
  greatWalkId: number
  isComplete?: boolean
  isPlanned?: boolean
}

export interface UserWalk extends UserWalkData {
  id: number
}

export interface UserWalkDataDB {
  user_id: string
  great_walk_id: number
  is_complete?: boolean
  is_planned?: boolean
}

export interface UserWalkDB extends UserWalkDataDB {
  id: number
}

export interface UserEditWalk {
  id: number
  is_complete: boolean
  is_planned: boolean
}

export interface UserWalkListItem {
  id: number
  userId: string
  greatWalkId: number
  isComplete?: boolean
  isPlanned?: boolean
  name: string
  difficulty: string
}
