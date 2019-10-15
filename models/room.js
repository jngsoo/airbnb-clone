'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    // host_id: DataTypes.STRING,
    host_name: DataTypes.STRING,
    city: DataTypes.STRING,
    town: DataTypes.STRING,
    room_type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    number_of_reviews: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
  };
  return Room;
};