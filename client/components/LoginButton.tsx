import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated } from './Authenticated.tsx'
import Button from './Button.tsx'
import { useNavigate } from 'react-router-dom'

function LoginButton() {
  const { user, logout, loginWithRedirect } = useAuth0()
  const navigate = useNavigate()
  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    if (user) {
      console.log(user.sub)
      return navigate(`/user/${user.sub}`)
    } else loginWithRedirect()
  }

  return (
    <>
      <IfAuthenticated>
        <Button onClick={handleSignOut}>Sign out</Button>
        {/* {user && (
          <p data-testid="logged in user">Signed in as: {user?.nickname}</p>
        )} */}
      </IfAuthenticated>
      {/* <IfNotAuthenticated> */}
      <Button onClick={handleSignIn}>
        <img src="/profile_icon.svg" alt="Icon" className="w-6 h-6" />
      </Button>
      {/* </IfNotAuthenticated> */}
    </>
  )
}

export default LoginButton
