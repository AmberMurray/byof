'use strict'

exports.up = (knex) => {
  return knex.schema.createTable('trucks', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('food').notNullable()
    table.integer('safety')
    table.string('safety_url')
    table.string('truck_pic').notNullable()
    table.string('business_id').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('trucks')
}
