import { useAuth0 } from '@auth0/auth0-react'

function RegisterButton() {
  const { loginWithRedirect } = useAuth0()

  function handleRegister() {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signin',
        redirect_uri: `${window.location.origin}/user`,
      },
    })
  }

  return (
    <button onClick={handleRegister} className="button">
      Get Started
    </button>
  )
}

export default RegisterButton
