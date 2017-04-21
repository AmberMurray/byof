exports.seed = function (knex) {
  return knex('schedules').del()
  .then(() => {
    return knex('comments').del()
  }).then(() => {
    return knex('favorites').del()
  }).then(() => {
    return knex('trucks').del()
  }).then(() => {
    return knex('bars').del()
  }).then(() => {
    return knex('users').del()
  })
}
