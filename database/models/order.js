"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {}
  }
  Order.init(
    {
      id: {
        allowNull: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.UUID,
      },
      offerType: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.DOUBLE,
      },
      isExpired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      validity: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "Orders",
      timestamps: true,
      paranoid: true,
      deletedAt: "deletedAt",
    },
  );
  return Order;
};
