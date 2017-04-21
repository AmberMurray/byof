'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('user_name').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
