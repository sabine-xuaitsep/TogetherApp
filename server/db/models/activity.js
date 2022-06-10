'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        as: 'category',
      });
      this.belongsTo(models.User, {
        as: 'user',
      });
      this.belongsToMany(models.User, {
        as: 'participants',
        through: 'activities_has_participants',
      });
    }
  }
  Activity.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    image: DataTypes.STRING(128),
    description: DataTypes.TEXT,
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY,
    },
    time: DataTypes.TIME,
    duration: DataTypes.TIME,
    latitude: {
      allowNull: false,
      type: DataTypes.DECIMAL(8, 6),
    },
    longitude: {
      allowNull: false,
      type: DataTypes.DECIMAL(9, 6),
    },
    distance: {
      type: DataTypes.VIRTUAL,
      get() {
        return Math.round(this.getDataValue('distance') / 1000);
      },
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    zip: {
      allowNull: false,
      type: DataTypes.INTEGER(10).UNSIGNED,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    street: DataTypes.STRING(100),
    streetNumber: DataTypes.STRING(10),
    maxParticipants: DataTypes.INTEGER(7).UNSIGNED,
    registeredParticipants: DataTypes.INTEGER(7).UNSIGNED,
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    createdAt: {
      allowNull: false,
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
      get() {
        return this.getDataValue('createdAt').toLocaleString('fr-BE');
      },
    },
    updatedAt: {
      allowNull: false,
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
      get() {
        return this.getDataValue('updatedAt').toLocaleString('fr-BE');
      },
    },
  }, {
    sequelize,
    modelName: 'Activity',
    underscored: true,
  });
  return Activity;
};