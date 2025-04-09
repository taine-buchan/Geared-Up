export interface GreatWalkData {
  name: string
  difficulty: string
  elevation: string
  duration: string
  distance: string
  location: string
  description: string
  seasonal: string
  track_image_url: string
  doc_link: string
  required_equipment: string
}

export interface GreatWalk extends GreatWalkData {
  id: number
}
