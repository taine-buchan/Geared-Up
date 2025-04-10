
import { UserProfileData } from '../../models/user'

interface Props {
  handleSubmit: (userProfile: UserProfileData) => void
}
export default function ProfileForm(props: Props) {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    if(!username || !name || !email || !phone) return alert('Please fill up all of the form.')
    const form: UserProfileData = {
      username: username,
      name: name,
      email: email,
      phone: phone,
    }

    props.handleSubmit(form)
  }

  return (
    <div className='flex items-center justify-center '>
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-2'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="username" className='text-[20px]'>User Name *</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            className='bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-4 rounded-[45px] text-[20px]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-[20px]'>Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className='bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-4 rounded-[45px] text-[20px]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-[20px]'>Email *</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            className='bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-4 rounded-[45px] text-[20px]'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="phone" className='text-[20px]'>Phone Number *</label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            className='bg-[#1e293b]/60 drop-shadow-[0px_4px_136.6px_rgba(255,255,255,0.1)] px-10 py-4 rounded-[45px] text-[20px]'
          />
        </div>
        <button className='button'type='submit'>Submit</button>
      </form>
    </div>
  )
}
