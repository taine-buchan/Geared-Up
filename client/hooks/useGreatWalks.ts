import { useQuery } from '@tanstack/react-query'
import { getGreatWalkById, getGreatWalks } from '../apis/greatWalks.ts'
import { useAuth0 } from '@auth0/auth0-react'

export function useGreatWalks() {
  const query = useQuery({ queryKey: ['greatWalks'], queryFn: getGreatWalks })
  return query
}

export function useGreatWalkById(id: number) {
  const { user, getAccessTokenSilently } = useAuth0()
  const query = useQuery({
    queryKey: ['greatWalk', id],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently()
      if (user && user.sub) {
        const response = await getGreatWalkById(accessToken, id)
        return response
      }
    },
  })
  return query
}
