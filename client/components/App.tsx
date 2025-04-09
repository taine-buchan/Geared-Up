import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

function App() {
  return (
    <>
      <header>
        <Nav />
        <Outlet />
      </header>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
