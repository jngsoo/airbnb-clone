'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    review_id: {
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    fk_room_id: DataTypes.INTEGER,
    guest_id: DataTypes.INTEGER,
    guest_name: DataTypes.STRING,
    host_name: DataTypes.STRING,
    comment: DataTypes.STRING,
    rate: DataTypes.INTEGER
  }, {
    underscored: true
  });
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};