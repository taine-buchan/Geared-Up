import { useAuth0 } from '@auth0/auth0-react'
const { loginWithRedirect } = useAuth0()
function handleRedirect() {
  loginWithRedirect({
    authorizationParams: {
      screen_hint: 'profile form',
      redirect_uri: `${window.location.origin}/user`,
    },
  })
  return (
    <button onClick={handleRedirect} className="button">
      Get Started
    </button>
  )
}
{
  user ? (
    <Link to={`/user`} className="button">
      Kia Ora! {user.name}
    </Link>
  ) : (
    <>
      <button onClick={handleSignIn} className="button">
        Log In
      </button>
      <button onClick={handleSignUp} className="button ml-4">
        Sign Up
      </button>
    </>
  )
}
