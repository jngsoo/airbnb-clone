'use strict';
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('booking', {
        booking_id: {
            type: DataTypes.BIGINT(11),
            primaryKey: true
        },
        check_in : DataTypes.DATEONLY,
        check_out: DataTypes.DATEONLY,
        fk_guest_id: DataTypes.BIGINT(11),
        guest_name: DataTypes.STRING,
        host_id: DataTypes.BIGINT(11),
        host_name: DataTypes.STRING,
        fk_room_id: DataTypes.BIGINT(11),
        room_name: DataTypes.STRING,
        guest_total: DataTypes.INTEGER,
        guest_adult: DataTypes.INTEGER,
        guest_children: DataTypes.INTEGER,
        guest_infant: DataTypes.INTEGER,
        price_total: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATE(3),
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
        },
    }, {
        timestamps: false,
        underscored: true
    });
    Booking.associate = function(models) {
        // associations can be defined here
    };
    Booking.getAllTheRoomBookings = async function(room_id) {
        return await Booking.findAll({where: {fk_room_id: room_id}})
    };
    return Booking;
};

