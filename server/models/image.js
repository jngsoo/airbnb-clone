'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('image', {
    image_id: {
        type: DataTypes.BIGINT(11),
        primaryKey: true
    },
    fk_room_id: DataTypes.BIGINT(11),
    file_name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    underscored: true
  });
  Image.associate = function(models) {
    // associations can be defined here
  };
  Image.getAllTheRoomImages = async function(room_id) {
    return await Image.findAll({where: {fk_roomt_id: room_id}})
  }
  return Image;
}; //fake