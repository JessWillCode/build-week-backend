/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_name: 'Black & Gold Minnie Ears', item_price: '$20', category: 'Ears'},
        {item_name: 'Black Classic Mickey Ears', item_price: '$20', category: 'Ears'},
        {item_name: 'Mickey Backpack', item_price: '$50', category: 'Backpack'},
        {item_name: ' Mickey/Minnie Earrings', item_price: '$5', category: 'Jewelry'}
      ]);
    });
};
