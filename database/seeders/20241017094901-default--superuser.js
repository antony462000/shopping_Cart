'use strict';


const { v4: uuid } = require("uuid")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [{
      id: uuid(),
      name: "Superadmin",
      email: "admin@gmail.com",
      password: "SUPERADMIN",
      mobile: "1234567893",
      type: "ADMIN",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete("users", null, {})
  }
};
