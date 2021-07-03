const environment = process.env.ENVIRONMENT || 'test';
const config = require('../knexfile')[environment];

module.exports = require('knex')(config);