'use strict';
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
      },
      product_id: {
        type: DataTypes.UUID
      },
      user_id: {
        type: DataTypes.UUID
      },
      address_id: {
        type: DataTypes.UUID
      },
      payment_id: {
        type: DataTypes.UUID
      },
      paymentMethod: {
        type: DataTypes.STRING
      },
      amount: {
        type: DataTypes.DOUBLE
      },
      status: {
        type: DataTypes.STRING
      },
      deliveryStatus: {
        type: DataTypes.STRING
      },
      paymentStatus: {
        type: DataTypes.STRING
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
    return await queryInterface.dropTable('Orders')
  }
};
