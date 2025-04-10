import { useQuery } from '@tanstack/react-query'
import { getGreatWalkById, getGreatWalks } from '../apis/greatWalks.ts'

export function useGreatWalks() {
  const query = useQuery({ queryKey: ['greatWalks'], queryFn: getGreatWalks })
  return query
}

export function useGreatWalkById(id: number) {
  const query = useQuery({
    queryKey: ['greatWalk'],
    queryFn: () => getGreatWalkById(id),
  })
  return query
}
