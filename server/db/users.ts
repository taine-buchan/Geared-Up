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
      'profile_avatar as profileAvatar'
    )) as Profile //create profile model
}

export async function upsertProfile(profile: Profile) {
  await db('users').insert({
    auth0_id: profile.auth0Id,
    username: profile.username,
    name: profile.name,
    email: profile.email,
    profile_avatar: profile.profileAvatar,
  })
}
