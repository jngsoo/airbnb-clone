'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
            {
                user_id: 1234,
                name: 'hyunsoo'
            },
            {
                user_id: 2912,
                name: 'super',
                type: 'super_host'
            },
            {
                user_id: 1121,
                name: 'Jeongsoo Shin',
                type: 'host'
            }

        ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
