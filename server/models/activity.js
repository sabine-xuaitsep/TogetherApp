'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category);
      this.belongsTo(models.User);
      this.belongsToMany(models.User, {
        as: 'Participants',
        through: 'Activities_Has_Participants'
      });
    }
  }
  Activity.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    date:DataTypes.DATEONLY,
    time: DataTypes.TIME,
    duration: DataTypes.TIME,
    latitude: DataTypes.DECIMAL,
    longitude: DataTypes.DECIMAL,
    country: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    streetNumber: DataTypes.STRING,
    maxParticipants: DataTypes.INTEGER,
    registredParticipants: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
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
    modelName: 'Activity',
    underscored: true,
  });
  return Activity;
};