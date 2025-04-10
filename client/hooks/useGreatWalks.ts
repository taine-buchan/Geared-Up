import { useQuery } from '@tanstack/react-query'
import { getGreatWalks } from '../apis/greatWalks.ts'

export function useGreatWalks() {
  const query = useQuery({ queryKey: ['greatWalks'], queryFn: getGreatWalks })
  return query
}
