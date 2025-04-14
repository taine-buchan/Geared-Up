import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
// import RegisterButton from './RegisterButton'

export default function Hero() {
  // const { user } = useAuth0()
  const { user, loginWithRedirect } = useAuth0()

  const handleSignIn = () => {
    console.log('sign in')

    loginWithRedirect()
  }

  return (
    <div className="w-full flex justify-center">
      <div className="relative rounded-3xl overflow-hidden h-[70vh] w-[80%]">
        <img
          src="/mark-de-jong-t-7Cy6ZD0-k-unsplash.jpg"
          alt="Mountain landscape for hiking"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-20">
          <h1 className="text-3xl lg:text-6xl md:text-5xl max-w-xl m-6">
            Take the quiz and gear up for your Great Walk
          </h1>
          <div className="py-6">
            {user ? (
              <Link to="/great-walks/recommend" className="button">
                Kia Ora! {user.name}
              </Link>
            ) : (
              <button onClick={handleSignIn} className="button">
                Get Started
              </button>
              // <RegisterButton />
            )}
          </div>

          <p className="text-l md:text-2xl m-6 py-6 font-extralight flex">
            Companion tool for the Great Walks of Aotearoa
          </p>
        </div>
      </div>
    </div>
  )
}
