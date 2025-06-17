/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> } 
*/
exports.seed = async function (knex) {

  await knex('fruits').truncate()
  await knex('fruits').insert([
    { name: 'dragon fruit', avgWeightOz: 16.7, delicious: 1 },
    { name: 'durian', avgWeightOz: 52.9, delicious: 0 },
    { name: 'kiwi', avgWeightOz: 2.1, delicious: 1 },
    { name: 'mango', avgWeightOz: 7.0, delicious: 1 },
    { name: 'apricot', avgWeightOz: 16.0, delicious: 1 },
    { name: 'pineapple', avgWeightOz: 36.0, delicious: 1 },
    { name: 'pomegranate', avgWeightOz: 12.0, delicious: 1 },
    { name: 'rambutan', avgWeightOz: 3.5, delicious: 1 },
    { name: 'star fruit', avgWeightOz: 4.0, delicious: 1 }
  ]);
};