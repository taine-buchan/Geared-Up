import { User } from '../../models/user'
import connection from './connection'

export async function upsertProfile(profile: User) {
  console.log('equipment db', JSON.stringify(profile.myEquipment))
  console.log('username db', JSON.stringify(profile.myEquipment))
  await connection('users')
    .insert({
      id: profile.id,
      username: profile.username,
      name: profile.name,
      email: profile.email,
      phone: profile.phone,
      result: profile.result,
      my_equipment: JSON.stringify(profile.myEquipment),
    })
    .onConflict('id') // assumes `id` is the primary or unique key
    .merge()
}
