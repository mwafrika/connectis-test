'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carte_en_Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      produit_id: {
        type: Sequelize.INTEGER,
        reference:{
          Model: 'Produit',
          key: 'id'
        }
      },
      utilisateur_id: {
        type: Sequelize.INTEGER,
        reference:{
          Model: 'Utilisateur',
          key: 'id'
        }
      },
      quantite: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Carte_en_Stocks');
  }
};