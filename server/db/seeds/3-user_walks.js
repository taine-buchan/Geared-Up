export async function seed(knex) {
  await knex('user_walks').insert([
    {
      user_id: 'auth0|6478f3fd75374ee3d7bc4d94',
      great_walk_id: 1,
      is_complete: false,
      is_planned: true,
    },
    {
      user_id: 'auth0|648fd1c873375442becf2c60',
      great_walk_id: 2,
      is_complete: true,
      is_planned: false,
    },
  ])
}
