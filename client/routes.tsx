import { createRoutesFromElements, Route } from 'react-router-dom'
import AddProfile from './components/AddProfile'
import App from './components/App'
import ErrorPage from './components/ErrorPage'
import GreatWalk from './components/GreatWalk'
import GreatWalks from './components/GreatWalks'
import Home from './components/Hero'
import LoginButton from './components/LoginButton'
import Profile from './components/Profile'
import QuizFitnessLevel from './components/quiz/QuizFitness'
import QuizHaveYouCompleted from './components/quiz/QuizHaveYouCompleted'
import QuizLinkToDoc from './components/quiz/QuizLinkToDoc'
import QuizOutlet from './components/quiz/QuizOutlet'
import QuizWhichGreatWalks from './components/quiz/QuizWhichGreatWalks'
import UserGearListPage from './components/UserGearListPage'

export default createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/great-walks" element={<GreatWalks />} />
    <Route path="/great-walks/:id" element={<GreatWalk />} />
    <Route path="/user" element={<AddProfile />} />
    <Route path="/user/:sub" element={<Profile />} />
    <Route path="/login-button" element={<LoginButton />} />
    <Route path="/gear-lists" element={<UserGearListPage />} />

    <Route path="/quiz-outlet" element={<QuizOutlet />}>
      <Route index element={<QuizHaveYouCompleted />} />
      <Route path="quiz-fitness-level" element={<QuizFitnessLevel />} />
      <Route path="quiz-great-walks" element={<QuizWhichGreatWalks />} />
      <Route path="quiz-link-to-doc" element={<QuizLinkToDoc />} />
    </Route>
  </Route>
)
