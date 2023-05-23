const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const db_Config = {
  connectionTimeoutMillis: 300,
  idleTimeoutMillis: 200,
  max: 20,
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(db_Config);

module.exports = pool;

pool.on("connect", (client) => {
  console.log("database is connected");
});

pool.on("remove", (client) => {
  console.log("database connection is removed");
});
