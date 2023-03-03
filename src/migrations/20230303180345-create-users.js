'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = queryInterface.createTable('users', {
      id: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      display_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING
      }
    });

    return users;
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
