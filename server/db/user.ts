import connection from './connection.ts'

import { User } from '../../models/user.ts'

export async function upsertProfile(profile: User) {
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
    .onConflict('id') // assumes id is the primary or unique key
    .merge()
}

export async function getUser(id: string) {
  return (await connection('users')
    .where('id', id)
    .first(
      'id',
      'username',
      'name',
      'email',
      'phone',
      'my_equipment as myEquipment',
    )) as User
}
