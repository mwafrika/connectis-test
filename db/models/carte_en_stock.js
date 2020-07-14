'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carte_en_Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carte_en_Stock.hasMany(models.Produit, {
        as: 'produit',
        foreignKey: 'produit_id'
      });
      Carte_en_Stock.hasMany(models.Users,{
        as: 'user',
        foreignKey: 'utilisateur_id'
      })

    }
  };
  Carte_en_Stock.init({
    produit_id: DataTypes.INTEGER,
    utilisateur_id: DataTypes.INTEGER,
    quantite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carte_en_Stock',
  });
  return Carte_en_Stock;
};