'use strict';
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
      },
      order_id: {
        type: DataTypes.UUID
      },
      user_id: {
        type: DataTypes.UUID
      },
      status: {
        type: DataTypes.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Payments')
  }
};

