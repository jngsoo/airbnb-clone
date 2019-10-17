'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('room', {
    room_id: {
        type:DataTypes.BIGINT(11),
        primaryKey: true
    },
    fk_host_id: DataTypes.BIGINT(11),
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    host_name: DataTypes.STRING,
    city: DataTypes.STRING,
    town: DataTypes.STRING,
    room_type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    number_of_reviews: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {
    underscored: true
  });
  Room.associate = function(models) {
    // associations can be defined here
  };
  return Room;
};