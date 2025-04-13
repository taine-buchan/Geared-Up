export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('create_users').del()
  await knex('create_users').insert([
    { id: 1, username: 'user.harakeke25', password: '', role: 'user' },
    { id: 2, username: 'admin.harakeke25', password: '', role: 'admin' },
  ])
}
