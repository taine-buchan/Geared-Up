import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative rounded-3xl overflow-hidden h-[70vh] w-[80%]">
        <img
          src="/mark-de-jong-t-7Cy6ZD0-k-unsplash.jpg"
          alt="Mountain landscape for hiking"
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center mb-20">
          <h1 className="text-3xl lg:text-6xl md:text-5xl max-w-xl m-6">
            Take the quiz and gear up for your Great Walk
          </h1>
          <div className="mt-4 ">
            <button>
              <Link
                to="/login-button"
                className="button bg-[#d0f7a2] hover:bg-[#000000] text-blue-950 hover:text-[#d0f7a2] font-medium py-3 shadow-sm transition-colors drop-shadow"
              >
                Get Started
              </Link>
            </button>
          </div>

          <p className="text-l md:text-2xl m-6 py-6 font-extralight flex">
            Companion tool for the Great Walks of Aotearoa
          </p>
        </div>
      </div>
    </div>
  )
}
