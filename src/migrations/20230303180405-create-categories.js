'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = queryInterface.createTable('categories', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    return categories;
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('categories');
  }
};
