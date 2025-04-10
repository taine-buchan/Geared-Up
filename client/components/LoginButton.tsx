import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button.tsx'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

function LoginButton() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const { user, logout, loginWithRedirect } = useAuth0()
  console.log(user)

  const handleSignOut = () => {
    console.log('sign out')
    //   TODO: return the logout function
    logout()
  }

  const handleSignIn = () => {
    console.log('sign in')
    //   TODO: return the loginWithRedirect function
    loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <Button onClick={handleSignOut}>Sign out</Button>
        {user && (
          <p data-testid="logged in user">Signed in as: {user?.nickname}</p>
        )}
      </IfAuthenticated>
      <IfNotAuthenticated>
        <Button onClick={handleSignIn}>Sign in</Button>
      </IfNotAuthenticated>
    </>
  )
}

export default LoginButton
