'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo
      Product.belongsTo(models.Image);

      // hasMany
      Product.hasMany(models.Brand, {
        foreignKey: 'productId',
        as: "brands"
      });
      // hasMany
      Product.hasMany(models.Category, {
        foreignKey: 'productId',
        as: "categories"
      });
      // hasMany
      Product.hasMany(models.Size, {
        foreignKey: 'productId',
        as: "sizes"
      });
      // hasMany
      Product.hasMany(models.Visibility, {
        foreignKey: 'productId',
        as: "visibilities"
      });
      // hasMany
      Product.hasMany(models.Color, {
        foreignKey: 'productId',
        as: "colors"
      });
      
      // belongsTo
      Product.belongsTo(models.orderDetail);
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