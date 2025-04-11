export async function seed(knex) {
  await knex('comments').insert([
    {
      user_id: 'auth0|648fd1c873375442becf2c60',
      great_walk_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      comments: 'The great walks!',
    },
    {
      user_id: 'auth0|648fd1c873375442becf2c60',
      great_walk_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
      comments: 'hello!',
    },
  
  ])
}
