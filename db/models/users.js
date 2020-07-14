'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.Roles,{
        as:'role',
        foreignKey: 'id_role'
      });
      Users.hasOne(models.Gestionnaire,{
        as: 'gestionaire',
        foreignKey: 'gestionnaire_id'
      })
    }
  };
  Users.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    datenaissance: DataTypes.DATE,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    datecreation: DataTypes.STRING,
    photo: DataTypes.TEXT,
    id_role: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    carte_identite_recto: DataTypes.TEXT,
    carte_identite_verso: DataTypes.TEXT,
    gestionnaire_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};