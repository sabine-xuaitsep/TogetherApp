'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users_Follow_Users', {
      follower_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'Users', 
          key: 'id',
        }
      },
      followed_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'Users', 
          key: 'id',
        }
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users_Follow_Users');
  }
};
