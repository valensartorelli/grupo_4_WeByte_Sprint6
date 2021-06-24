'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    
    static associate(models) {
      // hasMany
      Brand.hasMany(models.Product, {
        foreignKey: 'brandId',
        as: "products"
      });
    }
  };
  Brand.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brand',
  });
  return Brand;
};