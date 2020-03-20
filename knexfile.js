// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'travel',
      user:     'ken',
      password: 'natalie1'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
   },
   production: {
      client: 'postgresql',
      connection: process.env.DATABASE_URL
    }, 
   test: {
     client: 'postgresql',
     connection: {
      database: 'travel',
      user:     'ken',
      password: 'natalie1'
     }
    }
};
