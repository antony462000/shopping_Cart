'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      address: {
        type: DataTypes.STRING
      },
      isPrimary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      userId: {
        type: DataTypes.UUID
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
    return await queryInterface.dropTable('addresses')
  }
};
