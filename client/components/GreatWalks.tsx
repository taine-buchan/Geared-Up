/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useGreakWalks } from '../hooks/useFruits'
import { Link } from 'react-router-dom'
function GreatWalks() {
  // const { data: greatWalks, isLoading, isError } = useGreakWalks()
  // if (isLoading) return <p>Loading...</p>
  // if (isError) return <p>Error!</p>
  const greatWalks = [
    {
      id: 1,
      name: 'Lake Waikaremoana',
      difficulty: 'Intermediate',
      elevation:
        'The highest point is Bald Knob at 1,161 meters (3,809 feet), located on Panekire Bluff.',
      duration: '3-4 days',
      distance: '46 km one way',
      location: 'Te Urewera, East North Island',
      description:
        'Lake Waikaremoana is a Great Walk that is more of a backcountry, off the beaten track experience. Be immersed into stunning natural wilderness and welcomed into the homeland of Ngai Tūhoe.',
      seasonal: 'All year',
      trackImageUrl:
        'https://www.hawkesbaynz.com/assets/HBT-See-and-Do/Rivers-Lakes-Waterfalls/HBT-SeeDo-Recreations-RiversLakesWaterfalls-LakeWaikaremoana-Banner-1600x650.jpg',
      docLink:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/',
      requiredEquipment: '',
    },
    {
      id: 2,
      name: 'Lake Waikaremoana',
      difficulty: 'Intermediate',
      elevation:
        'The highest point is Bald Knob at 1,161 meters (3,809 feet), located on Panekire Bluff.',
      duration: '3-4 days',
      distance: '46 km one way',
      location: 'Te Urewera, East North Island',
      description:
        'Lake Waikaremoana is a Great Walk that is more of a backcountry, off the beaten track experience. Be immersed into stunning natural wilderness and welcomed into the homeland of Ngai Tūhoe.',
      seasonal: 'All year',
      trackImageUrl:
        'https://www.hawkesbaynz.com/assets/HBT-See-and-Do/Rivers-Lakes-Waterfalls/HBT-SeeDo-Recreations-RiversLakesWaterfalls-LakeWaikaremoana-Banner-1600x650.jpg',
      docLink:
        'https://www.doc.govt.nz/parks-and-recreation/places-to-go/east-coast/places/te-urewera/things-to-do/tracks/lake-waikaremoana-great-walk/',
      requiredEquipment: '',
    },
  ]
  const intermediateGreatWalks = () => {
    greatWalks.filter((greatWalk) => greatWalk.difficulty === 'Intermediate')
  }
  const easyGreatWalks = () => {
    greatWalks.filter((greatWalk) => greatWalk.difficulty === 'Easy')
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 ">
        <h1 className="text-[60px] font-bold">Great Walks</h1>
        <div className="gap-6 flex flex-row mt-6">
          <button
            onClick={easyGreatWalks}
            className="p-0 m-0 border-none bg-transparent cursor-pointer"
            aria-label="Toggle menu" // Good for screen readers
          >
            <img
              src="client/components/assets/icons/easy.svg"
              alt="Icon"
              className="w-40"
            />
          </button>
          <button
            onClick={intermediateGreatWalks}
            className="p-0 m-0 border-none bg-transparent cursor-pointer"
            aria-label="Toggle menu" // Good for screen readers
          >
            <img
              src="client/components/assets/icons/intermediate.svg"
              alt="Icon"
              className="w-40"
            />
          </button>
        </div>

        <ul>
          {greatWalks &&
            greatWalks.map((greatWalk) => (
              <div
                key={greatWalk.id}
                className="bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-4 my-10  mx-6 rounded-[45px]"
              >
                <li className="flex flex-row my-6 justify-center gap-6 text-[#d0f7a2]">
                  <Link to={`/great-walks/${greatWalk.id}`}>
                    <img
                      src={greatWalk.trackImageUrl}
                      alt={greatWalk.name}
                      className="w-[300px] h-[200px]"
                    />
                  </Link>
                  <div className="flex flex-col gap-4">
                    <Link to={`/great-walks/${greatWalk.id}`}>
                      <h1 className="text-[30px] font-bold">
                        {greatWalk.name}
                      </h1>
                    </Link>
                    <div className="text-[15px]">
                      <h2>Location: {greatWalk.location}</h2>{' '}
                      <p>Difficulty: {greatWalk.difficulty}</p>
                      <p>Duration: {greatWalk.duration}</p>{' '}
                      <p>Distance: {greatWalk.distance}</p>
                    </div>
                    <Link to={`/great-walks/${greatWalk.id}`}>
                      <button className="bg-[#070446] text-[#d0f7a2] px-6 py-2 rounded-xl text-[15px] cursor-pointer">
                        Read more
                      </button>
                    </Link>
                  </div>
                </li>
              </div>
            ))}
        </ul>
      </div>
    </>
  )
}
export default GreatWalks
