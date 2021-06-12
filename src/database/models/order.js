'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo
      Order.belongsTo(models.Status);
      // belongsTo
      Order.belongsTo(models.Shipping);
      // belongsTo
      Order.belongsTo(models.Payment);

      // hasMany
      Order.hasMany(models.User, {
        foreignKey: 'orderId',
        as: "users"
      })
      // belongsTo
      Order.belongsTo(models.Orderdetail);
    }
  };
  Order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    total: DataTypes.DECIMAL,
    paymentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    userAdressId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};