import { createRoutesFromElements, Route } from 'react-router-dom'
import GreatWalk from './components/GreatWalk'
import App from './components/App'
import Home from './components/Hero'
import GreatWalks from './components/GreatWalks'
import Profile from './components/Profile'
import ErrorPage from './components/ErrorPage'
import LoginButton from './components/LoginButton'
import QuizWhichGreatWalks from './components/quiz/QuizWhichGreatWalks'
import QuizHaveYouCompleted from './components/quiz/QuizHaveYouCompleted'
import QuizFitnessLevel from './components/quiz/QuizFitness'
import QuizLinkToDoc from './components/quiz/QuizLinkToDoc'
import QuizOutlet from './components/quiz/QuizOutlet'
import AddProfile from './components/AddProfile'
import UserInformation from './components/UserInformation'
import RecommendGreatWalks from './components/RecommendGreatWalks'
import QuizGearList from './components/quiz/QuizGearList'

export default createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Home />} />
    <Route path="/great-walks" element={<GreatWalks />} />
    <Route path="/great-walks/:id" element={<GreatWalk />} />
    <Route path="/great-walks/recommend" element={<RecommendGreatWalks />} />
    <Route path="/user" element={<AddProfile />} />
    <Route path="/user-information" element={<UserInformation />} />
    <Route path="/user/:sub" element={<Profile />} />
    <Route path="/profile-form" element={<Profile />} />
    <Route path="/login-button" element={<LoginButton />} />

    <Route path="/quiz-outlet" element={<QuizOutlet />}>
      <Route index element={<QuizHaveYouCompleted />} />
      <Route path="quiz-fitness-level" element={<QuizFitnessLevel />} />
      <Route path="quiz-great-walks" element={<QuizWhichGreatWalks />} />
      <Route path="quiz-link-to-doc" element={<QuizLinkToDoc />} />
      <Route path="quiz-gear-list" element={<QuizGearList />} />
    </Route>
  </Route>,
)
