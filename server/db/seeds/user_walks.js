/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      user_id: 1,
      great_walk_id: 1,
      completed: false,
      planned: false,
    },
    {
      user_id: 2,
      great_walk_id: 2,
      completed: false,
      planned: false,
    },
    {
      user_id: 3,
      great_walk_id: 3,
      completed: false,
      planned: false,
    },
    {
      user_id: 4,
      great_walk_id: 4,
      completed: false,
      planned: false,
    },
    {
      user_id: 5,
      great_walk_id: 5,
      completed: false,
      planned: false,
    },
    {
      user_id: 6,
      great_walk_id: 6,
      completed: false,
      planned: false,
    },
    {
      user_id: 7,
      great_walk_id: 7,
      completed: false,
      planned: false,
    },
    {
      user_id: 8,
      great_walk_id: 8,
      completed: false,
      planned: false,
    },
    {
      user_id: 9,
      great_walk_id: 9,
      completed: false,
      planned: false,
    },
    {
      user_id: 10,
      great_walk_id: 10,
      completed: false,
      planned: false,
    },
  ])
}
