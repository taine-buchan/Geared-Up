export async function seed(knex) {
  await knex('user_walks').del()
  await knex('great_walks').del()
  await knex('users').del()
}
