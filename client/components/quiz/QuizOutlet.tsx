import { Outlet } from 'react-router-dom'

export default function QuizOutlet() {
  return (
    <div className="bg-blue-800">
      <Outlet />
    </div>
  )
}
