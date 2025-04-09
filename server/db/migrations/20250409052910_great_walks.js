export async function up(knex) {
  await knex.schema.createTable('great_walks', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('difficulty')
    table.string('elevation')
    table.string('duration')
    table.string('distance')
    table.string('location')
    table.string('description')
    table.string('seasonal')
    table.string('track_image_url')
    table.string('doc_link')
    table.string('required_equipment')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('great_walks')
}
