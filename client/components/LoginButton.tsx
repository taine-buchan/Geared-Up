import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import Button from './Button.tsx'
import userEvent from '@testing-library/user-event'

function LoginButton() {
  const { user, logout, loginWithRedirect } = useAuth0()
  const handleSignOut = () => {
    logout()
  }
  const handleSignIn = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signin',
        redirect_uri: `${window.location.origin}`,
      },
    })
  }
  return (
    <>
      <IfNotAuthenticated>
        <button onClick={handleSignIn} aria-label="Sign in">
          <img src="/profile_icon.svg" alt="Profile Icon" className="w-6 h-6" />
        </button>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <Button onClick={handleSignOut} className="button-square">
          Sign out
        </Button>
        <Link to={`/user/${user?.sub}`}>
          <img src="/profile_icon.svg" alt="Icon" className="w-6 h-6" />
        </Link>
      </IfAuthenticated>
    </>
  )
}

export default LoginButton
