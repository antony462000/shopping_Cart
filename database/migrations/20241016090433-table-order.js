"use strict";
const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.UUID,
      },
      userId: {
        type: DataTypes.UUID,
      },
      addressId: {
        type: DataTypes.UUID,
      },
      paymentId: {
        type: DataTypes.UUID,
      },
      paymentMethod: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.DOUBLE,
      },
      deliveryStatus: {
        type: DataTypes.STRING,
        defaultValue: "CREATED",
      },
      paymentStatus: {
        type: DataTypes.STRING,
        defaultValue: "PENDING",
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
    return await queryInterface.dropTable("orders");
  },
};
