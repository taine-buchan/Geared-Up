import db from './connection'

import { Profile } from '../../models/Profile.ts' //create profile model

export async function getUser(auth0Id: string) {
  return (await db('users')
    .where('auth_id', auth0Id)
    .first(
      'auth0_id as auth0id',
      'username',
      'name',
      'email',
      'phone',
      'my_equipment as myEquipment',
    )) as Profile //create profile model
}

export async function upsertProfile(profile: Profile) {
  await db('users').insert({
    auth0_id: profile.auth0Id,
    username: profile.username,
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    my_equipment: profile.myEquipment,
  })
}
