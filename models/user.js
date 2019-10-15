'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING,
    createdAt: {
        type: DataTypes.STRING,
        allowNull: true, 
        defaultValue: new Date().toDateString() 
    }
  }, { // options???
    onDelete: 'cascade',
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
    
  };
  return User;
};