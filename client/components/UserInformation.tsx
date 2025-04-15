import { Link } from "react-router-dom";

export default function UserInformation() {
  //active components

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-10'>
      <Link to='/user/:sub'><button className="button text-[40px] w-[500px]">Edit My Profile</button></Link>
      <Link to='/user/:sub'><button className="button text-[40px] w-[500px]">My Great Walk List</button></Link>
      <Link to='/user/:sub'><button className="button text-[40px] w-[500px]">My Gear List</button></Link>
    </div>
  )
}
