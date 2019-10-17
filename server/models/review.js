'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('review', {
    review_id: {
        type:DataTypes.BIGINT(11),
        primaryKey: true
    },
    fk_room_id: DataTypes.BIGINT(11),
    guest_id: DataTypes.BIGINT(11),
    guest_name: DataTypes.STRING,
    host_name: DataTypes.STRING,
    comment: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    }
  }, {
    underscored: true,
    timestamps: false
  });
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};