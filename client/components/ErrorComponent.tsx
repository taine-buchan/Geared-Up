import { Link } from "react-router-dom";


export default function ErrorComponent() {
  return (
    <div className="flex items-center flex-col gap-8 p-8">
        <img
          className="rounded-full w-[10%]"
          src={'/wired-lineal-1140-error-hover-oscillate.webp'}
          alt="error symbol"
        />
        <p className="text-[#d0f7a2] font-bold" aria-label="error message">
          Something went wrong...
        </p>
        <button className="button" aria-label="button to home page">
          <Link to={'/'}>Home</Link>
        </button>
      </div>
  )
}
