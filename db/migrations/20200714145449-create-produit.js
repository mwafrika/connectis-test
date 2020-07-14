'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.STRING
      },
      unite: {
        type: Sequelize.STRING
      },
      prix: {
        type: Sequelize.STRING
      },
      maxoctet: {
        type: Sequelize.STRING
      },
      validite: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Produits');
  }
};