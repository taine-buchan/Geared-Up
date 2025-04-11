export async function seed(knex) {
  await knex('comments').del()
  await knex('user_walks').del()
  await knex('great_walks').del()
  await knex('users').del()
}
