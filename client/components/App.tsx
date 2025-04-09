import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

export default function App() {
  return (
    <div className="app-container">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
