'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    check_in : DataTypes.STRING,
    check_out: DataTypes.STRING,
    guest_id: DataTypes.STRING,
    guest_name: DataTypes.STRING,
    host_id: DataTypes.STRING,
    host_name: DataTypes.STRING,
    guest_total: DataTypes.INTEGER,
    guest_adult: DataTypes.INTEGER,
    guest_children: DataTypes.INTEGER,
    guest_infant: DataTypes.INTEGER,
    price_total: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};