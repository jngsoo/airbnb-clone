'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rooms', [
        {
            room_id: 2933,
            thumbnail_img: "https://a0.muscache.com/im/pictures/4d358b28-41ad-465a-aaa6-cab59a62a6d3.jpg?aki_policy=large",
            fk_host_id: 1121,
            name: 'Art House (Room 01)- 외국인전용',
            description: '설명설명',
            host_name: 'Jeongsoo Shin',
            city: '서울',
            town: '종로',
            room_type: 'whole',
            price: 35000,
            number_of_reviews: 0,
            rate: 0
        },
        {
            room_id: 2934,
            thumbnail_img: "https://a0.muscache.com/im/pictures/65974815/f3da8745_original.jpg?aki_policy=large",
            fk_host_id: 2912,
            name: '★Directly Connected to Station ☆ ',
            description: '설명설명',
            host_name: 'super',
            city: '서울',
            town: '종로',
            room_type: 'whole',
            price: 25000,
            number_of_reviews: 0,
            rate: 0
        },
        {
            room_id: 2935,
            thumbnail_img: "https://a0.muscache.com/im/pictures/8fdcf5c3-63de-4968-9813-43d67b9c8058.jpg?aki_policy=large",
            fk_host_id: 1121,
            name: 'Banana homes - Single room(private bath) ',
            description: '설명설명',
            host_name: 'Jeongsoo Shin',
            city: '서울',
            town: '동대문',
            room_type: 'whole',
            price: 25000,
            number_of_reviews: 0,
            rate: 0
        },
        {
            room_id: 2936,
            thumbnail_img: "https://a0.muscache.com/im/pictures/80a2eedb-6ba9-4e7b-bd9e-6cf6aa59c75a.jpg?aki_policy=large",
            fk_host_id: 2912,
            name: 'Jeju cozy house',
            description: '설명설명',
            host_name: 'super',
            city: '제주',
            town: '애월',
            room_type: 'whole',
            price: 52000,
            number_of_reviews: 0,
            rate: 0
        },
        {
            room_id: 2937,
            thumbnail_img: "https://a0.muscache.com/im/pictures/17180c87-d74a-439b-833f-8f40d5278759.jpg?aki_policy=large",
            fk_host_id: 1121,
            name: 'Busan nice house',
            description: '설명설명',
            host_name: 'Jeongsoo Shin',
            city: '부산',
            town: '서면',
            room_type: 'whole',
            price: 42000,
            number_of_reviews: 0,
            rate: 0
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
    return queryInterface.bulkDelete('rooms', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
