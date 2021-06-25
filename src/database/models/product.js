'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
   
    static associate(models) {
      // hasMany
      Product.hasMany(models.Image, {
        foreignKey: 'productId',
        as: "images"
      });

      // belongsTo
      Product.belongsTo(models.Brand, {
        foreignKey: 'brandId',
        as: 'Brand'
      });
      // belongsTo
      Product.belongsTo(models.Category);
      // belongsTo
      Product.belongsTo(models.Size);
      // belongsTo
      Product.belongsTo(models.Visibility);
      // belongsTo
      Product.belongsTo(models.Color);

      // hasMany
      Product.hasOne(models.OrderDetail, {
        foreignKey: 'productId',
        as: "orderDetails"
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    stock_min: DataTypes.INTEGER,
    stock_max: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    brandId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    sizeId: DataTypes.INTEGER,
    colorId: DataTypes.INTEGER,
    visibilityId: DataTypes.INTEGER,
    home: DataTypes.INTEGER,
    extended_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};