const { Pool } = require ('pg');

const URI = 'postgres://......';

const pool = new Pool({
  connectionString: URI
});

const createSchemaQuery = 
  `CREATE TABLE IF NOT EXISTS item (
    id SERIAL PRIMARY KEY,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`;

const query = (text, params, callback) => {
  console.log('executed query', text);
  return pool.query(text, params, callback);
};


module.exports = {query};
