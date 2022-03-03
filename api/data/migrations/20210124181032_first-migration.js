exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
    })
    .createTable('items', tbl => {
        tbl.increments('item_id')
        tbl.string('item_name').notNullable()
        tbl.string('item_price').notNullable()
        tbl.string('category').notNullable()
      })
      .createTable('user_items', (tbl) => {
        tbl.integer('item_id')
        .unsigned()
        .notNullable()
        .references('item_id')
        .inTable('items')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('user_items')
  await knex.schema.dropTableIfExists('items')
  await knex.schema.dropTableIfExists('users')
}
