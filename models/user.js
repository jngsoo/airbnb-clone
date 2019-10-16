'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    user_id: {
        type:DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    createdAt: {
        type: DataTypes.STRING,
        allowNull: true, 
        defaultValue: DataTypes.timestamps
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