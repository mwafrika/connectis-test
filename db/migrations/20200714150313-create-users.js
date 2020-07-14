'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      },
      datenaissance: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING
      },
      telephone: {
        type: Sequelize.STRING
      },
      datecreation: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.TEXT
      },
      id_role: {
        type: Sequelize.INTEGER,
        reference:{
          Model: 'Roles',
          key: 'id'
        }
      },
      genre: {
        type: Sequelize.STRING
      },
      carte_identite_recto: {
        type: Sequelize.TEXT
      },
      carte_identite_verso: {
        type: Sequelize.TEXT
      },
      gestionnaire_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Users');
  }
};