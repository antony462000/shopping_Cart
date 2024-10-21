"use strict";
const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable("payments", {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true,
      },
      orderId: {
        type: DataTypes.UUID,
      },
      userId: {
        type: DataTypes.UUID,
      },
      status: {
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
    return await queryInterface.dropTable("payments");
  },
};
