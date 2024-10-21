"use strict";
const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("products", {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      details: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.DOUBLE,
      },
      isOfferProduct: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isCoupenProduct: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      isActive: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("products");
  },
};
