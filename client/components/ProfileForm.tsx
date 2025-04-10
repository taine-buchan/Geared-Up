import { UserProfileData } from '../../models/user'

interface Props {
  userProfile?: UserProfileData
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

    const form: UserProfileData = {
      username: username,
      name: name,
      email: email,
      phone: phone,
    }

    props.handleSubmit(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">User Name *</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            defaultValue={props.userProfile?.username}
          />
        </div>
        <div>
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={props.userProfile?.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email *</label>
          <input
            type="text"
            name="email"
            id="email"
            required
            defaultValue={props.userProfile?.email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            required
            defaultValue={props.userProfile?.phone}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
