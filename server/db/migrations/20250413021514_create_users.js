export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('username').unique().notNullable()
    table.string('password').notNullable()
    table.string('role').defaultTo('user') // 'user' or 'admin'
  })
}

export function down(knex) {
  return knex.schema.dropTable('users')
}
