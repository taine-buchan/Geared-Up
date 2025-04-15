import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './Footer'
import Nav from './Nav'

export default function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}
