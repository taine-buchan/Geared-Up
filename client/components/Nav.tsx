import { Link } from 'react-router-dom'
// import LoginButton from './LoginButton'

export default function Nav() {
  return (
    <nav className="bg-navy-900 py-10">
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center ">
          <img src="/logo_init.svg" alt="Icon" className="w-40" />
        </Link>

        {/* Nav links */}
        <div className="flex items-center space-x-8">
          <ul className="flex space-x-8 font-extralight">
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
          </ul>

          {/* Profile Icon */}
          <Link to="/profile">
            <img src="/profile_icon.svg" alt="profile"></img>
          </Link>
        </div>
      </div>
    </nav>
  )
}
