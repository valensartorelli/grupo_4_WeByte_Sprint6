'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visibility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // belongsTo
      Visibility.belongsTo(models.Product);
    }
  };
  Visibility.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Visibility',
  });
  return Visibility;
};