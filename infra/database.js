
const Promise = require('bluebird');
const initOptions = {
    promiseLib: Promise
};

const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'blog'

});

// Preparing the connection details:
const cn = 'postgres://username:password@host:port/database';

module.exports = db;
