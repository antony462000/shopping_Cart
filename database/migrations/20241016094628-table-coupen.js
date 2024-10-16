'use strict';
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('coupens', {
      id: {
        allowNull: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      code: {
        type: DataTypes.STRING
      },
      type: {
        type: DataTypes.STRING
      },
      value: {
        type: DataTypes.DOUBLE
      },
      isExpired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
    return await queryInterface.dropTable('coupens')
  }
};

