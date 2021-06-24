'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    
    static associate(models) {
      // belongsTo
      OrderDetail.belongsTo(models.Product);

      // belongsTo
      OrderDetail.belongsTo(models.Order);
    }
  };
  OrderDetail.init({
    quantity: DataTypes.DECIMAL,
    subtotal: DataTypes.DECIMAL,
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return OrderDetail;
};