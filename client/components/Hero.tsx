import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative rounded-3xl overflow-hidden h-[70vh] w-[80%]">
        <img
          src="/mark-de-jong-t-7Cy6ZD0-k-unsplash.jpg"
          alt="Mountain landscape for hiking"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
            Take the quiz and gear up for your Aotearoa Great Walk
          </h1>
          <div className="py-6">
            <button>
              <Link to="/sign-in-sign-up" className="button">
                Get Started
              </Link>
              {''}
            </button>
          </div>

          <p className="text-xl md:text-2xl mt-8 font-serif space-y-2.5">
            Companion tool for the Great Walks of New Zealand
          </p>
        </div>
      </div>
    </div>
  )
}
