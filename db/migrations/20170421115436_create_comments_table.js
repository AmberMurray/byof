'use strict'
​
exports.up = (knex) => {
 return knex.schema.createTable('comments', table => {
  table.increments()
  table.integer('user_id').notNullable().references('id').inTable('users')  table.integer('truck_id').notNullable().references('id').inTable('trucks')
  table.text('review').notNullable()
 })
}
​
exports.down = (knex) => {
 return knex.schema.dropTable('comments')
}
