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
       Order.belongsTo(models.Payment);
       // belongsTo
       Order.belongsTo(models.User);
 
       // hasOne
       Order.hasOne(models.Shipping, {
         foreignKey: 'orderId',
         as: "shippings"
       });
      // hasOne  
       Order.hasOne(models.Shipping, {
         foreignKey: 'orderPaymentId',
         as: "orderPayments"
       });
       // hasMany
       Order.hasMany(models.OrderDetail, {
         foreignKey: 'orderId',
         as: "orderDetails"
       });
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