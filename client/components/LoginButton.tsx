import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { IfAuthenticated } from './Authenticated.tsx'
import Button from './Button.tsx'

function LoginButton() {
  const { logout } = useAuth0()
  // const navigate = useNavigate()
  const handleSignOut = () => {
    logout()
  }

  // const handleSignIn = () => {
  //  if(user) {
  //   console.log(user.sub)
  //   return navigate(`/user/${user.sub}`)
  //  } else loginWithRedirect()

  // }

  return (
    <>
      <IfAuthenticated>
        <Button onClick={handleSignOut}>Sign out</Button>
        {/* {user && (
          <p data-testid="logged in user">Signed in as: {user?.nickname}</p>
        )} */}
      </IfAuthenticated>
      {/* <IfNotAuthenticated> */}
      <Link to="/user-information">
        <img src="/profile_icon.svg" alt="Icon" className="w-6 h-6" />
      </Link>
      {/* </IfNotAuthenticated> */}
    </>
  )
}

export default LoginButton
