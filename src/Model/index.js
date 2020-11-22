const knex = require('knex');
const bookshelf = require('bookshelf');
const { config } = require('dotenv');
const knex_configuration = require('../../knexfile');

config();

const environment = process.env.NODE_ENV || 'production';
const configuration = knex(knex_configuration[environment]);


module.exports = bookshelf(configuration);