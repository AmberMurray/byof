'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('schedules', table => {
    table.increments()
    table.integer('bar_id').notNullable().references('id').inTable('bars').onDelete('CASCADE')    table.integer('truck_id').notNullable().references('id').inTable('trucks').onDelete('CASCADE')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('schedules')
}
