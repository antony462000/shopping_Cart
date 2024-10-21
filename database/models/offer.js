`use strict`;
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    static associate(models) {}
  }
  Offer.init(
    {
      id: {
        allowNull: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      product_id: {
        type: DataTypes.UUID,
      },
      offerType: {
        type: DataTypes.STRING,
      },
      value: {
        type: DataTypes.DOUBLE,
      },
      isExpire: {
        type: DataTypes.BOOLEAN,
      },
      validity: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Offer",
      tableName: "Offers",
      timestamps: true,
      paranoid: true,
    },
  );
  return Offer;
};
