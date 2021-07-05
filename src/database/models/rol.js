'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
   
    static associate(models) {
      // hasMany
      Rol.hasMany(models.User, {
        foreignKey: 'rolId',
        as: "users"
      });
    }
  };
  Rol.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
  });
  return Rol;
};