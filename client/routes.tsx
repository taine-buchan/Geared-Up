import { createRoutesFromElements, Route } from 'react-router-dom'
import GreatWalk from './components/GreatWalk'
import App from './components/App'
import Home from './components/Hero'
import GreatWalks from './components/GreatWalks'
import UserProfile from './components/UserProfile'
import ErrorPage from './components/ErrorPage'

export default createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/great-walks" element={<GreatWalks />} />
    <Route path="/great-walks/:id" element={<GreatWalk />} />
<<<<<<< HEAD

    <Route path="/user/:id" element={<UserProfile />} />
=======
    <Route path="/login-button" element={<LoginButton />} />
    <Route path="/user/:sub" element={<UserProfile />} />
>>>>>>> d3ccb29cd33987f9c29efdbf63b1445145d45a43
  </Route>,
)
