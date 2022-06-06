'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('activities_has_participants', {
      activity_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'Activities', 
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      user_id: {
        allowNull: false,
        primaryKey: true,
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('activities_has_participants');
  }
};
