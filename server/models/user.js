'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Activity);
      this.belongsToMany(models.Category, {
        through: 'Users_Has_Categories'
      });
      this.belongsToMany(models.Activity, {
        as: 'Participations',
        through: 'Activities_Has_Participants'
      });
      this.belongsToMany(models.User, {
        as: 'Subscriptions',
        through: 'Users_Follow_Users',
        foreignKey: 'follower_id',
        otherKey: 'followed_id',
      });
      this.belongsToMany(models.User, {
        as: 'Followers',
        through: 'Users_Follow_Users',
        foreignKey: 'followed_id',
        otherKey: 'follower_id',
      });
    }
  }
  User.init({
    pseudo: DataTypes.STRING,
    email: {
      type: DataTypes.STRING, 
      unique: true,
    },
    password: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!');
      }
    },
    avatar: DataTypes.STRING,
    intro: DataTypes.STRING,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING, 
    zip: DataTypes.INTEGER,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    token: DataTypes.STRING,
    emailVerified: {
      defaultValue: false,
      type: DataTypes.BOOLEAN,
    },
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
    modelName: 'User',
    underscored: true,
  });
  return User;
};