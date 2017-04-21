'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('favorites', table => {
    table.increments()
    table.integer('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE')
    table.integer('truck_id').notNullable().references('id').inTable('trucks').onDelete('CASCADE')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('favorites')
}
