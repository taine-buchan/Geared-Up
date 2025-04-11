import { createRoutesFromElements, Route } from 'react-router-dom'
import GreatWalk from './components/GreatWalk'
import App from './components/App'
import Home from './components/Hero'
import GreatWalks from './components/GreatWalks'
import Profile from './components/AddProfile'
import ErrorPage from './components/ErrorPage'
import AddProfile from './components/AddProfile'

export default createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/great-walks" element={<GreatWalks />} />
    <Route path="/great-walks/:id" element={<GreatWalk />} />
    <Route path="/user" element={<AddProfile />} />
    <Route path="/user/:sub" element={<Profile />} />
  </Route>,
)
