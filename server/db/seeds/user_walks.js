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
      is_complete: false,
    },
    {
      user_id: 2,
      great_walk_id: 2,
      is_complete: false,
    },
    {
      user_id: 3,
      great_walk_id: 3,
      is_complete: false,
    },
    {
      user_id: 4,
      great_walk_id: 4,

      is_complete: false,
    },
    {
      user_id: 5,
      great_walk_id: 5,
      is_complete: false,
    },
    {
      user_id: 6,
      great_walk_id: 6,
      is_complete: false,
    },
    {
      user_id: 7,
      great_walk_id: 7,
      is_complete: false,
    },
    {
      user_id: 8,
      great_walk_id: 8,
      is_complete: false,
    },
    {
      user_id: 9,
      great_walk_id: 9,
      is_complete: false,
    },
    {
      user_id: 10,
      great_walk_id: 10,
      is_complete: false,
    },
  ])
}
