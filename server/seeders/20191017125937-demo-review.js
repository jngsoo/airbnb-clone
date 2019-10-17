'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('reviews', [
        {
            review_id: 1,
            fk_room_id: 2933,
            guest_id: 1234,
            guest_name: 'hyunsoo',
            host_name: 'jngsoo',
            comment: 'good',
            rate: 5
        },
        {
            review_id: 2,
            fk_room_id: 2933,
            guest_id: 1234,
            guest_name: 'anonymous',
            host_name: 'jngsoo',
            comment: 'bad',
            rate: 5
        }

    ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
