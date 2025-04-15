import { Link } from 'react-router-dom'
import LoginButton from './LoginButton'

//-------nav styling
export default function Nav() {
  return (
    <nav className="bg-navy-900 py-12">
      <div className="flex items-center justify-between gap-auto max-w-screen-xl mx-auto px-14">
        <Link to="/">
          <img src="/logo_init.svg" alt="Icon" className="w-40" />
        </Link>
        <div className="flex items-center justify-center gap-16">
          <Link to="/" className="button-square">
            Home
          </Link>
          <Link to="/great-walks" className="button-square">
            Great Walks
          </Link>
          <LoginButton />
        </div>
      </div>
    </nav>
  )
}
