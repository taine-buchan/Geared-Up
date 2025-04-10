import { createRoutesFromElements, Route } from 'react-router-dom'
import GreatWalk from './components/GreatWalk'
import App from './components/App'
import Home from './components/Hero'
import GreatWalks from './components/GreatWalks'
import SignInSignUp from './components/SignInSignUp'
import UserProfile from './components/UserProfile'
import ErrorPage from './components/ErrorPage'

export default createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/great-walks" element={<GreatWalks />} />
    <Route path="/great-walks/:id" element={<GreatWalk />} />
    <Route path="/sign-in-sign-up" element={<SignInSignUp />} />
    <Route path="/user/:id" element={<UserProfile />} />
  </Route>,
)
