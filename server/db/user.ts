import db from './connection.ts'

import { User } from '../../models/user.ts'

export async function getUser(auth0Id: string) {
  return (await db('users')
    .where('id', auth0Id)
    .first(
      'id',
      'username',
      'name',
      'email',
      'phone',
      'my_equipment as myEquipment',
    )) as User //create profile model
}
