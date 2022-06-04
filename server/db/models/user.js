'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Activity, {
        as: 'activities'
      });
      this.belongsToMany(models.Category, {
        as: 'categories',
        through: 'users_has_categories'
      });
      this.belongsToMany(models.Activity, {
        as: 'participations',
        through: 'activities_has_participants'
      });
      this.belongsToMany(models.User, {
        as: 'subscriptions',
        through: 'users_follow_users',
        foreignKey: 'follower_id',
        otherKey: 'followed_id',
      });
      this.belongsToMany(models.User, {
        as: 'followers',
        through: 'users_follow_users',
        foreignKey: 'followed_id',
        otherKey: 'follower_id',
      });
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    pseudo: {
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING, 
      unique: true,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(128),
    },
    birthDate: {
      allowNull: false, 
      type: DataTypes.DATE,
    },
    firstName: DataTypes.STRING(100),
    lastName: DataTypes.STRING(100),
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        throw new Error('Do not try to set the `fullName` value!');
      }
    },
    avatar: DataTypes.STRING(128),
    intro: DataTypes.STRING,
    description: DataTypes.TEXT,
    phone: DataTypes.STRING(15),
    zip: DataTypes.INTEGER(10).UNSIGNED,
    city: DataTypes.STRING(100),
    country: DataTypes.STRING(100),
    token: DataTypes.STRING(128),
    emailVerified: {
      allowNull: false,
      defaultValue: false,
      type: DataTypes.BOOLEAN,
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
    modelName: 'User',
    underscored: true,
  });
  return User;
};