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
      {' '}
      <div>
        {' '}
        <h1>Great Walks</h1>{' '}
        <p>
          {' '}
          Filter By Difficulty:{' '}
          <button onClick={intermediateGreatWalks}>Intermediate</button>{' '}
          <button onClick={easyGreatWalks}>Easy</button>{' '}
        </p>{' '}
        <ul>
          {' '}
          {greatWalks &&
            greatWalks.map((greatWalk) => (
              <div key={greatWalk.id}>
                {' '}
                <li>
                  {' '}
                  <Link to={`/great-walks/${greatWalk.id}`}>
                    {' '}
                    <img
                      src={greatWalk.trackImageUrl}
                      alt={greatWalk.name}
                    />{' '}
                  </Link>{' '}
                  <Link to={`/great-walks/${greatWalk.id}`}>
                    {' '}
                    <h1>{greatWalk.name}</h1>{' '}
                  </Link>{' '}
                  <h2>{greatWalk.location}</h2> <p>{greatWalk.difficulty}</p>{' '}
                  <p>{greatWalk.duration}</p> <p>{greatWalk.distance}</p>{' '}
                  <Link to={`/great-walks/${greatWalk.id}`}>
                    {' '}
                    <button>Read more</button>{' '}
                  </Link>{' '}
                </li>{' '}
              </div>
            ))}{' '}
        </ul>{' '}
      </div>{' '}
    </>
  )
}
export default GreatWalks
