import { Link, useParams } from 'react-router-dom'
import { useGreatWalkById } from '../hooks/useGreatWalks'
import LoadingIndicator from './LoadingIndicator'
import ErrorComponent from './ErrorComponent'
import Comments from './Comments'
import { convertToString } from '../utils/stringUtils'

export default function GreatWalk() {
  const { id } = useParams()
  const { data: greatWalk, isLoading, isError } = useGreatWalkById(Number(id))

  if (isLoading) return <LoadingIndicator />
  if (isError || !id) return <ErrorComponent />
  if (greatWalk) {
    const obj = Object.entries(greatWalk.requiredEquipment)
    const requiredEquipment = obj.filter((arr) => {
      if (arr[1] === true) {
        return arr[0]
      }
    })

    return (
      <div className="flex items-center justify-center mt-10">
        <div className="bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-10 my-10  mx-6 rounded-[45px] flex flex-col gap-4 w-3/5 justify-center items-center">
          <div className="flex flex-row gap-6">
            <div className="flex flex-col w-1/2 gap-6 mr-0">
              <img
                src={greatWalk.trackImageUrl}
                alt={greatWalk.name}
                className="w-full h-60 rounded-xl "
              />
              <div>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Location: </p>
                  {greatWalk.location}
                </p>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Difficulty: </p>
                  {greatWalk.difficulty}
                </p>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Duration: </p>
                  {greatWalk.duration}
                </p>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Distance: </p>
                  {greatWalk.distance}
                </p>
                <p className="flex flex-row">
                  <p className="font-bold mr-2">Seasonal: </p>
                  {greatWalk.seasonal}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              <h1 className="text-[40px] font-bold">{greatWalk.name}</h1>
              <div className="text-[15px] gap-4">
                <p>Elevation: {greatWalk.elevation}</p>

                <p>{greatWalk.description}</p>
              </div>

              <Link to={greatWalk.docLink}>
                <button className="button cursor-pointer">Doc Link</button>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-[30px] font-bold mb-4">Required Equipment</h1>
            {requiredEquipment.map((item) => (
              <button
                key={item[0]}
                className="border-[1px] p-2 mx-1 my-1 rounded-md"
              >
                {convertToString(item[0])}
              </button>
            ))}
            <Comments id={greatWalk.id} />
          </div>
        </div>
      </div>
    )
  }
}
