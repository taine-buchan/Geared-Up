export async function up(knex) {
  await knex.schema.createTable('user_walks', (table) => {
    table.increments('id').primary()
    table.number('user_id').references('users.id').notNullable()
    table.number('great_walk_id').references('great_walks.id')
    table.boolean('is_complete')
    table.boolean('is_planned')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('user_walks')
}
