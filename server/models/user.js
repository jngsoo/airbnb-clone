'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    user_id: {
        type:DataTypes.BIGINT(11),
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    type: {
        type: DataTypes.STRING,
        defaultValue: 'guest'
    },
    createdAt: {
        type: DataTypes.DATE(3),
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)')
    }
  }, { // options???
    underscored: true,
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
    
  };
  return User;
};