'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      pseudo: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING, 
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(128),
      },
      birth_date: {
        allowNull: false, 
        type: Sequelize.DATE,
      },
      first_name: {
        type: Sequelize.STRING(100),
      },
      last_name: {
        type: Sequelize.STRING(100),
      },
      avatar: Sequelize.STRING(128),
      intro: Sequelize.STRING,
      description: Sequelize.TEXT,
      phone: Sequelize.STRING(15),
      zip: Sequelize.INTEGER(10).UNSIGNED,
      city: Sequelize.STRING(100),
      country: Sequelize.STRING(100),
      token: Sequelize.STRING(128),
      email_verified: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};