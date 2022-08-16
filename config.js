const { Pool } = require('pg');
const config = {
  db: {
    host: 'localhost',
    port:  '5432',
    password:  '',
    database:  'portuguese',
  },
  listPerPage: 10,
};
const pool = new Pool(config);
pool.on('error', function (err, client) {
    console.error('idle client error', err.message, err.stack);
});

module.exports = config;

