export async function up(knex) {
  await knex.schema.createTable('comments', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('users.id')
    table.integer('great_walk_id').references('great_walks.id')
    table.timestamps()
    table.string('comments')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('comments')
}
