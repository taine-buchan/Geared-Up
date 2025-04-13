export function up(knex) {
  return knex.schema.table('users', (table) => {
    table.string('password').defaultTo('')
    table.string('role').defaultTo('user') // 'user' or 'admin'
  })
}

export function down(knex) {
  return (
    knex.schema.table('users'),
    (table) => {
      table.dropColumn('password')
      table.dropColumn('role')
    }
  )
}
