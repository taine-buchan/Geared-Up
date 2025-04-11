import { createRoutesFromElements, Route } from 'react-router-dom'
import GreatWalk from './components/GreatWalk'
import App from './components/App'
import Home from './components/Hero'
import GreatWalks from './components/GreatWalks'
import UserProfile from './components/UserProfile'
import ErrorPage from './components/ErrorPage'
import LoginButton from './components/LoginButton'
import QuizWhichGreatWalks from './components/quiz/QuizWhichGreatWalks'
import QuizHaveYouCompleted from './components/quiz/QuizHaveYouCompleted'
import QuizFitnessLevel from './components/quiz/QuizFitness'
import QuizLinkToDoc from './components/quiz/QuizLinkToDoc'
import QuizOutlet from './components/quiz/QuizOutlet'

export default createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/great-walks" element={<GreatWalks />} />
    <Route path="/great-walks/:id" element={<GreatWalk />} />
    <Route path="/user/:sub" element={<UserProfile />} />
    <Route path="/login-button" element={<LoginButton />} />
    <Route path="/user/:id" element={<UserProfile />} />
    <Route path="/quiz-outlet" element={<QuizOutlet />}>
      <Route index element={<QuizHaveYouCompleted />} />
      <Route path="quiz-fitness-level" element={<QuizFitnessLevel />} />
      <Route path="quiz-great-walks" element={<QuizWhichGreatWalks />} />
      <Route path="quiz-link-to-doc" element={<QuizLinkToDoc />} />
    </Route>
  </Route>,
)
