'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  Wishlist.init({
    id:{ 
      allowNull:false,
      type:DataTypes.UUID
    },
   product_id:{ 
      allowNull:false,
      type:DataTypes.UUID
    },
    user_id:{ 
      allowNull:false,
      type:DataTypes.UUID
    },
  }, {
    sequelize,
    modelName: 'Wishlist',
    tableName:"Wishlists",
    timestamps:true,
    paranoid:true,
    deletedAt:"deletedAt"
  });
  return Wishlist;
};