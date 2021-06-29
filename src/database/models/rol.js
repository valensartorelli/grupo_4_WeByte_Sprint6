'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
   
    static associate(models) {
      // hasOne - de uno a uno pero con FK
      Rol.hasOne(models.User, {
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