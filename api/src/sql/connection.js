const knexfile = require('../../knexfile');
const knex = require('knex');

module.exports = knex(knexfile.development);