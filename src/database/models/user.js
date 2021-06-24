'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
      // belongsTo
      User.belongsTo(models.Address);
      // belongsTo
      User.belongsTo(models.Avatar);

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
    adressId: DataTypes.INTEGER,
    avatarId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};