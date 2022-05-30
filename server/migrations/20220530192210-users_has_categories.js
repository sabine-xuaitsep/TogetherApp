'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users_Has_Categories', {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'Users', 
          key: 'id',
        }
      },
      category_id:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'Categories', 
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
    await queryInterface.dropTable('Users_Has_Categories');
  }
};
