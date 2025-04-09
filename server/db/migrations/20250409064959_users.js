export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username')
    table.string('name')
    table.string('email')
    table.string('phone')
    table.string('my_equipment')
    table.string('result')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
