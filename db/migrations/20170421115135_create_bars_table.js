'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('bars', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('address').notNullable()
    table.string('city')
    table.string('state')
    table.integer('zip')
    table.string('bar_pic').notNullable()
    table.boolean('beer').notNullable()
    table.boolean('liquor').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('bars')
}
