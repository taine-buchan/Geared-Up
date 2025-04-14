import { useState, useRef, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

function LoginButton() {
  const { user, logout, loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleSignOut = () => {
    logout()
    setDropdownOpen(false)
  }

  const handleProfileClick = () => {
    if (isAuthenticated) {
      setDropdownOpen(!dropdownOpen)
    } else {
      loginWithRedirect()
    }
  }

  const goTo = (path: string) => {
    navigate(path)
    setDropdownOpen(false)
  }

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button onClick={handleProfileClick}>
        <img src="/profile_icon.svg" alt="Profile" className="w-6 h-6" />
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl z-50 text-sm">
          {/* Triangle pointer */}
          <div className="absolute top-0 right-4 -mt-2 w-4 h-4 bg-white rotate-45 shadow-sm"></div>

          <div className="p-5 pt-6 rounded-2xl">
            <div className="flex items-start gap-3 mb-4">
              <img src="/profile_icon.svg" alt="Profile" className="w-8 h-8" />
              <div>
                <p className="text-lg font-bold text-[#3F6610]">
                  Hi {user?.given_name || 'Mariya'}
                </p>
                <p className="text-sm text-[#3F6610]">My Profile & Settings</p>
              </div>
            </div>

            <hr className="border-gray-200 my-2" />

            <ul className="space-y-3 font-bold text-[#3F6610]">
              <li>
                <button
                  onClick={() => goTo('/wishlist')}
                  className="hover:underline"
                >
                  My Wishlist
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo('/walks')}
                  className="hover:underline"
                >
                  My Walks
                </button>
              </li>
              <li>
                <button
                  onClick={() => goTo('/gear-lists')}
                  className="hover:underline"
                >
                  My Gear Lists
                </button>
              </li>

              <li>
                <button
                  onClick={() => goTo('/reviews')}
                  className="hover:underline"
                >
                  My Reviews
                </button>
              </li>
            </ul>

            <hr className="border-gray-200 my-3" />

            <ul className="space-y-2 text-[#3F6610] font-medium">
              <li>
                <button
                  onClick={() => goTo('/help')}
                  className="hover:underline"
                >
                  Help & Feedback
                </button>
              </li>
              <li>
                <button onClick={handleSignOut} className="hover:underline">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginButton
