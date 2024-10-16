'use strict';
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING
      },
      mobile: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }

    })

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Users")
  }
};
