export interface GreatWalkData {
  name: string
  difficulty: string
  elevation: string
  duration: string
  distance: string
  location: string
  description: string
  seasonal: string
  trackImageUrl: string
  docLink: string
  requiredEquipment: string
}

export interface GreatWalk extends GreatWalkData {
  id: number
}
