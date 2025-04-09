export async function up(knex) {
  await knex.schema.createTable('user_walks', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('great_walk_id').references('great_walks.id')
    table.boolean('is_complete')
    table.boolean('is_planned')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('user_walks')
}
