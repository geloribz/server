//connecting NodeJS with PostgreSQL
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pern_auth",
  password: "postgresPW135",
  port: 5433,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
