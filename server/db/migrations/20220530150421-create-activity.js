'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: Sequelize.STRING(128),
      description: Sequelize.TEXT,
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      time: Sequelize.TIME,
      duration: Sequelize.TIME,
      latitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(8, 6),
      },
      longitude: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 6),
      },
      country: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      zip: {
        allowNull: false,
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      street: Sequelize.STRING(100),
      street_number: Sequelize.STRING(10),
      max_participants: Sequelize.INTEGER(7).UNSIGNED,
      registred_participants: Sequelize.INTEGER(7).UNSIGNED,
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'Categories', 
          key: 'id',
        },
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'Users', 
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('activities');
  }
};