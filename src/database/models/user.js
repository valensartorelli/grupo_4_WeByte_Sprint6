'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      
      // belongsTo
      User.belongsTo(models.Rol);

      // hasOne - de uno a uno pero con FK
      User.hasOne(models.Address, {
        foreignKey: 'userId',
        as: "addresses"
      });

     // hasMany
      User.hasMany(models.Order, {
        foreignKey: 'userId',
        as: "orders"
      });
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};