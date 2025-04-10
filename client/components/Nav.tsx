import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'

export default function Nav() {
  return (
    <header className="fixed w-full h-6">
      <nav className="bg-navy-900 py-4">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center ">
            <img
              src="client/components/assets/icons/logo_init.svg"
              alt="Icon"
              className="w-40"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/great-walks" className="">
                  Great Walks
                </Link>
              </li>
              <li>
                <Link to="/user/:id" className="">
                  Profile
                </Link>
              </li>
              <li>
                <LoginButton />
              </li>
            </ul>

            {/* Profile Icon */}
            <Link to="/profile">
              <img src="/icons/your-icon.svg" alt="Icon" className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
