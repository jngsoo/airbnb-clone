'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('image', {
    image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fk_room_id: DataTypes.INTEGER,
    file_name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    underscored: true
  });
  Image.associate = function(models) {
    // associations can be defined here
  };
  return Image;
};