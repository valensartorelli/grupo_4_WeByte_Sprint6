'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visibility extends Model {
   
    static associate(models) {
       // hasMany
       Visibility.hasMany(models.Product, {
        foreignKey: 'visibilityId',
        as: "products"
      });
    }
  };
  Visibility.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Visibility',
  });
  return Visibility;
};