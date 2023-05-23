const { Pool } = require ('pg');

const URI = 'postgres://kedepbwv:hGyfZ3I_cssWYabPA1wB5GHSLONI4RJ6@drona.db.elephantsql.com/kedepbwv';

const pool = new Pool({
  connectionString: URI
});

// const createSchemaQuery = 
//   `CREATE TABLE IF NOT EXISTS reservation (
//     id SERIAL PRIMARY KEY,
//     content TEXT,
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//   )`;

const query = (text, params, callback) => {
  console.log('executed query', text);
  return pool.query(text, params, callback);
};


module.exports = {query};
