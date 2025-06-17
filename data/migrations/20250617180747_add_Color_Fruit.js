exports.up = async function (knex) {
  await knex.schema.table('fruits', table => {
    table.string('color', 128).defaultTo('green')
  })
};

exports.down = async function (knex) {
  await knex.schema.table('fruits', table => {
    table.dropColumn('color')
  })
};
