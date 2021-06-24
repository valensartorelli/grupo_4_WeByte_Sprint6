'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
   
    static associate(models) {
      // hasOne - de uno a uno pero con FK
      Status.hasOne(models.Order, {
        foreignKey: 'statusId',
        as: "orders"
      });
    }
  };
  Status.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
  });
  return Status;
};