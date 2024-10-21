"use strict";
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("products", "imageurls", {
      allowNull: true,
      type: DataTypes.ARRAY(DataTypes.STRING),
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("products", "imageurls");
  },
};
