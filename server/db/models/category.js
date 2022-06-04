'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Activity, {
        as: 'activities'
      });
      this.belongsToMany(models.User, {
        as: 'users',
        through: 'users_has_categories'
      });
    }
  }
  Category.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    createdAt: {
      allowNull: false,
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
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