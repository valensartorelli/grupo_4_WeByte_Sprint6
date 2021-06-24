'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Size extends Model {
   
    static associate(models) {
      // hasMany
      Size.hasMany(models.Product, {
        foreignKey: 'sizeId',
        as: "products"
      });
    }
  };
  Size.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Size',
  });
  return Size;
};