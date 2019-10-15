'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    room_id: DataTypes.STRING,
    guest_id: DataTypes.STRING,
    guest_name: DataTypes.STRING,
    host_id: DataTypes.STRING,
    host_name: DataTypes.STRING,
    comment: DataTypes.STRING,
    rate: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};