const knex = require('knex')

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const db = require('../../data/dbconfig.js')

function getAll() {
  return db('fruits');
}

function getById(id) {
  return db('fruits').where('fruit_id', id).first();
}

async function create(fruit) {
  const [id] = await db('fruits').insert(fruit);
  return getById(id);
}

async function remove(id) {
  const fruit = await getById(id);
  if (!fruit) {
    throw new Error('Fruit not found');
  }
  await db('fruits').where('fruit_id', id).del();
  return fruit;
}

module.exports = {
  getAll,
  getById,
  create,
  remove
};
