'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avatar extends Model {
   
    static associate(models) {
      // hasOne - de uno a uno pero con FK
      Avatar.hasOne(models.User, {
        foreignKey: 'avatarId',
        as: "users"
      });
    }
  };
  Avatar.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Avatar',
  });
  return Avatar;
};