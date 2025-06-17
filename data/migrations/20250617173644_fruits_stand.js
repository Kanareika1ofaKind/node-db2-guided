exports.up = async function (knex) {
  await knex.schema.createTable('fruits', table => {
    table.increments('fruit_id').unique();
    table.text('name').notNullable().unique();
    table.float('avgweightoz').notNullable();
    table.boolean('delicious')
  })
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('fruits')
};