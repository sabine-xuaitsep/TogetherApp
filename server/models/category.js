'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Activity);
      this.belongsToMany(models.User, {
        through: 'Users_Has_Categories'
      });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    createdAt: {
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
    },
    updatedAt: {
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Category',
    underscored: true,
  });
  return Category;
};