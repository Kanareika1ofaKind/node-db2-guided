// Update with your config settings.

/**
* @type { Object.<string, import("knex").Knex.Config> }
*/
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }

  },

  staging: {

  },

  production: {

  }

};