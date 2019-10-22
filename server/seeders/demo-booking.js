'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('bookings', [
        {
            booking_id: 1,
            check_in: new Date(Date.now()),
            check_out: new Date(Date.now()+(1000*60*60*48)),
            fk_guest_id: 1234 ,
            guest_name: 'hyunsoo' ,
            host_id: 1121,
            host_name: 'Jeongsoo Shin',
            fk_room_id: 2933,
            room_name: 'Art House (Room 01)- 외국인전용',
            guest_total: 4,
            guest_adult: 1,
            guest_children: 1,
            guest_infant: 1,
            price_total: 90000,
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
    return queryInterface.bulkDelete('bookings', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
