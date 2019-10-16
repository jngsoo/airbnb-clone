'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('booking', {
    booking_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    check_in : DataTypes.STRING,
    check_out: DataTypes.STRING,
    fk_guest_id: DataTypes.INTEGER,
    guest_name: DataTypes.STRING,
    host_id: DataTypes.INTEGER,
    host_name: DataTypes.STRING,
    fk_room_id: DataTypes.INTEGER,
    room_name: DataTypes.STRING,
    guest_total: DataTypes.INTEGER,
    guest_adult: DataTypes.INTEGER,
    guest_children: DataTypes.INTEGER,
    guest_infant: DataTypes.INTEGER,
    price_total: DataTypes.INTEGER
  }, {
    underscored: true
  });
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};