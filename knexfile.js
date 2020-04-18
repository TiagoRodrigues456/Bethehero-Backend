require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',

    connection: {
      database: 'postgres',
      user:     'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: './src/database/migrations',
    },
    // seeds: { directory: './src/database/seeds' },
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './src/database/migrations',
    },
    seeds: { directory: './src/database/seeds' },
  }
};

// knex migrate:latest --- comando criar table