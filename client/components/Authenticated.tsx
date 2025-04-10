import { useAuth0 } from '@auth0/auth0-react'
const useIsAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}
interface Props {
  children: React.ReactNode
}
export function IfAuthenticated(props: Props) {
  const { children } = props
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated(props: Props) {
  const { children } = props
  return !useIsAuthenticated() ? <>{children}</> : null
}

//user
//IcQf8j9xT0Nw923ITTokG1kO6hYbePce -clientId
//https://geared-up/api - identifier
//harakeke-2025-user.au.auth0.com
