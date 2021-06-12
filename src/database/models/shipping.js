'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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