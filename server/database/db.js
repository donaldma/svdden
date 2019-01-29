'use strict'
const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)

const addActivity = async (ipAddress) => {
  return knex('activity')
    .returning('*')
    .insert({ ipAddress })
}

module.exports = {
  knex,
  addActivity
}
