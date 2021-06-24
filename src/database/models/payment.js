'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    
    static associate(models) {
      // hasOne - de uno a uno pero con FK
      Payment.hasOne(models.Order, {
        foreignKey: 'paymentId',
        as: "orders"
      });
    }
  };
  Payment.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};