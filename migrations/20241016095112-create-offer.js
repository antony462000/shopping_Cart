'use strict';
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Offers', {
      id: {
        allowNull: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      product_id: {
        type: DataTypes.UUID
      },
      offerType: {
        type: DataTypes.STRING
      },
      value: {
        type: DataTypes.DOUBLE
      },
      isExpire: {
        type: DataTypes.BOOLEAN
      },
      validity: {
        type: DataTypes.DATE
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
    return await queryInterface.dropTable('Offers')
  }
};

