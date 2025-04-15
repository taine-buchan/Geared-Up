import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
// import RegisterButton from './RegisterButton'

export default function Hero() {
  // const { user } = useAuth0()
  const { user, loginWithRedirect } = useAuth0()
  const handleSignIn = () => {
    console.log('sign in')

    loginWithRedirect({
      // redirect_uri: `${window.location.origin}/`,
      authorizationParams: {
        screen_hint: 'signin',
        redirect_uri: `${window.location.origin}`,
      },
    })
  }
  const handleSignUp = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
        redirect_uri: `${window.location.origin}/user`,
      },
      // appState: { returnTo: '/user' }, // Will return to profile page
    })
  }

  // const handleQuiz = () => {
  //   loginWithRedirect({
  //     authorizationParams: {
  //       screen_hint: 'signup',
  //       redirect_uri: `${window.location.origin}/user/quiz-outlet`,
  //     },
  //     // appState: { returnTo: '/user' }, // Will return to profile page
  //   })
  // }
  return (
    <div className="w-full flex justify-center">
      <div className="relative rounded-3xl overflow-hidden h-[70vh] w-[80%]">
        <img
          src="/mark-de-jong-t-7Cy6ZD0-k-unsplash.jpg"
          alt="Mountain landscape for hiking"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 p-10">
          <h1 className="text-3xl lg:text-6xl md:text-5xl max-w-3xl">
            Take the quiz and gear up for your Great Walk
          </h1>
          <div className="py-6">
            {user ? (
              <Link to="/great-walks/recommend" className="button">
                Kia Ora! {user.name}
              </Link>
            ) : (
              <div className="flex gap-4">
                <button onClick={handleSignIn} className="button">
                  Sign In
                </button>
                <button onClick={handleSignUp} className="button">
                  Sign Up
                </button>
              </div>
            )}
          </div>

          <p className="text-l md:text-2xl font-extralight">
            Companion tool for the Great Walks of Aotearoa
          </p>
        </div>
      </div>
    </div>
  )
}
