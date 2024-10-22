"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate(models) {
      Wishlist.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
      Wishlist.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Wishlist.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      productId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      userId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Wishlist",
      tableName: "wishlists",
      timestamps: true,
      paranoid: true,
      deletedAt: "deletedAt",
    },
  );
  return Wishlist;
};
