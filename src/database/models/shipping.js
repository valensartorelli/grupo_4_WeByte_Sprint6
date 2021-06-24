'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    
    static associate(models) {
      // belongsTo
      Shipping.belongsTo(models.Order);
    }
  };
  Shipping.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    apartment: DataTypes.STRING,
    cp: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    orderPaymentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};