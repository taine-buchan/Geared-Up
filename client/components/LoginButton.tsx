import { useAuth0 } from '@auth0/auth0-react'
import Button from './Button.tsx'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

function LoginButton() {
  const { user, logout, loginWithRedirect } = useAuth0()
  console.log(user)

  const handleSignOut = () => {
    console.log('sign out')

    logout()
  }

  const handleSignIn = () => {
    console.log('sign in')

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
        <Button onClick={handleSignIn}>
          <img src="/icons/your-icon.svg" alt="Icon" className="w-6 h-6" />
        </Button>
      </IfNotAuthenticated>
    </>
  )
}

export default LoginButton
