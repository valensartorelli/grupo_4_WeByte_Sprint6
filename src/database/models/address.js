'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
   
    static associate(models) {
      // hasOne - de uno a uno pero con FK
      Address.hasOne(models.User, {
        foreignKey: 'addressId',
        as: "users"
      });
    }
  };
  Address.init({
    street: DataTypes.STRING,
    number: DataTypes.INTEGER,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    apartment: DataTypes.STRING,
    cp: DataTypes.STRING,
    phone_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};